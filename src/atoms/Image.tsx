import styled from 'styled-components'
import { IStyle } from '../Interface'

const Image = styled.img<IStyle>`
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
`

export default Image