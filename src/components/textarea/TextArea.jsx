import React from 'react'
import classes from "./textarea.module.css"
import { Form } from 'react-bootstrap'

const TextArea = (props) => {
  return (
         <>
           <Form.Group
               className=' w-100 '  
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className={`modal_label mt-0 ${props.txtcls}`}>{props.label}</Form.Label>
                  <Form.Control  className={classes.input_div} as="textarea" value={props.value} readOnly={props.ro} id={props.id} rows={5} />
                </Form.Group>
</>

  )
}

export default TextArea
