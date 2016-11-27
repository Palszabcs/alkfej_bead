'use strict'

const Route = use('Route')

Route.get('/', 'BrainstormController.index')
Route.get('/by_me/:id', 'BrainstormController.by_me')
Route.get('/login', 'BrainstormController.login')
Route.get('/logout', 'BrainstormController.doLogout')
Route.get('/register', 'BrainstormController.register')
Route.post('/register', 'BrainstormController.doRegister')
Route.post('/login', 'BrainstormController.doLogin')
Route.get('/project/:id', 'BrainstormController.show')
Route.get('/projects/create', 'BrainstormController.create')
Route.post('/projects/create', 'BrainstormController.doCreate')
Route.get('/projects/edit/:id', 'BrainstormController.edit')
Route.post('/projects/edit/:id', 'BrainstormController.doEdit')
Route.get('/projects/delete/:id', 'BrainstormController.delete')
Route.post('/projects/delete/:id', 'BrainstormController.doDelete')