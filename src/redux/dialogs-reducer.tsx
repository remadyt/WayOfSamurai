import {
    ActionsType,
    dialogsPage,
    messageType,
    sendMessageType,
    updateNewMessageType
} from "../typeAll";


let initialState = {
    messages: [
        {id: 1, message: 'How are you?'},
        {id: 2, message: 'How old are you'},
        {id: 3, message: 'Where are you from?'},
    ] as Array<messageType>,
    dialogs: [
        {id: 1, name: 'Dmitriy'},
        {id: 2, name: 'Maxim'},
        {id: 3, name: 'Kirill'},
    ] as Array<dialogsPage>,
    newMessageBody: ''
}

export type InitialStateType = typeof initialState


export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state
    }


}
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


export const sendMessage = (): sendMessageType => ({type: SEND_MESSAGE})
export const updateNewMessage = (body: string): updateNewMessageType => ({type: UPDATE_NEW_MESSAGE_BODY, body})


export default dialogsReducer