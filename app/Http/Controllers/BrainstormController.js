'use strict'

const User = use('App/Model/User')
const Hash = use('Hash')

class BrainstormController {

    * index (request, response) { 
        yield response.sendView('welcome') 
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

    * create (request, response) {
     yield response.sendView('createProject')
     }

    }

module.exports = BrainstormController
