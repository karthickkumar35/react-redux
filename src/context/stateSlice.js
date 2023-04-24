import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
    name:'sample',
    initialState:{
        isLoggedIn:JSON.parse(localStorage.getItem("isLoggedIn")) || false,
        forms:[],
        fav:[],
        cardin:[],
        productDetails:[],
        search:"",
    },
    reducers:{
        logedin:(state,action)=>{
            state.isLoggedIn=action.payload;
        },
        forms:(state,action)=>{
            state.forms=action.payload;
        },
        favin:(state,action)=>{
          state.forms.filter((value)=>
          value.id === action.payload.id ? (value.isFav =!action.payload.isFav):false,
        )
        },
        cardin:(state,action)=>{
            state.forms.filter((value)=>
          value.id === action.payload.id ? (value.isCard =!action.payload.isCard):false,
            )
        },
        remove:(state,action)=>{
            state.forms.filter((value)=>
            value.id !== action.payload
            )
        },
        search:(state,action)=>{
            console.log(action)
           state.search=action.payload
        },
        productDetails:(state,action)=>{
            state.productDetails=action.payload
        },

    }
})

export const {logedin,forms,favin,cardin,remove,search,productDetails} = stateSlice.actions;
export default stateSlice.reducer;