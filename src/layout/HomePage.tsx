// Dev modules
import { useState, useEffect } from 'react'

// Interfaces
import { IWeatherData } from '../Interface'

// Components
import { PageContainer } from '../atoms/Container'
import { WeatherIlustration } from '../atoms/Ilustration'
import Weather from "../molecules/Weather"
import GetData, { GetDataByLatitudeandLongitude } from '../WeatherData'

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

function HomePageUI(props: IWeatherData): JSX.Element {
    return <PageContainer height="100%" width="100%">
        <Weather {...props} />
        <WeatherIlustration margin="0 2em" width="30%" />
    </PageContainer>
}

function HomePage(): JSX.Element {
    const [weather_data, setWeatherData] = useState<IWeatherData>(GetInitialData())

    useEffect(() => {
        if(weather_data.city !== '') return
        
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(async (position) => {
                const request: IWeatherData = await GetDataByLatitudeandLongitude(position.coords.latitude, position.coords.longitude)
                setWeatherData(request)
            })
            return
        }

        (async () => {
            const request: IWeatherData = await GetData('London', 'GB')
            setWeatherData(request)
        })()
    }, [weather_data])

    return <HomePageUI {...weather_data} />
}

export default HomePage