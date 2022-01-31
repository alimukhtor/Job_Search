import { initialState } from "../store";
import { GET_COMPANY_DETAIL, REMOVE_COMPANY } from "../actions";

const compDetailReducer =(state = initialState.companyDetails, action)=> {
    switch(action.type){
        case GET_COMPANY_DETAIL:
            return{
                ...state,
                detail:[state.detail, action.payload],
            }
        case REMOVE_COMPANY:
            return{
                ...state,
                detail: [...state.detail.filter(comp => comp !== action.payload)]
            }
        default:
            return state    
    }
}

export default compDetailReducer