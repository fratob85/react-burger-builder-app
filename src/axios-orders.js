import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-8288c.firebaseio.com',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'AccessControlAllowOrigin': '*'
    }
});


instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;