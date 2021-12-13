import { useEffect } from 'react'

import JSMpeg from '@cycjimmy/jsmpeg-player'

import * as S from './styles'

const VideoStream = () => {
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_URL || 'ws://localhost:9999'
    new JSMpeg.VideoElement('#wrapper', url)
  }, [])

  return <S.Wrapper id="wrapper" />
}

export default VideoStream
