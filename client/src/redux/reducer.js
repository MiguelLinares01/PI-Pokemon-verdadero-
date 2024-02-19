import { SHOW_ALL, FIND_NAME, FIND_ID, NO_ID } from "./action-types"

const initialState = {
    allP: [],
    pokeN: [],
    pokeId: []
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case SHOW_ALL:
            return {...state, allP: action.payload};
        case FIND_NAME:
            return {...state, pokeN: action.payload};
        case FIND_ID:
            return {...state, pokeId: action.payload};
        case NO_ID:
            console.log("2", action.payload);
            return { ...state, pokeId: []};
        default:
            return {...state};
    }
}