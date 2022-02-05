import * as types from "../actionTypes/auth_actionTypes";
import { auth } from "../../firebase/firebase";

const registerStart = () => ({
    type: types.REGISTER_START,
});

const registerSuccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload: user,
});

const registerFail = (error) => ({
    type: types.REGISTER_FAIL,
    payload: error,
});

const loginStart = () => ({
    type: types.LOGIN_START,
});

const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user,
});

const loginFail = (error) => ({
    type: types.LOGIN_FAIL,
    payload: error,
});

const logoutStart = () => ({
    type: types.LOGOUT_START,
});

const logoutSuccess = () => ({
    type: types.LOGOUT_SUCCESS,
});

const logoutFail = (error) => ({
    type: types.LOGOUT_FAIL,
    payload: error,
});


export const registerInitiate = (email, password, displayName) => {
    return function (dispatch) {
        dispatch(registerStart());
        auth.createUserWithEmailAndPassword(email, password).then(({ user }) => {
            user.updateProfile({
                displayName,
            });
            dispatch(registerSuccess(user));
        }).catch((error) => dispatch(registerFail(error.message)));
    };
};

export const loginInitiate = (email, password) => {
    return function (dispatch) {
        dispatch(loginStart());
        auth.signInWithEmailAndPassword(email, password).then(({ user }) => {
            dispatch(loginSuccess(user));
        }).catch((error) => dispatch(loginFail(error.message)));
    };
};

export const logoutInitiate = () => {
    return function (dispatch) {
        dispatch(logoutStart());
        auth.signOut().then((resp) => dispatch(logoutSuccess())).catch((error) => dispatch(logoutFail(error.message)));
    };
};

export const fetchUser = () => {
    return function (dispatch) {
        auth.onAuthStateChanged((currentUser) => {
            if (currentUser) {
                localStorage.setItem("isAuthenticated", true);
                dispatch({
                    type: "FETCH_USER",
                    payload: currentUser.toJSON(),
                });
            } else {
                localStorage.removeItem("isAuthenticated");
                dispatch({
                    type: "FETCH_USER",
                    currentUser: null,
                });
            }
        });

    }
};