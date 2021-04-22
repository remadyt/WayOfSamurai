import {ActionsType} from "../typeAll";

const SET_USER_DATA = 'SET_USER_DATA'


const initialState = {
    resultCode: null,
    messages: [],
    data: {} as DataType,
    isFetching: false,
    isAuth: false
}

export type DataType = {
    userId: number | null,
    email: string | null,
    login: string | null
}


export type InitialStateType = {
    resultCode: number | null,
    messages: string[],
    data: DataType
    isFetching: boolean,
    isAuth: boolean
}


export const authReducer = (state:InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                data: {...state.data, ...action.data},
                isAuth: true,
            }
        default:
            return state
    }

}

export const setAuthUserData = (data: DataType) => ({type: SET_USER_DATA, data} as const)