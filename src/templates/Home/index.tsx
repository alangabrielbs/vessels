import { useState } from 'react'

import Header from 'components/Header'
import { Vessel } from 'components/Map'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

import * as S from './styles'

export type HomeProps = {
  vessels: Vessel[]
}

const Home = ({ vessels: data }: HomeProps) => {
  const [vessels] = useState(() => data)
  const [filteredVessels, setFilteredVessels] = useState<Vessel[] | []>([])
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearchValue(value)
    const filtered = vessels.filter(
      ({ name, from, to, country }) =>
        name.toLowerCase().includes(value.toLowerCase()) ||
        from.toLowerCase().includes(value.toLowerCase()) ||
        to.toLowerCase().includes(value.toLowerCase()) ||
        country.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredVessels(filtered)
  }

  const listOfvessels = searchValue ? filteredVessels : vessels

  return (
    <>
      <S.Embed src="http://localhost:3000/video/stream" />
      <Map vessels={listOfvessels} />
      <Header onChange={handleSearch} searchValue={searchValue} />
    </>
  )
}

export default Home
