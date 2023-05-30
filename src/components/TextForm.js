import React, {useState} from 'react'


export default function TextForm(props) {

    let strVal = "";
    const handleUpClick = () => {
        console.log("Handled up click")
        setText(text.toUpperCase());
    }
    let btnStyle = {
        backgroundColor : props.btnColor,
        borderColor : props.btnColor
    }
    const handleOnChange = async (event) => {
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
    <div className='container' style={{ color : props.mode==='light'?'black':'white' }} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea value={text} className="form-control" onChange={handleOnChange} style={{ backgroundColor : props.mode==='light'?'white':'grey', color : props.mode==='light'?'black':'white'  }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" style={btnStyle} onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-1" style={btnStyle} onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-1" style={btnStyle} onClick={handleUndoClick}>Undo</button>
    </div>
    <div className="container my-2" style={{ color : props.mode==='light'?'black':'white' }}>
        <h2>Your text summary</h2>
        <p>{text.length === 0 ? 0 : text.split(" ").filter((element) => {return element.length!==0;}).length} Words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something to preview it here'}</p>
    </div>
    </>
    
  )
}
