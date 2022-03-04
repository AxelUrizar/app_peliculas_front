export const LOGGED = 'LOGGED';
export const NOT_LOGGED = 'NOT_LOGGED'

export const isLogged = (id) => {
    return {
        type: LOGGED
    }
}

export const notLogged = () => {
    localStorage.removeItem('user')
    return {
        type: NOT_LOGGED
    }
}