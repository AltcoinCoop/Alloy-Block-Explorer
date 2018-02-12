module.exports = {
  "NAME": "Alloy  Explorer",
  "ADMIN": {
    "USERNAME": "markminer",
    "PASSWORD": "marktiff",
    "SECRET": "shardsxsm"
  },
  "EMAIL": "president@vaporb2b.com",
  "DB": {
    "HOST": 'localhost',
    "DBNAME": 'blockexp',
    "RETRIES": 50
  },
  "FRONTEND": {
    "HOSTNAME": 'sub3.methodjs.com',
    "HOST": '127.0.0.1',
    "PORT": 7500,
    'TOKEN_EXPIRATION': 60 * 20
  },
  "DAEMON": "128.199.85.61:24090",
  "BLOCKTARGETINTERVAL" : 60,
  "COINUNITS" : Math.pow(10, 12),
  "SYMBOL" : "XSM",
  "POOLS":[{
    "frontend": "coinmine.network",
    "api": "http://165.227.189.226:8117"
  },{
    "frontend": "expo.myntnote.net",
    "api": "http://128.199.85.61:8117"
  }],
  "VERBOSITY": 2
}
