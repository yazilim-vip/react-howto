import React, { FC, useState } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Container, Navbar, Nav } from 'react-bootstrap'

import { HowToContainer, HOWTO_VIEW_MODE_GRID_VIEW } from '../lib'
import { MOCK_CATEGORY } from './MockHowtoContent'

// Fontaweome
library.add(fab)
library.add(fas)
library.add(far)

const App: FC = () => {
    // states
    const [requestedPath, setRequestedPath] = useState<string>('/howto')
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">React HowTo</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Showcase</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
            <Container fluid className="py-4 h-100">
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
            </Container>
        </div>
    )
}
export default App
