import { ILocalStorageSearchedList, IWeatherData } from './Interface'

function addWeather(last_weather: string, new_weather: IWeatherData) {
    const weather: ILocalStorageSearchedList = JSON.parse(last_weather)
        
    weather.searched_list = weather.searched_list.filter(weather_data => weather_data.city !== new_weather.city || weather_data.country !== new_weather.country)
    
    weather.searched_list.push(new_weather)

    if(weather.searched_list.length === 6) {
        weather.searched_list.shift()
    }

    localStorage.setItem('weather', JSON.stringify(weather))
}

function setWeatherList(new_weather: IWeatherData) {
    const searched_list: ILocalStorageSearchedList =  {
        searched_list: [new_weather]
    }

    localStorage.setItem('weather', JSON.stringify(searched_list))  
}

export function SaveWeatherSearch(weather_search: IWeatherData) {
    const last_weather: string | null = localStorage.getItem('weather')
    
    if(last_weather) {
        addWeather(last_weather, weather_search)
        
        return
    }
    
    setWeatherList(weather_search)
}

export function GetWeatherSearch() {
    if(localStorage.length === 0) return

    const last_weather: any = localStorage.getItem('weather')
    const weather: ILocalStorageSearchedList = JSON.parse(last_weather)

    return weather.searched_list
}