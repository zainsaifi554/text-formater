import { useState } from "react"
import React from 'react'
import PropTypes from 'prop-types'
import '.././App.css'

export default function TextForm({heading, mode}) {

    const handleUpCase = () => {
        
        let newText = text.toUpperCase();
        setText(newText)
    }

    
    const handleLowCase = () => {
        
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearCase = () => {
        
        let newText = '';
        setText(newText)
    }
    const handleChange = (e) => {
        
        let newText = text;
        setText(e.target.value)
console.log(newText)


    }
    const copyText = () => {
        if (!text) {
          alert('Please enter some text to copy');
          return;
        }
        navigator.clipboard.writeText(text)
          .then(() => {
            alert('Text copied to clipboard!');
          })
          .catch((err) => {
            alert('Failed to copy text: ' + err);
          });
      };



    //other method to copy text

      // const copyText = () => {
      //   const textArea = document.getElementById('myBox');
      //   textArea.select();
      //   navigator.clipboard.writeText(textArea.value)
      //   }
    
      const pasteText = () => {
        navigator.clipboard.readText()
          .then((clipText) => {
            setText(clipText);
            alert('Text pasted from clipboard!');
          })
          .catch((err) => {
            alert('Failed to paste text: ' + err);
          });
      };

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange = (e) => {
       setText(e.target.value) 
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className="container my-3" >
            <h1>{heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" placeholder="Enter some text here" value={text} onChange={handleOnChange} id="myBox" style={{backgroundColor:mode==='dark' ? '#343434' : 'white' , color:mode==='dark' ? 'white' : 'black', }} rows="8">Enter some here</textarea>
            </div>
            <button onClick={handleLowCase} className="btn btn-primary mx-1">Convert to lower</button>
            <button onClick={handleUpCase} className="btn btn-primary mx-1">Convert to Upper</button>
            <button onClick={handleClearCase} className="btn btn-primary mx-1">Clear text</button>
            <button onClick={copyText} className="btn btn-primary mx-1">copyText</button>
            <button onClick={pasteText} className="btn btn-primary mx-1">pasteText</button>
            <button onClick={handleExtraSpace} className="btn btn-primary mx-1">remove extra Spaces</button>

        </div>
        <div className="container my-3" >
            <h2>Your Text Summuary</h2>
            <p>{text.split (" ").length-1} words and {text.length}characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p className="main">{text.length>0 ? text: 'Enter some text to preview'}</p>
        </div>
        </>

    )
}
