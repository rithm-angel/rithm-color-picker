import React from 'react'
import './App.css'
import SwatchCreator from './components/SwatchCreator'

const App = () => {
    return(
        <div className='App'>
            <p>Hello, OVERREACTORS!</p>
            <SwatchCreator faveColor='blue' name='catie'/>
        </div>
    )
}

export default App