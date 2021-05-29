// Components
import { ColumnFlexReverseDiv, WeatherContainer } from "../atoms/Container"
import { WeatherStored } from "../molecules/Weather"

// Interfaces
import { ILocalStorageSearchedList, IWeatherData } from '../Interface'

function WeatherStorage({searched_list}: ILocalStorageSearchedList) {
    return <WeatherContainer width="50%" height="80%">
        <ColumnFlexReverseDiv>
            {searched_list.map((props: IWeatherData,
            index: number) => <WeatherStored key={props.city+index} {...props} />)}
        </ColumnFlexReverseDiv>
    </WeatherContainer>
}

export default WeatherStorage