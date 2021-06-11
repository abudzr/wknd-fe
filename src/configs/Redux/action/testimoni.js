import axios from 'axios'


export const getTestimoni = () => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            const Url = process.env.REACT_APP_API_TESTIMONI
            axios.get(Url)
                .then((res) => {
                    dispatch({ type: 'GET_LIST_TESTIMONI', payload: res });
                })
                .catch((err) => {
                    reject(err)
                });
        });
    };
};