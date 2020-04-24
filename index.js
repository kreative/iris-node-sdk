const path = require('path');
const axios = require("axios");

const IRIS_URL = "https://iris.kreative.im";

class Iris {
    
    constructor(aidn, serviceKey) {
        this.aidn = parseInt(aidn);
        this.serviceKey = serviceKey;
    }

    debug(message, meta, tags) {
        axios.post(`${IRIS_URL}/log`, {
            message,
            tags,
            meta,
            level: 'debug',
            aidn: this.aidn
        }, {
            headers: {
                'Content-Type': 'application/json',
                'portal_calling_aidn': this.aidn,
                'portal_service_key': this.serviceKey
            }
        })
        .catch(error => {return error})
        .then(response => {return response});
    };

    info(message, meta, tags) {
        console.log(this.aidn);
        axios.post(`${IRIS_URL}/log`, {
            message,
            tags,
            meta,
            level: 'info',
            aidn: this.aidn
        }, {
            headers: {
                'Content-Type': 'application/json',
                'portal_calling_aidn': this.aidn,
                'portal_service_key': this.serviceKey
            }
        })
        .catch(error => {return error})
        .then(response => {return response});
    };

    error(message, meta, tags) {
        axios.post(`${IRIS_URL}/log`, {
            message,
            tags,
            meta,
            level: 'error',
            aidn: this.aidn
        }, {
            headers: {
                'Content-Type': 'application/json',
                'portal_calling_aidn': this.aidn,
                'portal_service_key': this.serviceKey
            }
        })
        .catch(error => {return error})
        .then(response => {return response});
    };

    warn(message, meta, tags) {
        axios.post(`${IRIS_URL}/log`, {
            message,
            tags,
            meta,
            level: 'warn',
            aidn: this.aidn
        }, {
            headers: {
                'Content-Type': 'application/json',
                'portal_calling_aidn': this.aidn,
                'portal_service_key': this.serviceKey
            }
        })
        .catch(error => {return error})
        .then(response => {return response});
    };

    critical(message, meta, tags) {
        axios.post(`${IRIS_URL}/log`, {
            message,
            tags,
            meta,
            level: 'critical',
            aidn: this.aidn
        }, {
            headers: {
                'Content-Type': 'application/json',
                'portal_calling_aidn': this.aidn,
                'portal_service_key': this.serviceKey
            }
        })
        .catch(error => {return error})
        .then(response => {return response});
    };
};

module.exports = Iris;