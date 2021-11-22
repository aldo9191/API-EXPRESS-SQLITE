
const { Sequilize } = require('sequilize');

const sequilize = new Sequilize('test-db', 'user', 'pass', {
  dialect: 'sqlite',
  host: '',
})