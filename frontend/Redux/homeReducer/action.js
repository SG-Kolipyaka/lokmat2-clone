import axios from "axios";
import { POST_THIRD,POST_FIRST,POST_SECOND ,ERROR,LOADING} from "./actionType";



export const getfirstData=(dispatch)=>{
    dispatch({type:LOADING})
    return axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
        dispatch({type:POST_FIRST,payload:res.data})
        console.log(res)
    }).catch((er)=>dispatch({type:ERROR}))
}

export const getsecondData=(dispatch)=>{
    dispatch({type:LOADING})
    return axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
        dispatch({type:POST_SECOND,payload:res.data})
        console.log(res)
    }).catch((er)=>dispatch({type:ERROR}))
}

export const getthirdData=(dispatch)=>{
    dispatch({type:LOADING})
    return axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
        dispatch({type:POST_THIRD,payload:res.data})
        console.log(res)
    }).catch((er)=>dispatch({type:ERROR}))
}