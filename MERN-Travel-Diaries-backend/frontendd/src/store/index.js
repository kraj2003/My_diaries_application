//auth
import {createSlice, configureStore} from "@reduxjs/toolkit"
import React from 'react'

const authSlice= createSlice({
    name:"auth",
    initialState:{isLoggedIn:false},
    reducers:{
        login(state) { 
            state.isLoggedIn=true
        },
        logout(state){
            state.isLoggedIn=false
        },
    },
})
export const authActions=authSlice.actions

export const store=configureStore({reducer:authSlice.reducer})
