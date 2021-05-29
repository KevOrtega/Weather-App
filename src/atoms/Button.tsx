import styled from 'styled-components'
import { IStyle } from '../Interface'

const Button = styled.button<IStyle>`
    font-size: 1.5em;
    min-width: 50px;
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    border: none;
    outline: none;
    cursor: pointer;
`

export const ButtonMalibu = styled(Button)<IStyle>`
    border-radius: 5px;
    background-color: var(--malibu);
    transition: box-shadow .3s ease-out;

    :hover {
        box-shadow: .2em .2em .5em var(--slate-gray);
    }

    :active {
        box-shadow: none
    }
`

export const ButtonNavigation = styled(Button)<IStyle>`
    width: 6em;
    height: 3em;
    background-color: var(--white);
    color: var(--slate-gray);
    transition: box-shadow .3s ease-out, color .3s;

    :hover {
        box-shadow: 0 0 .2em var(--hit-gray);
        color: var(--hit-gray);
    }

    :active {
        box-shadow: none
    }
`

export default Button