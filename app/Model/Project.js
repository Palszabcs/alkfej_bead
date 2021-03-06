'use strict'

const Lucid = use('Lucid')

class Project extends Lucid {
  category () {
    return this.belongsTo('App/Model/Category')
  }

  user () {
    return this.belongsTo('App/Model/User')
  }
}

module.exports = Project
