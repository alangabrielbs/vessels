import styled, { css } from 'styled-components'

import { TextFieldProps } from '.'

type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>

export const InputWrapper = styled.div<IconPositionProps>`
  ${({ iconPosition }) => css`
    display: flex;
    align-items: center;
    background: #0a0c21;
    border-radius: 4px;
    border: 0.1rem solid #241a2d;
    padding-${iconPosition}: 1.8rem;

    &:focus-within {
      border: 1px solid #201E4D;
    }
  `}
`

export const Input = styled.input`
  font-size: 16px;
  padding: 1.2rem 1.8rem;
  color: #fff;

  background: transparent;
  border: 0;
  outline: none;
  width: 100%;

  &::placeholder {
    color: #a8a8b3;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 24px #201e4d inset;
    filter: none;

    &::first-line {
      font-size: 16rem;
    }
  }
`

export const Icon = styled.div<IconPositionProps>`
  ${({ iconPosition }) => css`
    display: flex;
    color: #a8a8b3;
    order: ${iconPosition === 'right' ? 1 : 0};

    & > svg {
      width: 2rem;
      height: 100%;
    }
  `}
`
