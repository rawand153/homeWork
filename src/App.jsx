import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

let nextId=0
function App() {

  const[myList,setMyList]=useState([])
  const [myItem ,setMyItem]=useState('')

  const addItem=()=>{
    setMyList([...myList,{id:nextId++,itemName:myItem}])
    console.log(myList)
  }

  const deleteItem=(id)=>{
    setMyList(myList.filter((x)=>x.id!=id))
  }

  return (
    <>
    <div className='app'>
      <div className='container d-flex'>
        <label > Please insert what you want to buy:</label>
    <input type="text" value={myItem} onChange={(e)=>setMyItem(e.target.value)} />
    <button className='btn btn-dark' onClick={addItem}>Add Item</button>
    {myList.map((item)=>
    
    <p key={item.id}>{item.itemName}<button className='btn ' onClick={()=>deleteItem(item.id)}>x</button></p>
    
    )}
     </div>
    </div>
    </>
  )
}

export default App
