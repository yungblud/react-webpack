import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root'
import './styles/index.scss'

ReactDOM.render(<Root />, document.getElementById('root'))

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/sw.js')
            .then(registration => {
                console.log('SW registered', registration)
            })
            .catch(e => {
                console.log('SW registration failed: ', e)
            })
    })
}
