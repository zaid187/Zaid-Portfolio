const crypto = require('crypto');

const generateAdminToken = () => {
    return crypto.randomBytes(32).toString('hex');
};

const adminToken = generateAdminToken();
console.log('Your admin token:', adminToken);
