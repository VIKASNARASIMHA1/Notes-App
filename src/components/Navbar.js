import React from 'react'
import { useState } from 'react';
import Card from './Card';

function Navbar({notes,setnotes,refresher}) {
  const [searchvalue,setter]=useState('')

  const deleteall = ()=>{
    var w = window.confirm("Are You Sure About Deleting All The Notes?");
    if(!w){
      return
    }
    localStorage.removeItem("notes");
    window.location.reload();
    
  }
  const sorter=(value)=>{
    if(value==="Latest First"){
      notes.sort((a,b)=>b.id-a.id)
    }
    if(value==="Oldest First"){
      notes.sort((a,b)=>a.id - b.id)
    }
    setnotes([...notes])
  }
  return (
    <>
      
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" >NotesApp</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sort By
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#" onClick={()=>sorter("Latest First")}>Latest First</a></li>
            <li><a class="dropdown-item" href="#" onClick={()=>sorter("Oldest First")}>Oldest First</a></li>
            
          </ul>
        </li>
        <button className="btn btn-danger" type="submit" onClick={deleteall}>Delete All</button>
      </ul>
//       <form className="d-flex" role="search" onSubmit={searching}>
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setter(e.target.value)}/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
    </div>
  </div>
</nav>
    </>
  )
  
}
export default Navbar
