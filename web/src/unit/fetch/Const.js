import fetch from 'isomorphic-fetch';

export function getAccessToken() {
    return window.sessionStorage.getItem('cweb-access');
}

export function executeFetch(...args) {
    return new Promise(async (resolve, reject) => {
        let response = {}, result = '';
        try {
            response = await fetch(...args);
            result = await response.json();
        } catch(e) {

        }
        response.status === 200 ? resolve(result) : reject(result);
    });
}

export function executeFetchText(...args) {
    return new Promise(async (resolve, reject) => {
        let response = {}, result = '';
        try {
            response = await fetch(...args);
            result = await response.text();
        } catch(e) {

        }
        response.status === 200 ? resolve(result) : reject(result);
    });
}

export function executeFetchBlob(...args) {
    return new Promise(async (resolve, reject) => {
        let response = {}, result = '';
        try {
            response = await fetch(...args);
            result = await response.blob();
        } catch(e) {

        }
        response.status === 200 ? resolve(result) : reject(result);
    });
}

export const hostname = window.location.origin;

export const address = {
    login: hostname + '/login',
    news: hostname + '/api/v1/news',
    account: hostname + '/api/v1/account',
    question: hostname + '/api/v1/question',
    password: hostname + '/api/v1/account/password',
    data: hostname + '/api/v1/data',
    service: hostname + '/api/v1/service',
    download: hostname + '/api/v1/common',
    message: hostname + '/api/v1/message',
    reply: hostname + '/api/v1/reply',
    spider:hostname+'/api/v1/spider',
    common:hostname+'/api/v1'
}