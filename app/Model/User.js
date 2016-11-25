'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  apiTokens () {
    return this.hasMany('App/Model/Token')
  }

  project () {
    return this.hasMany('App/Model/Project')
  }

}

module.exports = User
