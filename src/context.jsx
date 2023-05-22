import { useEffect } from "react";
import { useReducer, useContext, createContext } from "react";
import { reducer } from "./reducer"; 


const Appcontext = createContext();
const API = "https://dummyjson.com/products/category/smartphones";

 console.log(API)                                                                                                                      
const initialState ={
    name:'',
    image:'',
    services:[]
}
const AppProvider = ({children})=>{

    const updateHomePage = ()=>{
        return dispatch({
            type: "HOME_UPDATE",
            payload:{
                name: 'Sumit ',
                text:'Sumit The Ace Developer',
                image: "./images/hero.svg"
            }
        })
       }

    const updateAboutPage = ()=>{
            return dispatch({
                type: "ABOUT_UPDATE",
                payload:{
                    name: 'Sumit Nath',
                    text: ' Sumit Nath The master of AI and Machine Learning',
                    image: "./images/about1.svg"
                }
            })
         }
                     
const getServices = async (url) => {
    try {
    const res = await fetch(url);
    const datainitial = await res.json();
    const data = datainitial.products;
    //console.log(data);
        dispatch({
           type:"GET_SERVICES",
           payload: data
       })
    }catch(error){
        console.log(error)
    }
   };
   useEffect(()=>{
    getServices(API)    
    },[]);
    
   const[state, dispatch] = useReducer(reducer,initialState) 
    return <Appcontext.Provider value={{...state,updateAboutPage,updateHomePage}}>
    {children}</Appcontext.Provider>
}

const useGlobalContext = ()=> useContext(Appcontext)

export { AppProvider, useGlobalContext}