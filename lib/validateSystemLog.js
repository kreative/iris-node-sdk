const levelTypes = [
    "debug",
    "info",
    "error",
    "warn",
    "critical"
];

const validateSystemLog = (
    level,
    statusCode,
    message,
    aidn,
    filename,
    repository
) => {
    return new Promise((resolve, reject) => {
        if (typeof(level) !== String) reject("level_type_mismatch")
        if (typeof(statusCode) !== Number) reject("status_code_type_mismatch");
        if (typeof(message) !== String) reject("message_type_mismatch");
        if (typeof(aidn) !== Number) reject("aidn_type_mismatch");
        if (typeof(filename) !== String) reject("filename_type_mismatch");
        if (typeof(repository) !== String) reject("repository_type_mismatch");
        if (!levelTypes.includes(level)) reject("invalid_level_type");
        
        resolve();
    });
};

module.exports = validateSystemLog;