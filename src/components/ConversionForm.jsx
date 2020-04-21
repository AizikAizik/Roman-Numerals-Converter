import React from "react"
import Output from "./Output"
import "./conversion.css"

class ConversionForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            numInput: "",
            output: ""
        }
    }

    handleInput = (event) => {
        this.setState({numInput: event.target.value, output : ""})
        //console.log(this.state.numInput)
    }

    submitAction = (num) => {
        let newNum = Number(num)
        if (!num) {
            alert(`The input field is empty`)
        } else if (newNum < 1) {
            alert("Roman Numerals start from 1 and above 😤😡")
            this.setState({output: ""})
        } else {
            this.convertRomanNumeral(newNum)
        }

    }

    convertRomanNumeral = (num) => {
        let roman = ""
        let romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
        let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

        for (let i = 0; i < numbers.length; i++) {
            while (num >= numbers[i]) {
                roman += romanNumerals[i]
                num -= numbers[i]
            }
        }

        this.setState({output: roman})
        return roman
    }

    render() {
        const {numInput, output} = this.state
        return (
            <div className="form-container">
                <label>Enter Number Here</label>
                <input type="Number" className="num-conversion" onChange={this.handleInput}
                       value={this.state.numInput}/>
                <input type="submit" className="btn" onClick={() => this.submitAction(numInput)}/>
                <br/>
                {/*Check if there's an output or not */}
                {output && numInput ? <Output numInput={numInput} output={output}/> : null}
            </div>
        )
    }
}

export default ConversionForm