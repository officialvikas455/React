import { useState } from "react"

export default function CommentsForm(){
    let [formData, setFormData] = useState({
        username:"",
        remark:"",
        rating :5,
    });

    let handleInputChange = (event)=>{
        setFormData((currData) => {
            return {...currData, [event.target.name] : event.target.value}
        })
    }

    let handleSubmit = (event)=>{
        console.log(formData);
        event.preventDefault();
    setFormData({
        username:"",
        remark:"",
        rating :5,
    });
    }
    return (
        <div>
          <h4>Give a comment</h4>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="username"  value={formData.username} onChange={handleInputChange} id="username"/>
            <br /><br />
             <label htmlFor="remark">Remarks</label>
            <textarea name="remark" id="remark" value={formData.remarks} placeholder="add few remarks" onChange={handleInputChange}></textarea>
            <br /><br />

             <label htmlFor="rating">Rating</label>
            <input type="number" id="rating" placeholder="rating" min={1} max={5}  value={formData.rating} onChange={handleInputChange}/>
            <br /><br />

            <button >Add Comment</button>
          </form>
        </div>
    )
}