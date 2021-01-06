import React, { FC } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { ConnectedRouter } from 'connected-react-router'
import firebase from 'firebase/app'
import 'firebase/database'
import { Container } from 'react-bootstrap'
import { Switch, Route, Redirect } from 'react-router-dom'

import { HowTo } from './HowTo'
import { history } from './redux/configureStore'

// Firabase
const config = {
    databaseURL: 'https://yvip-howto.firebaseio.com',
    projectId: 'yvip-howto'
}
export const Firebase = firebase.initializeApp(config)

// Fontaweome
library.add(fab)
library.add(fas)
library.add(far)

const App: FC = () => (
    <ConnectedRouter history={history}>
        <Container fluid className="py-4 h-100">
            <Switch>
                <Redirect from="/:url*(/+)" to={history.location.pathname.slice(0, -1)} />
                <Route exact path="/*" component={HowTo} />
            </Switch>
        </Container>
    </ConnectedRouter>
)

export default App