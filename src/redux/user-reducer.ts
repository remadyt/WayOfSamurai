import {ActionsType, FollowType, SetUsersType, UnFollowType} from "../typeAll";
import {type} from "os";


let initialState = {
    users: [
        {
            id: 1,
            followed: true,
            fullName: 'Maxim',
            photoUrl: 'https://www.vokrug.tv/pic/person/e/b/f/1/ebf14965f14a2a2bf01dbc0e34d5f3b6.jpg' ,
            status: 'blablabla',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            }
        },
        {
            id: 2,
            followed: false,
            photoUrl: 'https://www.vokrug.tv/pic/person/e/b/f/1/ebf14965f14a2a2bf01dbc0e34d5f3b6.jpg' ,
            fullName: 'Kirill',
            status: 'blablabla',
            location: {
                city: 'Moscow',
                country: 'Russia'
            }
        },
        {
            id: 3,
            followed: true,
            photoUrl: 'https://www.vokrug.tv/pic/person/e/b/f/1/ebf14965f14a2a2bf01dbc0e34d5f3b6.jpg' ,
            fullName: 'Anton',
            status: 'blablabla',
            location: {
                city: 'Kiev',
                country: 'Ukraine'
            }
        }
    ]
}
export const userReducer = (state = initialState, action: ActionsType) => {
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

export const setUsersAC = (users: any): SetUsersType => ({type: SET_USERS, users})

