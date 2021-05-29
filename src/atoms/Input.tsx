import styled from 'styled-components'
import { IStyle } from '../Interface'

const Input = styled.input<IStyle>`
    font-size: 1.5em;
    min-width: 50px;
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    border-radius: 5px;
    border: none;
    outline: none;
    border-bottom: 1px solid var(--malibu);
    background-color: transparent;
`

export default Input