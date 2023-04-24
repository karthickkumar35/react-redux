import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { Checkbox, TextField } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { forms } from '../../context/stateSlice';
import { useDispatch, useSelector } from 'react-redux';

localStorage.setItem('edit',JSON.stringify([]));
let task = [];
const Form = () => {

    
    const state = useSelector(({sample})=> sample);
     const dispatch = useDispatch();
   
    const [inpName,setName]=useState(state.edit?state.edit[0] ?.Name:'')
    const [inpDes,setDes]=useState(state.edit?state.edit[0]?.Description:'')
    const [inpPri,setPri]=useState(state.edit?state.edit[0] ?.Price:'')
    const [inpStock,setStock]=useState(state.edit?state.edit[0]?.Stock:'')
    const [isCompleted,setIsCompleted]=useState(false)
    const [formSub,setFormsub]=useState(false)
    
  let navigator = useNavigate()
    const inputName=(e)=>{
         console.log("e",e.target.value)
         setName(e.target.value)
    }
    const inputDes=(e)=>{
        console.log("e",e.target.value)
        setDes(e.target.value)
   }
   const inputPri=(e)=>{
    console.log("e",e.target.value)
    setPri(e.target.value)
    }
    const inputStock=(e)=>{
        console.log("e",e.target.value)
        setStock(e.target.value)
    }
    const checked=(e)=>{
        setIsCompleted(e.target.checked?true:false)
    }
    const craeteId = ()=>{
      return Math.floor(Math.random()*1000000)
    }
    const sub=(e)=>{
        e.preventDefault();
        setFormsub('true')
          console.log(inpName,inpDes)
          const setof={Name:inpName, Description:inpDes,Price:inpPri,Stock:inpStock, Answer:isCompleted,id:craeteId(),isFav:false,isCard:false}
          
          if(state.forms.length>0){
            dispatch(forms([...state.forms,setof]))
          }
          else{
           task.push(setof)
           dispatch(forms(task))
          }
       
        navigator("/Home")
    }
  return (
    <div className='form-bg background-images'>
        <form onSubmit={sub}>
        <h2 className='login-head'>Add Product...</h2>
            <TextField className="input" id="outlined-basic" label="Name" name='name' value={inpName} onChange={inputName} variant="outlined" />
            {inpName==="" && formSub && <div className='errorMsg'>The Name Is Required</div>}
            <TextField className="input" id="outlined-basic" label="Desription" name='des' value={inpDes} onChange={inputDes} variant="outlined" />   
            {inpDes==="" && formSub &&<div className='errorMsg'>The Des Is Required</div>}
            <TextField className="input" type="number" id="outlined-basic" label="Price" name='price' value={inpPri} onChange={inputPri} variant="outlined" />   
            {inpPri==="" && formSub &&<div className='errorMsg'>The Price Is Required</div>}
            <TextField className="input" type="number" id="outlined-basic" label="Stock" name='stock' value={inpStock} onChange={inputStock} variant="outlined" />   
            {inpStock==="" && formSub &&<div className='errorMsg'>The Stock Is Required</div>}  
            <Checkbox value={isCompleted} onChange={checked} icon={<FavoriteBorder />} checkedIcon={<Favorite />} id="checkbox"/>      
            <label for='checkbox' className='para'>Accept</label>
            <input className="input link1" type={"submit"}></input>
        </form>
    </div>
  )
}

export default Form