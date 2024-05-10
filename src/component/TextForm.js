
import React , {useState} from 'react'


export default function TextForm(props) {
 
  const handleUpClick = ()=> {
    console.log("Click me tahnkyou" + text)
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Convert into uppercase","success");

  }
  const handleLowClick = ()=> {
    console.log("Click me tahnkyou" + text)
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Convert into lowercase","success");

  }
  const handleColorClick = ()=> {
    console.log("Click me tahnkyou" + text)

    setTextColor('red')

  }

   const handleCopy = ()=>{
    console.log("I am copy");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
   }

   const handlExtraSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
   }
    const [text , setText] = useState(''); //array destructuring syntax
    const [textColor, setTextColor] = useState('blue');

  
    const handleOnchange = (event)=>{
      console.log("Onchange")
      setText(event.target.value)
     
    }

  return (
    <>
<div className='container' style={{color: props.mode === 'dark'? 'white': '#042743'}}>
    <h1>{props.heading}</h1>
<div className="my-3">
  <textarea className="form-control" value={text} onChange={handleOnchange}  style={{backgroundColor: props.mode === 'dark'? 'white': 'white',color:props.mode === 'rgb(0,0,128)', opacity:0.3}}
 id="mybox" rows="10"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-2" onClick={handleColorClick}>Change Text Color</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copytext</button>
<button className="btn btn-primary mx-2" onClick={handlExtraSpace}>Extra</button>


</div>
    <div className="container my-3"   style={{color: props.mode === 'dark'? 'white': 'black'}}>
      <h1>Your Text summary</h1>
      <p> {text.split(" ").length} words and {text.length}character</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <p>Preview</p>
      <h5 style={{ color: textColor }}><b>{text.length>0?text:"Enter something int the text above to preview here"}</b></h5>
    </div>
    </>
  )
} 