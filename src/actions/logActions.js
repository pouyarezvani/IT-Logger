import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG,
    UPDATE_LOG,
    SET_CURRENT,
    CLEAR_CURRENT
} from './types';



// Get Logs from Server
export const getLogs = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        });
    };
};

// Add New Log
export const addLog = (log) => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_LOG,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        });
    };
};

// Delete Log from Server
export const deleteLog = (id) => async dispatch => {
    try {
        setLoading();

        await fetch(`/logs/${id}`, {
            method: 'DELETE'
        });
        dispatch({
            type: DELETE_LOG,
            payload: id
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        });
    };
};

// Update Log from Server
// export const updateLog = (log) => async dispatch => {
//     try {
//         setLoading();

//         await fetch(`/logs/${id}`, {
//             method: 'PUT',
//             body: JSON.stringify(log),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//         dispatch({
//             type: UPDATE_LOG,
//             payload: data
//         });
//     } catch (error) {
//         dispatch({
//             type: LOGS_ERROR,
//             payload: error.response.data
//         });
//     };
// };

// Set current log
export const setCurrent = log => {
    return {
        type: SET_CURRENT,
        payload: log
    };
}

// Clear current log
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT,
    };
}

// Set Loading to True
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};