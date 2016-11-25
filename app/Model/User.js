'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  apiTokens () {
    return this.hasMany('App/Model/Token')
  }

  projects () {
    return this.hasMany('App/Model/Projects')
  }

}

module.exports = User
