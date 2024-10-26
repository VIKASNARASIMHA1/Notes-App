import React from 'react'
import Navbar  from './components/Navbar'
import Form from './components/Form'
import Card from './components/Card'
import Modal from './components/Modal'

import { useState } from 'react'
 function App() {
  const [title,settitle] = useState('')
  const [descri,setdescri]=useState('')
  
  const [notes,setnotes]=useState(getitems)
  
  const [editid,seteditid]=useState('')
  localStorage.setItem("notes",JSON.stringify(notes))
  
  return (
    <>
      
      <Navbar notes={notes} setnotes={setnotes} />
      
      <Form title={title} settitle={settitle} descri={descri} setdescri={setdescri} notes={notes} setnotes={setnotes}/>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h1 className="mb-3">Your Notes</h1>
            {
              notes.length==0?<div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Message:</h5>
                <p className="card-text">
                  No Notes Are Available For Reading
                </p>
              </div>
            </div>:notes.map((element)=>{
              return(
                <Card element={element} key={element.id} notes={notes} setnotes={setnotes} seteditid={seteditid}/>
              )
            })
            }
          </div>
        </div>
      </div>
      <Modal editid={editid} notes={notes} setnotes={setnotes}/>
    </>
  )
  function getitems(){
    const note = JSON.parse(localStorage.getItem("notes"))
    if(note)
    return note
    else
    return []
  }
}
export default App
