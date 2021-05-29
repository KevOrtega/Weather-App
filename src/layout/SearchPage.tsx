// Components
import WeatherForm from '../molecules/WeatherForm'
import { SecondPageContainer } from '../atoms/Container'
import { SecondWeatherIlustration } from '../atoms/Ilustration'

// Interfaces
import { IPropHandleSearch } from '../Interface'

function SearchPage({handleSearch}: IPropHandleSearch): JSX.Element {
    return <SecondPageContainer height="100%" width="100%">
        <SecondWeatherIlustration margin="0 2em" width="30%" />
        <WeatherForm handleSearch={handleSearch} />
    </SecondPageContainer>
}

export default SearchPage