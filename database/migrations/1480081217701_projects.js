'use strict'

const Schema = use('Schema')

class ProjectsTableSchema extends Schema {

  up () {
    this.create('projects', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.text('instructions').notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('categories_id').unsigned().references('id').inTable('categories')
      table.timestamps()
    })
  }

  down () {
      this.drop('projects')
  }

}

module.exports = ProjectsTableSchema
