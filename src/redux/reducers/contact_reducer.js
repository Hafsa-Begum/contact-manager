import * as types from "../actionTypes/contact_actionTypes";

const initialState = {
    contacts: [],
    contact: {},
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload,
            };
        case types.GET_CONTACT:
            return {
                ...state,
                contact: action.payload,
            };
        default:
            return state;
    }
};

export default contactReducer;