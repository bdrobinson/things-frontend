// @flow

import { AUTH_URL, THINGS_URL } from '../../constants/urls'

const JSON_HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}

const fetchToken = async (username: string, password: string) => {
    const response = await fetch(AUTH_URL, {
        method: 'POST',
        headers: new Headers(JSON_HEADERS),
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    })
    if (!response.ok) {
        throw new Error('Authorisation failed. Check username/password.')
    }

    const json = await response.json()
    return json.token
}

const fetchThingsFromToken = async (token: string) => {
    const response = await fetch(THINGS_URL, {
        method: 'GET',
        headers: new Headers({ ...JSON_HEADERS, 'Authorization': `JWT ${token}` }),
    })
    if (!response.ok) {
        throw new Error('Could not fetch data.')
    }
    const things = await response.json()
    return things
}

export const fetchThings = async (username: string, password: string) => {
    const token = await fetchToken(username, password)
    const things = await fetchThingsFromToken(token)
    return things.map(thing => thing.name)
}
