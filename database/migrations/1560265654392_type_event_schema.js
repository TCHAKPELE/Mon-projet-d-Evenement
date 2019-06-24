'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TypeEventSchema extends Schema {
  up () {
    this.create('type_events', (table) => {
      table.increments('id')
      table.string('libelle',30)
      table.timestamps()
    })
  }

  down () {
    this.drop('type_events')
  }
}

module.exports = TypeEventSchema
