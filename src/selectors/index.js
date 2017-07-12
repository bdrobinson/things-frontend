// @flow

import type { State } from '../reducers'

export const getThings = (state: State) => state.things
export const getHasLoginFailed = (state: State) => state.hasLoginFailed
export const getHasLoginBegun = (state: State) => state.hasLoginBegun
export const getIsLoggedIn = (state: State) => (getThings(state) != null)
