import React , {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("uppercase was clicked " + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleLoClick = () => {
        // console.log("uppercase was clicked " + text)
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
    }
    const handleClear = () => {
        // console.log("uppercase was clicked " + text)
        // let newText = text.toLowerCase()
        setText("")
        props.showAlert("Text cleared" , "danger")
    }

    const handleOnChange = (event) => {
        // console.log("on change handler")
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    return (
        <>
        <div>
            <div className="mb-3">
                <h1>{props.heading} </h1>
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#0d0a42' : 'white' , color: props.mode === 'dark' ? 'white' : 'black' }} placeholder='enter text here...' value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-secondary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-secondary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-danger mx-1" onClick={handleClear}>Clear</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>Total words: {text.split(" ").length} <br /> Total characters: {text.length} </p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0 ? text: "Your text will preview here" }</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string
}
TextForm.defaultProps = {
    heading: "Enter text below"
}