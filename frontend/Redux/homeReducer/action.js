import axios from "axios";
import { POST_THIRD,POST_FIRST,POST_SECOND ,ERROR,LOADING,POST_DATA_FIRST,POST_DATA_SECOND,POST_DATA_THIRD,PATCH_DATA_FIRST,PATCH_DATA_SECOND,PATCH_DATA_THIRD,DELETE_DATA_FIRST,DELETE_DATA_SECOND,DELETE_DATA_THIRD} from "./actionType";



export const getfirstData=(dispatch)=>{
    dispatch({type:LOADING})
    return axios.get("http://localhost:8089/info/").then((res)=>{
        dispatch({type:POST_FIRST,payload:res.data})
        console.log(res)
    }).catch((er)=>dispatch({type:ERROR}))
}


// export const getfirstidData=(id)=(dispatch)=>{
    
//     dispatch({type:LOADING})
//     return axios.get(`http://localhost:8089/info?id=${id}`).then((res)=>{
//         dispatch({type:POST_FIRST,payload:res.data})
    
//     }).catch((er)=>{
//         dispatch({type:ERROR})
//         console.log(er)
//     })
// }



export const getsecondData=(dispatch)=>{
    dispatch({type:LOADING})
    return axios.get("http://localhost:8089/info2/").then((res)=>{
        dispatch({type:POST_SECOND,payload:res.data})
        console.log(res)
    }).catch((er)=>dispatch({type:ERROR}))
}

export const getthirdData=(dispatch)=>{
    dispatch({type:LOADING})
    return axios.get("http://localhost:8089/info3/").then((res)=>{
        dispatch({type:POST_THIRD,payload:res.data})
        console.log(res)
    }).catch((er)=>dispatch({type:ERROR}))
}



export const postfirstData=(userData)=>(dispatch)=>{
    dispatch({type:LOADING})
    return axios.post("http://localhost:8089/info/add/",userData).then(()=>{
        dispatch({type:POST_DATA_FIRST})
    }).catch((er)=>dispatch({type:ERROR}))
}


export const postsecondData=(userData)=>(dispatch)=>{
    dispatch({type:LOADING})
    return axios.post("http://localhost:8089/info2/add/",userData).then(()=>{
        dispatch({type:POST_DATA_SECOND})
    }).catch((er)=>dispatch({type:ERROR}))
}



export const postthirdData=(userData)=>(dispatch)=>{
    dispatch({type:LOADING})
    return axios.post("http://localhost:8089/info3/add/",userData).then(()=>{
        dispatch({type:POST_DATA_Third})
    }).catch((er)=>dispatch({type:ERROR}))
}



export const patchfirstData=(userData,id)=>(dispatch)=>{
    dispatch({type:LOADING})
    return axios.patch(`http://localhost:8089/info/update/${id}`,userData).then(()=>{
        dispatch({type:PATCH_DATA_FIRST})
    }).catch((er)=>dispatch({type:ERROR}))
}


export const patchsecondData=(userData,id)=>(dispatch)=>{
    dispatch({type:LOADING})
    return axios.patch(`http://localhost:8089/info2/update/${id}`,userData).then(()=>{
        dispatch({type:PATCH_DATA_SECOND})
    }).catch((er)=>dispatch({type:ERROR}))
}


export const patchthirdData=(userData,id)=>(dispatch)=>{
    dispatch({type:LOADING})
    return axios.patch(`http://localhost:8089/info3/update/${id}`,userData).then(()=>{
        dispatch({type:PATCH_DATA_THIRD})
    }).catch((er)=>dispatch({type:ERROR}))
}



export const deletefirstData=(id)=>(dispatch)=>{
    dispatch({type:LOADING})
    return axios.delete(`http://localhost:8089/info/delete/${id}`).then(()=>{
        dispatch({type:DELETE_DATA_FIRST})
    }).catch((er)=>dispatch({type:ERROR}))
}


export const deletesecondData=(id)=>(dispatch)=>{
    dispatch({type:LOADING})
    return axios.delete(`http://localhost:8089/info2/delete/${id}`).then(()=>{
        dispatch({type:DELETE_DATA_SECOND})
    }).catch((er)=>dispatch({type:ERROR}))
}


export const deletethirdData=(id)=>(dispatch)=>{
    dispatch({type:LOADING})
    return axios.delete(`http://localhost:8089/info3/delete/${id}`).then(()=>{
        dispatch({type:DELETE_DATA_THIRD })
    }).catch((er)=>dispatch({type:ERROR}))
}