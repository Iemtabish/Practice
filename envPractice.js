require('dotenv').config();

console.log('Port:', process.env.PORT);
console.log('Database URL:', process.env.DATABASE_URL);
console.log('Secret Key:', process.env.SECRET_KEY);

const config = {
  port: process.env.PORT || 3000,
  dbUrl: process.env.DATABASE_URL,
  environment: process.env.NODE_ENV || 'development'
};

console.log('Config:', config);
