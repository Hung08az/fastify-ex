'use strict'
const crud = require('./crud');
module.exports = async function (fastify, opts) {
  fastify.get('/', crud.getAllUser);
  fastify.get('/:id', crud.getDataUserById);
  fastify.post('/new', crud.addNewUser);
  fastify.put('/update/:id', crud.updateUserById);
  fastify.delete('/delete/:id', crud.deleteUser);
  fastify.post('/login', crud.login)
}