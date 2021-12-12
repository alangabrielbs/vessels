/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const next = require('next')
const rtsp = require('rtsp-relay')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  const { proxy, scriptUrl } = rtsp(server)

  const handler = proxy({
    url: `rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4`,
    verbose: false
  })

  server.ws('/api/stream', handler)

  server.get('/video/stream', (req, res) =>
    res.send(`
    <canvas id='canvas'></canvas>

    <script src='${scriptUrl}'></script>
    <script>
      loadPlayer({
        url: 'ws://' + location.host + '/api/stream',
        canvas: document.getElementById('canvas')
      });
    </script>
  `)
  )

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
