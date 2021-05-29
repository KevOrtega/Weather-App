// Dev modules
import { Fragment, useState } from 'react'
import { Redirect, BrowserRouter as Router, Route} from "react-router-dom"
import { CSSTransition } from 'react-transition-group';

// assets
import GlobalStyles from'./assets/GlobalStyles'

// Components
import CityPage from './layout/CityPage'
import HomePage from './layout/HomePage'
import Navigation from './molecules/Navigation'
import SearchPage from './layout/SearchPage'
import StorePage from './layout/StorePage'

// interfaces
import { IAppUI, ISearchData } from './Interface'

function GetInitialSearchData(): ISearchData {
    return {
        city: '',
        country: ''
    }
}

function AppUI({handleSearch, redirect, search_data, setRedirect}: IAppUI): JSX.Element {
    return <Fragment>
        <GlobalStyles />
        
        <header>
            <Navigation setRedirect={setRedirect} />
        </header>
        <main> 
            <Router>
                {redirect.length > 0 && <Redirect to={redirect} />}

                <Route exact path='/'>
                    {({match}) => {
                        return <CSSTransition
                        in={match !== null}
                        timeout={2000}
                        classNames={"page-"}
                        unmountOnExit>
                            <HomePage />
                        </CSSTransition>
                    }}
                </Route>
                <Route path='/search'>
                    {({match}) => {
                        return <CSSTransition
                        in={match !== null}
                        timeout={2000}
                        classNames={"second-page-"}
                        unmountOnExit>
                            <SearchPage handleSearch={handleSearch} />
                        </CSSTransition>
                    }}
                </Route>
                <Route path='/city'>
                    {({match}) => {
                        return <CSSTransition
                        in={match !== null}
                        timeout={2000}
                        classNames={"page-"}
                        unmountOnExit>
                            <CityPage {...search_data} />
                        </CSSTransition>
                    }}
                </Route>
                <Route path='/storage'>
                    {({match}) => {
                        return <CSSTransition
                        in={match !== null}
                        timeout={2000}
                        classNames={"second-page-"}
                        unmountOnExit>
                            <StorePage />
                        </CSSTransition>
                    }}
                </Route>
            </Router>
        </main>
    </Fragment>
}

function App(): JSX.Element {

    const [search_data, setSearchData] = useState<ISearchData>(GetInitialSearchData())

    const [redirect, setRedirect] = useState<string>('')

    const handleSearch = (city_name: string, country_name: string): void => {
        const new_search: ISearchData = Object.assign(GetInitialSearchData(), {
            city: city_name, 
            country: country_name
        })

        setSearchData(new_search)

        setRedirect('/city')
    }
    
    return <AppUI {...{handleSearch, redirect, search_data, setRedirect}} />
}

export default App