import React, {useState} from 'react'


export default function TextForm(props) {

    let strVal = "";
    const handleUpClick = () => {
        console.log("Handled up click")
        setText(text.toUpperCase());
    }

    const handleOnChange = async (event) => {
        debugger;
        let localPush = push;
        strVal = event.target.value;
        let lastChar = strVal.charAt(strVal.length-1);
        if(lastChar === " ")
        {
            localPush = true;
        }
        else if(stack.length === 0)
        {
            let a = stack;
            a.push({0 : strVal});
            setStack(a);
        }
            

        if(localPush)
        {
            let a = stack;
            a.push({[strVal.length-1] : " "});
            a.push({[strVal.length] : " "});
            setStack(a);
            setPush(false);
        }
        else
        {
            let a = stack;
            a[a.length-1] = { [Object.keys(a[a.length-1])[0]]  : strVal.split(' ').slice(-1)};
            setStack(a);
        }
            

        setText(strVal);
    }

    const handleLowClick = () => {
        setText(text.toLowerCase())
    }
    
    const handleUndoClick = (event) => {
        debugger;
        let a = stack;
        let popped = a.pop();
        let key = Object.keys(popped)[0];
        let value = Object.values(popped)[0][0];
        setStack(a);
        setText(text.substring(0, key) + text.substring(value.length+key));
    }
    

    const [text, setText] = useState('');
    const [stack, setStack] = useState([]);
    const [push, setPush] = useState(false);
    //setText("New fooking text");
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea value={text} className="form-control" onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleUndoClick}>Undo</button>
    </div>
    <div className="container my-2">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} Words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
    
  )
}
