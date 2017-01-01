'use strict'

const Route = use('Route')

Route.get('/', 'BrainstormController.index')
Route.get('/by_me/:id', 'BrainstormController.by_me')
Route.get('/login', 'BrainstormController.login')
Route.get('/logout', 'BrainstormController.doLogout')
Route.get('/register', 'BrainstormController.register')
Route.post('/register', 'BrainstormController.doRegister')
Route.post('/login', 'BrainstormController.doLogin')
Route.get('/project/:id', 'BrainstormController.show').middleware('auth')
Route.get('/projects/create', 'BrainstormController.create').middleware('auth')
Route.post('/projects/create', 'BrainstormController.doCreate').middleware('auth')
Route.get('/projects/edit/:id', 'BrainstormController.edit').middleware('auth')
Route.post('/projects/edit/:id', 'BrainstormController.doEdit').middleware('auth')
Route.get('/projects/delete/:id', 'BrainstormController.doDelete').middleware('auth')
Route.get('/projects/filter', 'BrainstormController.filter').middleware('auth')
Route.post('/projects/filter', 'BrainstormController.doFilter').middleware('auth')

Route.group('ajax', function () {
  Route.post('/login', 'UserController.ajaxLogin')
  Route.post('/register', 'UserController.ajaxRegister')
  Route.post('/create', 'VasarlasController.ajaxCreate')
}).prefix('/ajax')