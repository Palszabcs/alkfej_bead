'use strict'

const User = use('App/Model/User')
const Hash = use('Hash')
const Database = use('Database')
const Category = use('App/Model/Category')
const Project = use('App/Model/Project')


class BrainstormController {

    * index (request, response) { 

        const category= yield Category.all()
        const project= yield Project.all()

        yield response.sendView('welcome', {
        category: category.toJSON(),
        project: project.toJSON()
        })  
     }

    * login (request, response) { 
        yield response.sendView('login') 
    }

    * doLogin(request, response) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      yield request.auth.attempt(email, password)
    }
    catch (e) {
      yield response.sendView('login', { errorMessage: 'Hibás adatokat adott meg!' })
    }

    return response.redirect('/')
    }

    * doLogout(request, response) {
     yield request.auth.logout()

     return response.redirect('/')
     }

     * register(request, response) {
        yield response.sendView('register') 
     }

    * doRegister(request, response) {
    const user = new User()
    user.username = request.input('name')
    user.email = request.input('email')
    user.password = yield Hash.make(request.input('password'))

    try{
    yield user.save()
    } catch(e){
        yield response.sendView('register', { errorMessage: 'Esetleg már létező név vagy email?' })
    }

    yield response.sendView('login', { successMessage: 'Sikeres regisztráció, jelentkezzen be!' })
    }

    * show(request, response) {

    const id = request.param('id')
    const project = yield Project.find(id)
    const category = yield Category.find(project.categories_id)

    yield response.sendView('showProject', {
    project: project.toJSON(),
    category: category.toJSON()
    })
    }

    * create (request, response) {
     yield response.sendView('createProject')
     }

    }

module.exports = BrainstormController
