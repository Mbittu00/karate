import './App.css';
import {useState,useEffect}from'react'
import axios from'axios'
function App() {
let [name,setName]=useState('')
let [phone,setNumber]=useState()
let [age,setAge]=useState()
let [style,setSelect]=useState()
let [left,setLeft]=useState({})
let [gop,setGop]=useState(localStorage.getItem('done'))
let [connect,setConnect]=useState(false)
//chake how many left
useEffect(()=>{
async function call() {
  try {
    let uri='https://karatejoin.herokuapp.com/'
let res=await axios.get(uri)
setLeft(res.data)
setConnect(true)
  } catch (e) {
    alert('somethin is wrong')
  }
};call()
},[])
//submit
let submit=async()=>{
  if (gop) {
    alert('you already pre registered')
  }else{
if (name&&phone&&age&&style) {
  try {
let uri='https://karatejoin.herokuapp.com/'
 let res=await axios.post(uri,{name,phone,age,style})
 setLeft(res.data)
 localStorage.setItem('done','done')
 alert('you are pre registered now')
} catch (e) {
  alert('somethin is wrong')
}
}else{
  alert('Please enter all credential')
}
    
  }
}
  return (
    <>
{
  connect?
  <div className="App">
 <p className='logo'>Notorious Karate and Kickboxing Academy</p>
 <p className='free'>10 Free Pre Admission</p>
 <input type='text' placeholder='Full Name' className='input'
 onChange={(e)=>{
  setName(e.target.value)
}}/>
<input type="number" placeholder='Enter Phone number' className='input'
onChange={(e)=>{
  setNumber(e.target.value)
}}/>
<input type="number" placeholder='Enter Your age'  className='input'
onChange={(e)=>{
  setAge(e.target.value)
}}/>
<select className='select'
onChange={(e)=>{
  setSelect(e.target.value)
}}>
<option selected disabled>Style</option>
<option value="Karate">Karate</option>
<option value="selfDefence">Self Defence</option>
<option value="Boxing">Boxing</option>
<option value="Kickboxing">Kickboxing</option>
</select>
<button className='btn' onClick={submit}>Submit</button>
 <p className='left'>{left.left} more left</p>
    </div>
  :<div className='loded'></div>

}
</>
 );
}

export default App;
