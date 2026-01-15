const http = require('http');

http.get('http://127.0.0.1:3000/', (res) => {
    console.log('Status Code: ', res.statusCode);

    res.on('data', (chunk) => {
        const data = JSON.parse(chunk.toString());
        
        data.users.forEach((user) => {
            console.log('User info', user.name);
        });
    })
});