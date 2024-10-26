import React from "react";

function Card({element,notes,setnotes,seteditid}) {
    const removing=(eid)=>{
       var x = window.confirm("Are You Sure About Removing The Note?")
       if(x){
       const newnotes= notes.filter((elem)=>{
            if(elem.id!==eid)
            return elem
        })
        setnotes(newnotes)
       }
       else{
        return
       }
        
    }
    const editing = (eid)=>{
        seteditid(eid)
        notes.filter((elm)=>{
            if(elm.id===eid){
                document.getElementById("Texten").value=elm.title
                document.getElementById("descrip").value=elm.Description

            }
        })
    }
  return (
    <>
      
            <div className="card mb-3">
              <div className="card-body text-capitalize">
                <h5 className="card-title">{element.title}</h5>
                <p className="card-text">
                {element.Description}
                <br/>
                {element.Date}
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={()=>{
                    editing(element.id)
                }}
                >
                  Edit
                </button>
                <button className="btn btn-danger mx-3" onClick={()=>{
                    removing(element.id)
                }}>Remove</button>
              </div>
            </div>
    </>
  );
}
export default Card;
