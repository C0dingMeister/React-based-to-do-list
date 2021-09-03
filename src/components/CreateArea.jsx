import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const [inputText , setInputText] = useState({
    title: "",
    content: ""
  })

  const [expanded, setExpanded] = useState(false)

  function handleChange(event){
    const {name,value} = event.target
    setInputText((prevvalue) => {
      return {
        ...prevvalue,
        [name]: value
      }
    })
  }

  function submitText(event){
    props.onAdd(inputText)
    setInputText({
      title: "",
      content: ""
    })
    event.preventDefault()
  }

 function expand(){
    setExpanded(true)
 }

  

  return (
    <div>
      <form className="create-note">
        {expanded ? <input name="title" placeholder="Title" value={inputText.title} onChange={handleChange} /> 
        :null}
        <textarea  name="content" placeholder="Take a note..." rows={expanded ? 3 : 1} onClick={expand} value={inputText.content} onChange={handleChange}/>
        <Zoom in={expanded}>
        <Fab onClick={submitText}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
