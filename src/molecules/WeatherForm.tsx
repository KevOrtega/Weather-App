//Dev modules
import { useState } from 'react'

// Components
import { ButtonMalibu } from '../atoms/Button'
import { Form } from '../atoms/Container'
import H1 from '../atoms/Heading'
import Input from '../atoms/Input'

// Interfaces
import { IFormUIProps, IPropHandleSearch } from '../Interface'

function WeatherFormUI({city, country, handleChange, handleSubmit}: IFormUIProps) {
    return <Form width="50%" onSubmit={handleSubmit}>
        <H1>Search your city</H1>

        <Input margin="1em 0 .5em" name="city" padding=".5em 0" placeholder="city name" onChange={handleChange} value={city} width="50%" />
        <Input margin=".5em 0 1em" name="country" padding=".5em 0" placeholder="country code" onChange={handleChange} value={country} width="50%" />

        {city.length > 0 ?
        <ButtonMalibu padding="1em 0" type="submit" width="50%">
            search
        </ButtonMalibu> :
        <ButtonMalibu disabled type="button" padding="1em 0" width="50%">search</ButtonMalibu>}
    </Form>
}

function WeatherForm({handleSearch}: IPropHandleSearch): JSX.Element {
    const [city, setCity] = useState<string>('')
    const [country, setCountry] = useState<string>('')

    const handleChange = (e: any) => {
        e.target.name === 'city' ?
        setCity(e.target.value) : 
        setCountry(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        handleSearch(city, country)
    }

    return <WeatherFormUI {...{city, country, handleChange, handleSubmit}} />
}

export default WeatherForm