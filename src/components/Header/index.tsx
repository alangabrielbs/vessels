import { Search } from 'react-feather'

import TextField from 'components/TextField'

import * as S from './styles'

type HeaderProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  searchValue: string
}

const Header = ({ onChange, searchValue }: HeaderProps) => {
  return (
    <S.Wrapper>
      <S.Content>
        <TextField
          placeholder="Search for verssel"
          icon={<Search />}
          iconPosition="right"
          value={searchValue}
          onChange={onChange}
          name="search"
        />
      </S.Content>
    </S.Wrapper>
  )
}

export default Header
