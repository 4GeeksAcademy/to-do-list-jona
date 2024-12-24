import React,{useState} from 'react'

const List = () => {  
    const [inputValue, setInputValue]=useState('');  
    const [items, setItems]=useState([]); 

    const additems=()=>{ 
        if(inputValue !==''){ 

            setItems([...items,inputValue]); 
             setInputValue('') ;
             return
        }  
        alert("Esl espacio esta vacio!!")

    } 
    const Clear=()=>{  
      setItems([]) 
   
      
    }


  return (
    <div>
      
        <h1>Su Lista De Pendientes</h1> 
      <input name="Input" type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>  
      <button onClick={additems}>Anote</button>  
     

      <h3>Su Lista: </h3> 
   
    <ul> 
        { 
            items.map((item,index)=>{ 
                return <li key={index}>{item}  <button onClick={()=>setItems(items.filter((_,currentIndex)=>index != currentIndex))}>X</button></li>
            })
        }
      </ul>
   
      
    </div>
  )
}

export default List
