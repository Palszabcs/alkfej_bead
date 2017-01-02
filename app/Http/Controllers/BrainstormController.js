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
        const project = yield Project.all()
        const filter = yield Project.query().where('user_id', id).fetch()
        const category = yield Category.all()

        yield response.sendView('welcome', {
        category: category.toJSON(),
        project: filter.toJSON()
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

       * filter(request, response) {
          
            const categories = yield Category.all()
            const users = yield User.all()
            const filters = null

            yield response.sendView('filterProject',{
            categories: categories.toJSON(),
            users: users.toJSON(),
            filters
            });
        }

        * doFilter (request, response) {
                const filters = {
                name: request.input('name') || '',
                category: request.input('categories_id'),
                user: request.input('users_id')
                }

                const projects = yield Project.query()
                .where(function () {
                    if (filters.category > 0) this.where('categories_id', filters.category)
                    if (filters.user > 0) this.where('user_id', filters.user)
                    if (filters.name.length > 0) this.where('name', 'LIKE', `%${filters.name}%`)
                })
                .fetch()

                const categories = yield Category.all()
                const users = yield User.all()

                yield response.sendView('filterProject', {
                projects: projects.toJSON(),
                categories: categories.toJSON(),
                users: users.toJSON()
                })
            }

            * ajaxLogin(request, response) {
                const email = request.input('email')
                const password = request.input('password')

                try {
                const login = yield request.auth.attempt(email, password) 
                if (login) {
                    response.send({ success: true })
                    return
                }
                } 
                catch (err) {
                response.send({ success: false })
                }
            }
            
            * ajaxRegister(request, response) {
                 const user = new User()
                    user.username = request.input('name')
                    user.email = request.input('email')
                    user.password = yield Hash.make(request.input('password'))

                    try{
                    yield user.save()
                    } catch(e){
                         response.send({ success: false })
                    }

                    response.send({ success: true })
            }

}

module.exports = BrainstormController
