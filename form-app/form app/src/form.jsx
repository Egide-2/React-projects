import React,{useState} from "react";

function Form(){
const [name, setName]=useState()
const change= (e)=>useState(e.target.value)
const submit=(e){
    e.preventDefault();
        console.log('Name:', name);
    }




    return (
        <form>
        <div>
           <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}/>
                        </div>

                        <div>
                         <button type="submit">Submit</button>
                        </div>
                        </form>
    
    );

    
}
export default Form 