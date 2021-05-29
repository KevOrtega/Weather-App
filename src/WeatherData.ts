import axios, { AxiosResponse } from "axios"
import { IWeatherData } from './Interface'

function GetAPIKey(): string {
    return '55c59f6b5ffc6f1d090f45f8bb66499b'
} 

function GetIconSrc(icon_id: string): string {
    return `http://openweathermap.org/img/wn/${icon_id}@2x.png`
} 

const weather_data: IWeatherData = {
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

function ConstructWeatherData(data: any): IWeatherData {
    const new_weather_data: IWeatherData = Object.assign(weather_data, {
        city: data.name,
        country: data.sys.country,
        icon: GetIconSrc(data.weather[0].icon),
        description: data.weather[0].description,
        temperature: data.main.temp,
        min_temperature: data.main.temp_min,
        max_temperature: data.main.temp_max,
        wind_speed: data.wind.speed,
        wind_gust: data.wind.gust,
        wind_direction: data.wind.deg 
    })

    return new_weather_data
}

async function GetData(city: string, country: string) {
    const data: AxiosResponse = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${GetAPIKey()}&units=metric`)

    return ConstructWeatherData(data.data)
}

export async function GetDataByLatitudeandLongitude(lat: number, lon: number) {
    const data: AxiosResponse = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${GetAPIKey()}&units=metric`)

    return ConstructWeatherData(data.data)
}

export default GetData