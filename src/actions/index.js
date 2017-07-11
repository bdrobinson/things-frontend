// @flow

import { SUBMIT_LOGIN } from '../constants/actionTypes'

export const submitLogin = (username: string, password: string) => ({
    type: SUBMIT_LOGIN,
    username,
    password,
})
