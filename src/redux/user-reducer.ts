import {
    ActionsType,
    FollowType,
    SetCurrentPageType, setTotalCountType,
    SetUsersType,
    UnFollowType,
    UserType
} from "../typeAll";

export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
let initialState:InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
            return {...state, users:action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }

        default:
            return state
    }
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'

export const follow = (userId: number): FollowType => ({type: FOLLOW, userId})
export const unfollow = (userId: number): UnFollowType => ({type: UNFOLLOW, userId})
export const setUsers = (users: UserType[]): SetUsersType => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage:number): SetCurrentPageType => ({type:SET_CURRENT_PAGE,currentPage})
export const setTotalCount = (totalCount:number): setTotalCountType => ({type:SET_TOTAL_COUNT,totalCount})

