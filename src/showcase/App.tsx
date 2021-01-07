import React, { FC, useState } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCopyright, far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Navbar, Nav, Jumbotron } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import { HowToContainer, HOWTO_VIEW_MODE_GRID_VIEW } from '../lib'
import { MOCK_CATEGORY } from './MockHowtoContent'

// Fontaweome
library.add(fab)
library.add(fas)
library.add(far)

const Showcase: FC = () => {
    const [requestedPath, setRequestedPath] = useState<string>('/howto')
    return (
        <HowToContainer
            key={`${requestedPath}-${new Date()}`}
            rootCategory={MOCK_CATEGORY}
            requestedPath={requestedPath}
            viewMode={HOWTO_VIEW_MODE_GRID_VIEW}
            events={{
                itemSelectEventHandler: (type, link) => {
                    setRequestedPath(link)
                }
            }}
        />
    )
}

const Home: FC = () => {
    const syntexHighlightTheme = materialOceanic
    const code = `
import {Component } from 'react'

import MyComponent from 'emresensen'
import 'emresensen/dist/index.css'

class Example extends Component {
    render() {
        return <MyComponent />
    }
}    
`
    return (
        <Container>
            <Jumbotron>
                <h4>Installaton</h4>
                Install with yarn
                <SyntaxHighlighter language="bash" style={syntexHighlightTheme}>
                    yarn add @yazilim-vip/react-howto
                </SyntaxHighlighter>
                Install with npm
                <SyntaxHighlighter language="bash" style={syntexHighlightTheme}>
                    npm install --save @yazilim-vip/react-howto
                </SyntaxHighlighter>
                <hr />
                <h4>Usage</h4>
                <SyntaxHighlighter language="typescript" style={syntexHighlightTheme}>
                    {code}
                </SyntaxHighlighter>
            </Jumbotron>
        </Container>
    )
}

const App: FC = () => {
    // states

    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/">
                    React HowTo
                </Navbar.Brand>
                <Nav className="mr-auto d-flex align-item-center">
                    <Nav.Link as={Link} to="/">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/showcase">
                        Showcase
                    </Nav.Link>
                </Nav>
                <Nav className="d-flex align-items-center">
                    <Nav.Link as={Link} to="https://github.com/react-howto">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </Nav.Link>
                </Nav>
            </Navbar>

            <Container fluid className="py-4">
                <Switch>
                    <Route path="/showcase">
                        <Showcase />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </Container>

            <Navbar bg="dark" variant="dark" className="mt-auto">
                <Nav className="d-flex align-items-center mx-auto justify-content-center">
                    <Nav.Link as={Link} to="https://www.yazilim.vip">
                        <FontAwesomeIcon icon={faCopyright} /> Yazilim VIP
                    </Nav.Link>
                </Nav>
            </Navbar>
        </Router>
    )
}
export default App
