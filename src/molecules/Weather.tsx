// Components
import { ColumnFlexDiv, FlexDiv } from '../atoms/Container'
import H1, { H2BIG, H2, H3 } from '../atoms/Heading'
import Hr from "../atoms/ThematicBreak"
import Image from '../atoms/Image'

// Interfaces
import { IWeatherData } from '../Interface'

export function WeatherStored({city, 
country, 
description,
icon,
temperature, 
min_temperature, 
max_temperature,
wind_speed, 
wind_gust, 
wind_direction}: IWeatherData): JSX.Element {    
    return <ColumnFlexDiv margin="2em 0" width="100%">
        <H2BIG>{city} {country}</H2BIG>
        <FlexDiv>
            <H2>{description}</H2>
            <Image src={icon} width="6em" />
        </FlexDiv>
        <Hr />
        <H3>Temperature: {temperature} °C</H3>
        <H3>Temperature min: {min_temperature} °C</H3>
        <H3>Temperature max: {max_temperature} °C</H3>
        <H3>Wind speed: {wind_speed} m/s</H3>
        <H3>Wind gust: {wind_gust} m/s</H3>
        <H3>Wind direction: {wind_direction} deg</H3>
    </ColumnFlexDiv>
}

function Weather({city, 
country,
icon,
description, 
temperature, 
min_temperature, 
max_temperature, 
wind_speed, 
wind_gust, 
wind_direction}: IWeatherData): JSX.Element {
    return <ColumnFlexDiv width="50%">
        <H1>{city} {country}</H1>
        <FlexDiv>
            <H2>{description}</H2>
            <Image src={icon} width="6em" />
        </FlexDiv>
        <Hr />
        <H3>Temperature: {temperature} °C</H3>
        <H3>Temperature min: {min_temperature} °C</H3>
        <H3>Temperature max: {max_temperature} °C</H3>
        <H3>Wind speed: {wind_speed} m/s</H3>
        <H3>Wind gust: {wind_gust} m/s</H3>
        <H3>Wind direction: {wind_direction} deg</H3>
    </ColumnFlexDiv>
}

export default Weather