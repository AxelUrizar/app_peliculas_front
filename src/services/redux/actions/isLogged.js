export const LOGGED = 'LOGGED';
export const NOT_LOGGED = 'NOT_LOGGED'

export const isLogged = () => {
    return {
        type: LOGGED
    }
}

export const notLogged = () => {
    return {
        type: NOT_LOGGED
    }
}