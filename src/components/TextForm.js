import React, {useState} from 'react'

export default function TextForm(props) {
    const[text, setText] = useState("");
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    const handleTiClick = () =>{
        let newText = text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        setText(newText);
        props.showAlert("Converted to titlecase", "success");
    }
    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success");
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces", "success");
    }
    const speak = () => {
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        speechSynthesis.speak(newText);
    }
    const pause = () => {
        speechSynthesis.pause();
    }
    const resume = () => {
        speechSynthesis.resume();
    }
    const stop = () => {
        speechSynthesis.cancel();
    }
    const clear = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared", "success");
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    return (
        <>
        <div className='container'>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="6" placeholder='Enter your text here' style={{color: props.mode === 'light'?'#212529':'#ffffff', backgroundColor: props.mode === 'light'?'#ffffff':'#212529'}}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleUpClick}>Covert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleTiClick}>Convert to TitleCase</button>
            <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-success m-1" onClick={speak}>Speak</button>
            <button disabled={text.length===0} className="btn btn-success m-1" onClick={pause}>Pause</button>
            <button disabled={text.length===0} className="btn btn-success m-1" onClick={resume}>Resume</button>
            <button disabled={text.length===0} className="btn btn-success m-1" onClick={stop}>Stop</button>
            <button disabled={text.length===0} className="btn btn-danger m-1" onClick={clear}>Clear Text</button>
        </div>
        <div className='container my-3'>
            <h4>Your text summary</h4>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{(0.001 * (text.length)).toFixed(2)} minutes read</p>
            <h4>Preview Text</h4>
            <p style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>{text.length > 0 ? text : "Nothing to preview"}</p>
        </div>
        </>
    )
}
