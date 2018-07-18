import env from '../config/env';

let api= env === 'development' ?
    'http://api.huijinjiu.com' :
    env === 'production' ?
    'http://api.huijinjiu.com' :
    'https://debug.url.com';

export default api;