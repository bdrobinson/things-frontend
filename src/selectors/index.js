// @flow

import type { State } from '../reducers'

export const getThings = (state: State) => state.things
export const getIsLoggedIn = (state: State) => getThings(state) != null
