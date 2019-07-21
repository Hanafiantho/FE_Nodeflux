import React from 'react'

// Import Child Components
import Home from './Home'
import WWD from './WWD'

class App extends React.Component {
    render() {
        return (
            <div>
                <Home />
                <WWD />
            </div>
        )
    }
}

export default App