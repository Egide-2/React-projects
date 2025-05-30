import React,{useState} from 'react'

function MyForm(){

    const [name, setName]=useState("guest")
    const [email, setEmail]=useState()
    const [coment, setComent]= useState()
    const [study, setStudy]=useState()
    const [transport, setTransport]=useState()

    const handleTranspot=(event)=>{
        setTransport(event.target.value)
    }
    

    const handleStudy=(event)=>{
        setStudy(event.target.value)
    }
    
    const handleComent=(event)=>{
        setComent(event.target.value)
    }
    
    const handleName=(event)=>{
        setName(event.target.value)
    };
    const handleEmail=(event)=>{
    setEmail(event.target.value)
    }
 return(
    <div>
        <input value={name} onChange={handleName}/>
        <p>name:{name}</p>
        <input value={email} onChange={handleEmail}/>
        <p>Email:{email}</p>
            <textarea value={coment} onChange={handleComent}/>
            <p>coment:{coment}</p>
            <select value={study} onChange={handleStudy} placeholder="Select time">
                <option>Select time</option>
                <option value="day">day</option>
                <option value="holiday">holiday</option>
                <option value="weekend">weekend</option>
            </select>
            <p>study time:{study}</p>
            <label>
                <input type="radio" value="By your oun" 
                        checked={transport === "By your oun"} 
                        onChange={handleTranspot}/>
                
                By your oun
    
            </label><br/>
            <label>
                <input type='radio' value="By school bus" 
                       checked={transport === "By school bus"}  
                       onChange={handleTranspot} />
                
                By school bus
            </label>
            <p>way of transport:{transport}</p>
            
    </div>
 );  
};
export default MyForm 
