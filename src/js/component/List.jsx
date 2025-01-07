import React,{useState} from 'react'  
import'../component/index.css' 




const List = () => {  
    const [inputValue, setInputValue]=useState('');  
    const [items, setItems]=useState([]);  
  

    

   const additems=()=>{ 
        if(inputValue !==''){ 

            setItems([...items,inputValue]); 
             setInputValue('') ;
             return
        } 
        alert("El espacio esta vacio!!")

    }  
     
    const Presionar=(event)=>{ 
      if(event.keyCode===13){ 
     additems()
      }
    }
    const inputStyles = {
      width: "230px",
      height: "28px",
      fontSize: "16px",
  };  
  const handlermouse=(e)=>{  
    e.target.style.backgroundColor='black';



  } 
  const handlermouse2=(e)=>{ 
    e.target.style.background='white';
  }
 



  return (
    <div >
      <div className='Cuerpo'>
      <h1>Su Lista De Pendientes</h1> 
      <input name="Input"   onKeyDown={Presionar} placeholder='"No hay tareas, añadir tareas"' type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} style={inputStyles}/>  
      {/* <button onClick={additems}>Anote</button>   */}
     
      <div>{items.length}tasks</div>
      <h3>Su Lista: </h3> 
   
    <ul className='list-group'> 
        { 
            items.map((item,index)=>{ 
                return <li className='list-group-item d-flex li-none justify-content-between align-items-center' key={index} >{item}  
                           {/* <span className='boton2'onClick={()=>setItems(prev=>prev.filter((_,currentIndex)=>index != currentIndex))} onMouseOver={handlermouse} onMouseLeave={handlermouse2}>X</span>  */}
                           <span className='btn btn-danger'onClick={()=>setItems(prev=>prev.filter((_,currentIndex)=>index != currentIndex))}>X</span> 
                        </li>
            })
        }
      </ul>
 
      

      </div>
        
    </div>
  )
}

export default List
