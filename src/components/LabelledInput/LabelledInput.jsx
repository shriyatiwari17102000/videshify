import React from 'react'
import classes from "./LabelledInput.module.css"

const LabelledInput = (props) => {
  return (
          <div className={`${classes.input_div} ${props.cls}`} >
       <label className={`${props.label_modal}`}  htmlFor={props.id}>{props.label}</label>
        <input value={props.value} readOnly={props.ro} type={props.type?props.type:'text'} id={props.id} placeholder={props.ph}  />
    </div>

  )
}

export default LabelledInput
