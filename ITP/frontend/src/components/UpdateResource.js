import React, { useState, useRef, Component, useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { API_URL } from '../utils/constants';
import {withRouter} from 'react-router-dom'


function UpdateResource(props){

  const[data,setData]=useState([])
  console.warn("props",props.match.params.id)
  useEffect(async()=>{
   let result = await fetch("http://localhost:8070/getAllFile/"+props.match.params.id);
   result = await result.json();
   //const result = await axios.get(`${API_URL}/getAllFile/:id`);
    setData(result)
  })
  return(
    <div>
      <h1>Update Resource</h1>
      
      <input text="text" defaultValue={data.id}/>  
      <button>Update</button>
    </div>
  )
}


export default withRouter(UpdateResource);
  