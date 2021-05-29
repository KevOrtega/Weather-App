import { SecondPageContainer, FlexDivRight } from '../atoms/Container'
import { Fragment } from 'react'
import { FourthWeatherIlustration } from '../atoms/Ilustration'
import { GetWeatherSearch } from '../WeatherStorage'
import WeatherStorage from '../molecules/WeatherStorage'
import H1 from '../atoms/Heading'
import { IWeatherData } from '../Interface'

function StorePage(): JSX.Element {
    const searched_list: Array<IWeatherData> | undefined = GetWeatherSearch()

    return <SecondPageContainer height="100%" width="100%">
        {searched_list ?
        <Fragment>
            <FourthWeatherIlustration margin="0 2em" width="30%" />
            <WeatherStorage searched_list={searched_list} />
        </Fragment> :
        <FlexDivRight padding="0 2em" width="100%">
            <H1>You haven't searched any city</H1>
        </FlexDivRight>}
    </SecondPageContainer>
}

export default StorePage