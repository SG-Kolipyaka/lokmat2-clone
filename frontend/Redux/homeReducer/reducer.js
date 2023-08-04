import { POST_THIRD,POST_FIRST,POST_SECOND ,ERROR,LOADING} from "./actionType";

const initialState={
    isLoading:false,
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
            return {...state,isLoading:false,first:payload}
            case POST_SECOND:
                return {...state,isLoading:false,second:payload}
                case POST_THIRD:
                    return {...state,isLoading:false,third:payload}
    default:
        return state
}

}