import React from "react";

function Form({title,settitle,descri,setdescri,notes,setnotes}) {
    const inputhandle=(e)=>{
        if(e.target.id==="Textenter")
            settitle(e.target.value)
        else
            setdescri(e.target.value)
    }
    const Noteobj = (e)=>{
        e.preventDefault()
        
        if(title!=='' && descri!=='')
         {
            setnotes((note)=>{
                return(
                    [...note,{
                        title:title,
                        Description:descri,
                        id:new Date().getTime(),
                        Date: new Date().toLocaleString()+''
                    }]
                )
            })
            settitle("")
            setdescri("")
         }
         else if(title!=='' && descri==='')
         {
          alert("Enter The Description")
         }
         else if(title==='' && descri!=='')
         {
          alert("Enter The Title")
         }
         else
        {
          alert('Enter The Title And Description')
        }
       
    }
  return (
    <>
      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <form style={{border:"2px solid #ced4da",borderRadius:"10px",padding:"30px"}} autoComplete="off">
              <div className="mb-3">
                <label for="Textenter" className="form-label">
                  Title
                </label>
                <input type="text" className="form-control" id="Textenter" placeholder="Enter The Title" value={title} onChange={inputhandle} autoComplete="off"/>
              </div>
              <div className="mb-3">
                <label for="desc" className="form-label">
                  Description
                </label>
                <textarea
                  name="desc"
                  id="desc"
                  rows="3"
                  className="form-control"
                  placeholder="Enter The Description"
                  value={descri}
                  onChange={inputhandle}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" onClick={Noteobj}>
                Add Notes
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Form;
