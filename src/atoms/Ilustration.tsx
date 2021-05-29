import styled from 'styled-components'
import WeatherSvg from '../assets/weather-app.svg'
import SecondWeatherSvg from '../assets/weather-app2.svg'
import ThirdWeatherSvg from '../assets/weather-app3.svg'
import FourthWeatherSvg from '../assets/weather-app4.svg'
import { IStyle } from '../Interface'

const Ilustration = styled.object<IStyle>`
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
`

export function WeatherIlustration (props: IStyle) {
    return <Ilustration data={WeatherSvg} {...props} />
}

export function SecondWeatherIlustration (props: IStyle) {
    return <Ilustration data={SecondWeatherSvg} {...props} />
}

export function ThirdWeatherIlustration (props: IStyle) {
    return <Ilustration data={ThirdWeatherSvg} {...props} />
}

export function FourthWeatherIlustration (props: IStyle) {
    return <Ilustration data={FourthWeatherSvg} {...props} />
}