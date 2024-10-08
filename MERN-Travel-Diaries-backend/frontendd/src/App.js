import React, { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import Header from "./components/Header"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Home from "./home/Home"
import Auth from "./auth/Auth"
import Diaries from "./diaries/Dairies"
import Profile from "./diaries/profile"
import Add from "./diaries/add"
import DiaryUpdate from "./diaries/DiaryUpdate"
import { authActions } from "./store"
const App=()=>{
  const dispatch=useDispatch()
  const isLoggedIn=useSelector((state)=>state.isLoggedIn)
  console.log(isLoggedIn)
  useEffect(()=>{
    if(localStorage.getItem("userId")){
      dispatch(authActions.login())
    }
  },[localStorage])
  return(
    <div>
      <header>
        <Header/>
      </header>
      <section>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/auth" element={<Auth/>}></Route>
          <Route path="/diaries" element={<Diaries/>}></Route>
          {isLoggedIn && ( <><Route path="/add" element={<Add/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/post/:id" element={<DiaryUpdate/>}></Route>{" "}</>)}
        </Routes>
        {/*  */}
      </section>
      </div>
  )
}
export default App