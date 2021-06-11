import axios from 'axios'


export const getHelpAndTips = () => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            const Url = process.env.REACT_APP_API_HELPTIPS
            axios.get(Url)
                .then((res) => {
                    resolve(res)
                    dispatch({ type: 'GET_LIST_HELP_AND_TIPS', payload: res });
                })
                .catch((err) => {
                    reject(err)
                });
        });
    };
};