'use strict'

const User = use('App/Model/User')
const Hash = use('Hash')
const Database = use('Database')
const Category = use('App/Model/Category')
const Project = use('App/Model/Project')
const Validator = use('Validator')


class BrainstormController {

    * index (request, response) { 

        const category = yield Category.all()
        const project = yield Project.all()

        yield response.sendView('welcome', {
        category: category.toJSON(),
        project: project.toJSON()
        })  
     }

    * by_me(request, response) {

        const id = request.param('id')
        const project = yield Project.find(id)
        const category = yield Category.all()

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

        const categories = yield Category.all()
        yield response.sendView('createProject', {
        categories: categories.toJSON()
        });

        }

    * doCreate(request, response) {
        const projectData = request.except('_csrf');

        const rules = {
            name: 'required',
            categories_id: 'required',
            instructions: 'required',
            user_id: 'required'
        };

        const validation = yield Validator.validateAll(projectData, rules)

        if (validation.fails()) {
        yield request
            .withAll()
            .andWith({errors: validation.messages()})
            .flash()
        response.redirect('back')
        return
        }

        const project = yield Project.create(projectData)
        response.redirect('/')

    }

    * edit(request, response) {

        const id = request.param('id')
        const project = yield Project.find(id)
        const category = yield Category.find(project.categories_id)
        const categories = yield Category.all()

        yield response.sendView('editProject', {
        project: project.toJSON(),
        categories: categories.toJSON()
        })
    }

    * doEdit(request, response) {

        const projectData = request.except('_csrf')

        const rules = {
            name: 'required',
            categories_id: 'required',
            instructions: 'required',
            user_id: 'required'
        };

        const validation = yield Validator.validateAll(projectData, rules)

        if (validation.fails()) {
        yield request
            .withAll()
            .andWith({errors: validation.messages()})
            .flash()
        response.redirect('back')
        return
        }

        const id = request.param('id')
        const project = yield Project.find(id)

        Object.assign(project, projectData)

        yield project.save()
            
        response.redirect('/')
       }

        * delete(request, response) {

        const id = request.param('id')
        const project = yield Project.find(id)
        const category = yield Category.find(project.categories_id)

        yield response.sendView('deleteProject', {
        project: project.toJSON(),
        category: category.toJSON()
        })
        }

       * doDelete(request, response) {
       
            const id = request.param('id')
            const project = yield Project.find(id)

            if (request.currentUser.id !== project.user_id) {
            response.unauthorized('Nem a te ötleted.')
            return
            }

            yield project.delete()
                
            response.redirect('/')
       }

}

module.exports = BrainstormController
