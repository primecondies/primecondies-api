const env = process.env.NODE_ENV;

const production = {

};

const development = {
  api: {
    port: 3000
  },
  mongo: {
    init: function() {
      require('mongoose').connect(`mongodb://${this.host}:${this.port}/pc-dev`, { useNewUrlParser: true });
    },
    host: 'mongo',
    port: 27017,
  }
};

const testing = {
  api: {
    port: 8080
  },
  mongo: {
    init: function() {
      require('mongoose').connect(`mongodb://${this.host}:${this.port}/pc-test`, { useNewUrlParser: true });
    },
    host: 'localhost',
    port: 27017,
  }
};

const config = {
  production,
  development,
  testing
}

module.exports = config[env];