const crypto = require('crypto');

// Generate a 256-bit (32-byte) random string
const jwtSecret = crypto.randomBytes(32).toString('hex');

console.log(`Your generated JWT secret: ${jwtSecret}`);
