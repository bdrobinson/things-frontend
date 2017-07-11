// @flow

import { SUBMIT_LOGIN, LOGOUT } from '../constants/actionTypes'

export const submitLogin = (username: string, password: string) => ({
    type: SUBMIT_LOGIN,
    username,
    password,
})

export const logOut = () => ({
    type: LOGOUT,
})
