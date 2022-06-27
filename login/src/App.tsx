import React from 'react'
import ReactDOM from 'react-dom'
import Login from './Login'

const App = () => (
	<Login standalone={true} />
)
ReactDOM.render(<App />, document.getElementById('app'))
