export const config = {
    apiBaseUrl: {
        development: 'http://localhost:3000',
        production: 'https://api.production.com'
    },
    debugMode: process.env.NODE_ENV === 'development'
}; 