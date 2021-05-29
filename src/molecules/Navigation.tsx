// Components
import { ButtonNavigation } from '../atoms/Button'
import { NavigationContainer } from '../atoms/Container'

// Interfaces
import { INavigationProps } from '../Interface'

function Navigation({setRedirect}: INavigationProps): JSX.Element {
    return <NavigationContainer>
        <ButtonNavigation margin="0 .2em 0 0" onClick={() => setRedirect('/')}>HOME</ButtonNavigation>
        <ButtonNavigation margin="0 .2em 0 0" onClick={() => setRedirect('/search')}>SEARCH</ButtonNavigation>
        <ButtonNavigation margin="0 .2em 0 0" onClick={() => setRedirect('/city')}>CITY</ButtonNavigation>
        <ButtonNavigation margin="0" onClick={() => setRedirect('/storage')}>STORAGE</ButtonNavigation>
    </NavigationContainer>
}

export default Navigation