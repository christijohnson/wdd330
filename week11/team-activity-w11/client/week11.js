/* Server Address
const baseURL = 'http://127.0.0.1:3000/';
// helper function to make an http request with fetch.
// returns a json object
async function makeRequest(url, method = 'GET', body = null, token = null) {
    // we will need to set some custom options for our fetch call
    let options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    };
        // if we are sending any data with the request add it here
    if (method == 'POST' || method == 'PUT') {
        options.body = JSON.stringify(body);
    }
        // if a token was passed in we should send it on.
    if (token) {
        options.headers.Authorization = `Bearer ${token}`;
    }
    
    const response = await fetch(baseURL + url, options);
    // in this case we are processing the response as JSON before we check the status. The API we are using will send back more meaningful error messages than the default messages in the response, but we have to convert it before we can get to them.
    const data = await response.json();

    if (!response.ok) {
    // server will send a 500 server error if the token expires...or a 401 if we are not authorized, ie bad username/password combination, and a 404 if the URL we requested does not exist. All of these would cause response.ok to be false

        console.log(response);
        throw new Error(`${data.status}: ${data.message}`);
    } else return data;

  // not catching the error here...so we will need to catch it later on and handle it.
} */

import Auth from './auth.js';
import { Errors, makeRequest } from './authHelpers.js';

const myErrors = new Errors('errors');
const myAuth = new Auth(myErrors);

const loginForm = document.getElementById('login');
loginForm.querySelector('button').addEventListener('click', () => {
    myAuth.login(getPosts);
});

async function getPosts() {
    try {
        const data = await makeRequest('posts', 'GET', null, myAuth.token);
        document.getElementById('content').classList.remove('hidden');
        console.log(data);
        let ul = document.getElementById('list');
        ul.innerHTML = '';

        for (let i = 0; i < data.length; i++) {
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(data[i].title));
            ul.appendChild(li);
        }
        myErrors.clearError();
    } catch (error) {
        myErrors.handleError(error);
    }
}

document.getElementById('createSubmit').addEventListener('click', () => {
    createPost();
});

async function createPost() {
    const form = document.forms.postForm;
    console.dir(form);
    if (form.title.validity.valid && form.content.validity.valid) {
        myErrors.clearError();
        const data = {
            title: form.title.value,
            content: form.content.value
        };
        try {
            const res = await makeRequest('posts', 'POST', data, myAuth.token);
            console.log('Post create:', data);
            form.title.value = '';
            form.content.value = '';
            getPosts();
        } catch (error) {
            myErrors.handleError(error);
        }
    } else {
        myErrors.displayError({ message: 'Title and Content are required' });
    }
 }