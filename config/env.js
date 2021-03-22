module.exports = {
  local: {
    apiUrl: 'https://dev-api.example.com'
  },
  dev: {
    baseUrl: 'https://dev-m.example.com',
    apiUrl: 'https://dev-api.example.com',
    cdnUrl: ''
  },
  prod: {
    baseUrl: 'https://m.example.com',
    apiUrl: 'https://m-api.example.com',
    cdnUrl: 'https://m-cdn.example.com'
  }
}
