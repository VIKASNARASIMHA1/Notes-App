import React from "react";

function Modal({editid,notes,setnotes}) {
    const update=()=>{
      var s = window.confirm("Are You Sure About Editing The Note?")
      if(s){
       const updatednotes= notes.map(elem=>{
            if(editid===elem.id){
                return({...elem, title: document.getElementById("Texten").value,
            Description:document.getElementById("descrip").value,
            id: new Date().getTime(),
          Date:new Date().toLocaleString()+''})
        

            }
            else
            return elem
        })
        setnotes(updatednotes)
      }
      else{
        return
      }
    }
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Notes
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="Texten" className="form-label">
                    Title
                  </label>
                  <input type="text" className="form-control" id="Texten" />
                </div>
                <div className="mb-3">
                  <label for="descrip" className="form-label">
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="descrip"
                    rows="3"
                    className="form-control"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="btn" className="btn btn-primary" onClick={update}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
