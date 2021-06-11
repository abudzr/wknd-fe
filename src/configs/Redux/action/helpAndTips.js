import axios from 'axios'


export const getHelpAndTips = () => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            axios.get('https://wknd-take-home-challenge-api.herokuapp.com/help-tips')
                .then((res) => {
                    dispatch({ type: 'GET_LIST_HELP_AND_TIPS', payload: res });
                })
                .catch((err) => {
                    reject(err)
                });
        });
    };
};