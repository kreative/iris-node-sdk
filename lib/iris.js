"use strict";

const path = require('path');
const axios = require("axios");
const validateSystemLog = require("./validateSystemLog");

const IRIS_URL = process.env.IRIS_URL;
const levelTypes = ["debug", "info", "error", "warn", "critical"];

export class Iris {
    
    constructor(repository, aidn) {
        this.repository = repository;
        this.aidn = aidn;
    }

    log(level, status_code, message) {
        const repository = this.repository;
        const aidn = this.aidn;
        const filename = __filename;
        const createdat = Date.now();

        if (typeof(level) !== String) throw new Error("level_type_mismatch");
        if (typeof(statusCode) !== Number) throw new Error("statuscode_type_mismatch");
        if (typeof(message) !== String) throw new Error("message_type_mismatch");
        if (typeof(aidn) !== Number) throw new Error("aidn_type_mismatch");
        if (typeof(filename) !== String) throw new Error("filename_type_mismatch");
        if (typeof(repository) !== String) throw new Error("repository_type_mismatch");
        if (!levelTypes.includes(level)) throw new Error("invalid_level_type");

        axios.post(`${IRIS_URL}/log`, {
            repository,
            aidn,
            level,
            statusCode,
            message,
            filename,
            createdat
        })
        .catch(err => {throw new Error(err)})
        .then(response => {return response});
    };
};
