'use strict'

const Lucid = use('Lucid')

class Category extends Lucid {

    projects () {
    return this.hasMany('App/Model/Project')
    }

}

module.exports = Category
