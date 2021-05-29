//Dev modules
import { useState, useEffect, Fragment } from 'react'

// Components
import Container, { PageContainer } from '../atoms/Container'
import H1 from '../atoms/Heading'
import { ThirdWeatherIlustration } from '../atoms/Ilustration'
import Weather from "../molecules/Weather"
import GetData from '../WeatherData'
import { SaveWeatherSearch } from '../WeatherStorage'

// Interfaces
import { ISearchData, IWeatherData } from '../Interface'

function GetInitialData(): IWeatherData {
    return {
        city: '',
        country: '',
        icon: '',
        description: '',
        temperature: 0,
        min_temperature: 0,
        max_temperature: 0,
        wind_speed: 0,
        wind_gust: 0,
        wind_direction: 0 
    }
}

function CityPageUI(props: IWeatherData): JSX.Element{
    return <PageContainer height="100%" width="100%">
        {props.city.length > 0 ?

        <Fragment>
            <Weather {...props} />
            <ThirdWeatherIlustration margin="0 2em 0 0" width="30%" />
        </Fragment> :

        <Container padding="0 2em">
            <H1>Search a city</H1>
        </Container>}
    </PageContainer>
}

function CityPage({city, country}: ISearchData): JSX.Element {
    const [weather, setWeather] = useState<IWeatherData>(GetInitialData())

    useEffect(() => {
        if(weather.city.length !== 0 || city.length === 0) return;
        
        (async () => {
            const request: IWeatherData = await GetData(city, country)
            setWeather(Object.assign(GetInitialData(), request))
            SaveWeatherSearch(request)
        })()
    }, [weather, city, country])

    return <CityPageUI {...weather} />
}

export default CityPage