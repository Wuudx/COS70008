const ROOT_URL = 'http://127.0.0.1:8000/users';

export async function login(dispatch, loginPayload) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginPayload),
    };

    try {
        dispatch({ type: 'REQUEST_LOGIN' });
        let response = await fetch(ROOT_URL + '/login', requestOptions);
        let data = await response.json();

        // console.log(data);

        if (data.token) {
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('auth_token', 'Token ' + data.token);
            dispatch({ type: 'LOGIN_SUCCESS', payload: data });
            return data;
        }

        dispatch({ type: 'LOGIN_FAILURE', payload: data });
        return;
    } catch (error) {
        dispatch({ type: 'LOGIN_FAILURE', payload: error });
    }
}

export async function authenticate(dispatch) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('auth_token'),
        },
    };

    try {
        let response = await fetch(ROOT_URL + '/user', requestOptions);
        let data = await response.json();

        // console.log(data);

        if (data) {
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('auth_token', 'Token ' + data.token);
            dispatch({ type: 'AUTHENTICATE', payload: data });
            return data;
        }

        dispatch({ type: 'LOGOUT' });
        return;
    } catch (error) {
        dispatch({ type: 'LOGOUT' });
    }
}

export async function logout(dispatch) {
    const requestOptions = {
        method: 'POST',
        headers: {
            Authorization: localStorage.getItem('auth_token'),
        },
    };

    await fetch(ROOT_URL + '/logout', requestOptions);
    localStorage.removeItem('user');
    localStorage.removeItem('auth_token');
    dispatch({ type: 'LOGOUT' });
}