import { getVessels } from 'services/vessels'
import Home, { HomeProps } from 'templates/Home'

export default function HomePage(props: HomeProps) {
  return <Home {...props} />
}

export const getStaticProps = async () => {
  const vessels = await getVessels()

  return {
    props: {
      vessels
    },
    revalidate: 5
  }
}
