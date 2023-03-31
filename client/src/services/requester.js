const requester = async (method, url, data) => {
    const options = {};

    if (method !== 'GET') {
        options.method = method;

        if (data) {
            options.headers = {
                'content-type': 'application/json',
            };
            options.body = JSON.stringify(data);
        }
    }

    // New try
    const serializedAuth = localStorage.getItem('auth');

    if (serializedAuth) {
        const auth = JSON.parse(serializedAuth);

        // token = auth.accessToken;
        if (auth.accessToken) {
            options.headers = {
                ...options.headers,
                'X-Authorization': auth.accessToken,
            };
        }
    }

    // New try

    // if (token) {
    //     options.headers = {
    //         ...options.headers,
    //         'X-Authorization': token,
    //     };
    // }
    
    const response = await fetch(url, options);

    if (response.status === 204) {
        return {};
    }

    // This is work after refresh


    if (response.status === 403) {
        window.localStorage.clear()
    }
    //


    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;

};

export const requestFactory = () => {
    return {
        get: requester.bind(null, 'GET'),
        post: requester.bind(null, 'POST'),
        put: requester.bind(null, 'PUT'),
        delete: requester.bind(null, 'DELETE'),
    }
};