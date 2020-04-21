import React from "react"
//import './conversion.css'

const Output = ({ numInput, output }) =>{
    return(
        <div className="result">
            <p>The roman numeral of { numInput } is <span className = "output"> { output } </span></p>
        </div>
    )
}

export default Output