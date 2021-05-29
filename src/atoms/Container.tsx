import styled from 'styled-components'
import { IStyle } from '../Interface'

export const Form = styled.form<IStyle>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
`

const Div = styled.div<IStyle>`
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
`

export const FlexDiv = styled(Div)<IStyle>`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FlexDivLeft = styled(FlexDiv)<IStyle>`
    justify-content: flex-start;
    align-items: center;
`

export const FlexDivRight = styled(FlexDiv)<IStyle>`
    justify-content: flex-end;
`

export const ColumnFlexDiv = styled(FlexDiv)<IStyle>`
    flex-direction: column;
`

export const ColumnFlexDivTop = styled(FlexDivLeft)<IStyle>`
    flex-direction: column;
`

export const ColumnFlexDivBottom = styled(FlexDivRight)<IStyle>`
    flex-direction: column;
`

export const ColumnFlexReverseDiv = styled(FlexDivRight)<IStyle>`
    flex-direction: column-reverse;
`

export const FlexDivSpaceBetween = styled(FlexDiv)<IStyle>`
    justify-content: space-between;
`

export const PageContainer = styled(FlexDivSpaceBetween)<IStyle>`
    position: absolute;
    top: 0;
    left: 0;
    background-image: radial-gradient(circle at right, var(--aqua-marine-blue) 40%, var(--white) 41%);
    transition: transform 1.7s .3s;
`

export const SecondPageContainer = styled(FlexDivSpaceBetween)<IStyle>`
    position: absolute;
    top: 0;
    left: 0;
    background-image: radial-gradient(circle at left, var(--aqua-marine-blue) 40%, var(--white) 41%);
    transition: transform 1.7s .3s;
`

export const WeatherContainer = styled(ColumnFlexDivTop)<IStyle>`
    overflow: hidden auto;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none
    }
`

export const NavigationContainer = styled(FlexDiv)<IStyle>`
    z-index: 1;
    position: absolute;
    top: 1em;
    right: 1em;
    box-shadow: .2em .2em 1em var(--hit-gray);
    border-radius: 5px;
    background-color: var(--white);
    overflow: hidden;
    transition: box-shadow .3s ease-out;

    :hover {
        box-shadow: .5em .5em 1em var(--hit-gray);
    }
`

export default Div