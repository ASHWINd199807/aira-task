import React, { useState } from "react";

function Tab2(){
    const [data,setData]=useState([{name:"",age:"",location:"",phone:""}])
   
    const handleClick=()=>{
        setData([...data,{name:"",age:"",location:"",phone:""}])
    }
    const handleChange=(e,i)=>{
        const {name,value}=e.target
        const onchangeVal = [...data]
        onchangeVal[i][name]=value
        setData(onchangeVal)
    }
    const handleDelete=(i)=>{
        const deleteVal = [...data]
        deleteVal.splice(i,1)
        setData(deleteVal)
    }

    

    const displaydata =(event)=>{
        console.log(data)
    }

    return(
        <div className="App">
            <button onClick={handleClick}>Add</button>
            {
                data.map((val,i)=>
                <div>
                    <label htmlFor="name" style={{fontWeight:"bold"}} >Name:</label>
                    <input name="name"  value={val.name} onChange={(e)=>handleChange(e,i)} />
                    <label htmlFor="age"  style={{fontWeight:"bold"}} >Age:</label>
                    <input name="age" value={val.age} onChange={(e)=>handleChange(e,i)} />
                    <label htmlFor="location"  style={{fontWeight:"bold"}}>Location:</label>
                    <input name="location" value={val.location} onChange={(e)=>handleChange(e,i)} />
                    <label htmlFor="phone"  style={{fontWeight:"bold"}}>Phone:</label>
                    <input name="phone" value={val.phone} onChange={(e)=>handleChange(e,i)} />
                    <button onClick={()=>handleDelete(i)}>Delete</button>
                </div>
                )
            }
            <button onClick={displaydata}>Submit</button>
        
            
        </div>
    )
}
export default Tab2;