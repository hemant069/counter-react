import React, { useState } from "react";



const Counter=()=>{
    const [count,Setcount]=useState(0)
    
    const[color,Setcolor]=useState(false)




    const colorhandle={
        colorname:{
            color:  color ? 'green':'red'
        }

    }
        
    
    

    return(
        <>
        <h1 className="colorname" style={colorhandle.colorname}>{count}</h1>
        <p>The Default Color is Red When You click Increment OR Decrement it change</p>
        <button onClick={()=>{
            Setcount(count+1)
          
            if(count%2==0){
                Setcolor(false)
            }
            else{
                Setcolor(true)
            }
        }
        
        }>Increment</button>
        <button onClick={()=>{
            if(count>0){
            Setcount(count-1)
            }
          if(count==0){
              Setcolor(false)
          }
            if(count%2==0){
                Setcolor(false)
            }
            else{
                Setcolor(true)
            }
        }}>decrement</button>
        <button onClick={()=>{
             Setcount(count*2)
             Setcolor(true)
         
        }}>Double</button>
        </>
    )
    }
export default Counter