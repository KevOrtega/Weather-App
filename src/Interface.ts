import { ChangeEventHandler, FormEventHandler } from "react"

export interface IAppUI {
    handleSearch: Function, 
    redirect: string, 
    search_data: ISearchData,
    setRedirect: Function
}

export interface ILocalStorageSearchedList {
    searched_list: Array<IWeatherData>
}

export interface INavigationProps {
    setRedirect: Function
}

export interface IPropHandleSearch {
    handleSearch: Function
}

export interface ISearchData {
    city: string,
    country: string
}

export interface IStyle {
    width?: string,
    height?: string,
    margin?: string,
    padding?: string
}

export interface IFormUIProps extends ISearchData {
    handleChange: ChangeEventHandler<HTMLInputElement>,
    handleSubmit: FormEventHandler<HTMLFormElement>
}

export interface IWeatherData {
    city: string,
    country: string,
    icon: string,
    description: string,
    temperature: number,
    min_temperature: number,
    max_temperature: number,
    wind_speed: number,
    wind_gust: number,
    wind_direction: number 
}




