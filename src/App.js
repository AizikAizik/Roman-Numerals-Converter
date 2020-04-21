import React from 'react'
import Title from "./components/Title"
import ConversionForm from "./components/ConversionForm"

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Title/>
                <br />
                <ConversionForm />
            </div>
        )
    }
}

export default App
