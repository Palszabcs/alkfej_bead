'use strict'

const Route = use('Route')

Route.get('/', 'BrainstormController.index')
Route.get('/login', 'BrainstormController.login')
Route.get('/logout', 'BrainstormController.doLogout')
Route.get('/register', 'BrainstormController.register')
Route.post('/register', 'BrainstormController.doRegister')
Route.post('/login', 'BrainstormController.doLogin')
Route.post('/login', 'BrainstormController.doLogout')
Route.get('/ideas/create', 'BrainstormController.create')
Route.post('/ideas/create', 'BrainstormController.doCreate')
Route.get('/ideas/:id', 'BrainstormController.show')
Route.get('/ideas/edit', 'BrainstormController.edit')
Route.post('/ideas/edit', 'BrainstormController.doEdit')