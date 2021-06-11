import axios from 'axios'


export const getTestimoni = () => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            axios.get('https://wknd-take-home-challenge-api.herokuapp.com/testimonial')
                .then((res) => {
                    dispatch({ type: 'GET_LIST_TESTIMONI', payload: res });
                })
                .catch((err) => {
                    reject(err)
                });
        });
    };
};