
import {useState} from 'react'

function Count(){
    const [number, setnNumber]=useState(0)
    const increment=()=>{
        setnNumber(number + 2)
    }

    const decrement=()=>{
        setnNumber(number - 2)
    }
    const Rest=()=>{
        setnNumber(0)
    }

    return( 
        <div className="bill">
        <h1>count{number}</h1>
<button className="bud" onClick={increment}>increasing</button>
<button className="bud" onClick={Rest}>rest</button>
<button className="bud"onClick={decrement}>increasing</button>
</div>
    );
}

export default Count