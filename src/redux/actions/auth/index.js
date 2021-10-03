import { history } from '../../../history'

export const loginAction = data => {
    return async dispatch => {
        await localStorage.setItem('userAdmin', JSON.stringify({ ...data, role: 'admin' }))
        dispatch({ type: "CHANGE_ROLE", payload: 'admin' })
        history.push("/")
    }
}

export const logOutAction = data => {
    return async dispatch => {
        await localStorage.removeItem('userAdmin')
        history.push("/pages/login")
    }
}
