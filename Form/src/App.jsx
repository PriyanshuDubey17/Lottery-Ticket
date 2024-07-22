import Form from './Form'
import './App.css'
import { useState } from 'react';

function App() {
  let [comments , setcomments] =useState([{
    fullName: "",
    userName: "",
    password: ""
   }]);
   
   let showFormData = (newComment)=>{
    setcomments((currFormData)=>{
      return [...currFormData, newComment]
    })
   }

  return (
    <>
    <Form showFormData ={showFormData}/>
    <div>
        <h1>Form Data</h1>
        {comments.map((comment, index) => (
          <div key={index}>
            <h3>{comment.fullName}</h3>
            <p>{comment.userName}</p>
            <p>{comment.password}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
