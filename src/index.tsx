import React from 'react'

import ReactDOM from 'react-dom'
import WebFont from 'webfontloader'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-sliding-pane/dist/react-sliding-pane.css'

import App from './showcase/App'

ReactDOM.render(<App />, document.getElementById('root'))

WebFont.load({
    google: {
        families: ['Lato', 'Ubuntu']
    }
})
