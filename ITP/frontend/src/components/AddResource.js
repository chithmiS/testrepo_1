import React,{useState} from "react"
import axios from "axios";

export default function AddResource(){

    const [bookID, setBookID] = useState("");
    const [subject, setSubject] = useState("");
    const [title, setTitle] = useState("");
    const [auther, setAuther] = useState("");
    const [edition, setEdition] = useState("");
    const [uploadedFile, setUploadedFile] = useState ("");


    function sendData(e){

        e.preventDefault();
        const newRes = {

            bookID,
            subject,
            title,
            auther,
            edition,
            
            
        
        }

        axios.post("http://localhost:8070/api/resource/store",newRes).then(()=>{
            alert("Resource Added")

        }).catch((err)=>{
            alert(err)
        })

    }


    return(
      
        <div className= "container">
        <form onSubmit = {sendData}>


            <div class="form-group">
                <h2> Add Reference Book </h2>
                <br></br>
                <label for="bookID">Book ID</label>
                 <input type="text" class="form-control" id="bookID" placeholder="Enter Book ID" onChange={(e)=>{

                     setBookID(e.target.value);

                 }}></input>
                
            </div>
            <div class="form-group">
                 <label for="subject">Subject</label>
                 <input type="text" class="form-control" id="subject" placeholder="Enter Subject" onChange={(e)=>{

                setSubject(e.target.value);

                }}></input>
             </div>

             <div class="form-group">
                 <label for="title">Title</label>
                 <input type="text" class="form-control" id="title" placeholder="Enter Title" onChange={(e)=>{

                setTitle(e.target.value);

                }}></input>
             </div>

             <div class="form-group">
                 <label for="auther">Auther</label>
                 <input type="text" class="form-control" id="auther" placeholder="Enter auther's name" onChange={(e)=>{

                setAuther(e.target.value);

                }}></input>
             </div>

             <div class="form-group">
                 <label for="edition">Edition</label>
                 <input type="number" class="form-control" id="edition" placeholder="Enter Edition" onChange={(e)=>{

                setEdition(e.target.value);

                }}></input>
             </div>

             <div class="form-group">
                <label for="inputFile">Upload Reference Books....</label>
                <input type="file" class="form-control-file" name="file"/>
             
            </div>

            <button type="submit" class="btn btn-primary">Upload</button>
        
        </form>
        </div>
        
    
    )
}