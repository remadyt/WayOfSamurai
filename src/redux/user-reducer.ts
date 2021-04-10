import {ActionsType, FollowType, SetUsersType, UnFollowType, UserType} from "../typeAll";

export type InitialStateType = {
    users: Array<UserType>
}
let initialState:InitialStateType = {
    users: []
}
export const userReducer = (state = initialState, action: ActionsType):InitialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u

                })
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u

                })
            }
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

export const followAC = (userId: number): FollowType => (
    {type: FOLLOW, userId}
)
export const unfollowAC = (userId: number): UnFollowType => (
    {type: UNFOLLOW, userId}
)


export const setUsersAC = (users: UserType[]): SetUsersType => ({type: SET_USERS, users})

