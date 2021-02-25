
import {ActionsType, dialogsPageType, sendMessageType, updateNewMessageBody} from "../typeAll";


let initialState = {
    messages: [
        {id: 1, message: 'How are you?', likeCounts: 12},
        {id: 1, message: 'How old are you', likeCounts: 12},
        {id: 1, message: 'Where are you from?', likeCounts: 12},
    ],
    dialogs: [
        {id: 1, name: 'Dmitriy'},
        {id: 2, name: 'Maxim'},
        {id: 3, name: 'Kirill'},
    ],
    newMessageBody: ''
}
export const dialogsReducer = (state:dialogsPageType = initialState, action:ActionsType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body, likeCounts: 0},)
            return state
        default: return state
    }




}
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'




export const sendMessageCreate = ():sendMessageType => ({type:SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body:string): updateNewMessageBody => ({type:UPDATE_NEW_MESSAGE_BODY,body:body})


export default dialogsReducer