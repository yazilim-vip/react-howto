import React, { FC, useState } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Container, Col, Row } from 'react-bootstrap'
import ReactJson from 'react-json-view'

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
        <Container fluid className="py-4 h-100">
            <Row>
                <Col md="8">
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
                </Col>
                <Col md="4">
                    Example Data
                    <hr />
                    <div
                        style={{
                            height: '90vh',
                            overflowY: 'scroll'
                        }}
                    >
                        <ReactJson src={MOCK_CATEGORY} theme="monokai" name={false} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default App
