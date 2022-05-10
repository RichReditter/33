import React,{useState} from 'react'

let digits = [];
for(let i = 1; i < 16; i++){
    digits.push(i)
}

function Digits(){
    
    const [number, setNumber] = useState(0)
    function sum(event,index){
        // event.preventDefault()
        if(event.type ==='click'){
            // setNumber(digits[event.target.key-1] + digits[event.target.key+1])
            console.log(digits[index-1] + digits[index+1])
        }
        else{
            console.log('right')
        }
    }
    return(
        <div>
            <ul>
                {digits.map((digit,index) => { return <li key={index} onClick={ (event,index)=> 
                    {sum(event,index)}
                     }>{digit}</li> })}
            </ul>
        </div>
    )
    
}

export default Digits;