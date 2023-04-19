import React, { createContext } from "react";

const UserContext = createContext({
  arr1: [],
  arr2: [],
  setArr1:()=>{},
  setArr2:()=>{},
  signal:{},
  setSignal:()=>{},
  arr4:[],
  state:false,
  value:0,
  setArr4:()=>{},
  setState:()=>{},
  setValue:()=>{}
});

export default UserContext;
