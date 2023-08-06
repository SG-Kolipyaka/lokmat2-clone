import { POST_THIRD,POST_FIRST,POST_SECOND ,ERROR,LOADING,POST_DATA_FIRST,POST_DATA_SECOND,POST_DATA_THIRD,PATCH_DATA_FIRST,PATCH_DATA_SECOND,PATCH_DATA_THIRD,DELETE_DATA_FIRST,DELETE_DATA_SECOND,DELETE_DATA_THIRD} from "./actionType";

const initialState={
    isLoading:false,isError:false,
    isError:false,
    first:[],
    second:[],
    third:[],     
 
}

export const reducer=(state=initialState,{type,payload})=>{
switch(type){
case LOADING:
    return {...state,isLoading:true}
    case ERROR:
        return {...state,isLoading:false,isError:true}
    case POST_FIRST:
            return {...state,isLoading:false,isError:false,first:payload}
     case POST_SECOND:
        return {...state,isLoading:false,isError:false,second:payload}
     case POST_THIRD:
        return {...state,isLoading:false,isError:false,third:payload}
    case PATCH_DATA_FIRST:
        return {...state,isLoading:false,isError:false}
     case PATCH_DATA_SECOND:
        return {...state,isLoading:false,isError:false}
     case PATCH_DATA_THIRD:
        return {...state,isLoading:false,isError:false}
    case DELETE_DATA_FIRST:
     return {...state,isLoading:false,isError:false}
     case DELETE_DATA_SECOND:
         return {...state,isLoading:false,isError:false}
     case DELETE_DATA_THIRD:
        return {...state,isLoading:false,isError:false}
     case POST_DATA_FIRST:
         return {...state,isLoading:false,isError:false}
     case POST_DATA_SECOND:
        return {...state,isLoading:false,isError:false}
      case POST_DATA_THIRD:
        return {...state,isLoading:false,isError:false}
default:
        return state
}

}