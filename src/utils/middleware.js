export const preRequest = (request, response, next) => {
    console.group(request.method, request.url);
    console.time('execution');
    if (['HEAD', 'GET', 'PATCH', 'DELETE'].includes(request.method)) console.info('params:', request.params);
    if (['POST', 'PATCH'].includes(request.method)) console.info('body:', request.body);
    next();
};

export const postRequest = (request, response) => {
    console.info('status:', response.statusCode, response.statusMessage);
    console.timeEnd('execution');
    console.groupEnd();
};
