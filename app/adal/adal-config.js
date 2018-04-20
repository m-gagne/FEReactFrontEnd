var adalConfig = {
  tenant: 'common',
  clientId: 'e7a8dde1-1109-4fe1-b8a0-d0f80bba6e84',
  extraQueryParameter: 'nux=1',
  disableRenewal: true,
  endpoints: {
    'https://graph.microsoft.com': 'https://graph.microsoft.com'
  }
  // cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost. 
};

module.exports = adalConfig;
