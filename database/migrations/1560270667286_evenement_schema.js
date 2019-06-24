'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EvenementSchema extends Schema {
  up() {
    this.create('evenements', (table) => {
      table.increments('code_event')
      table.integer('users_id').unsigned().references('id').inTable('users')
      table.string('nom_event', 20)
      table.datetime('date')
      table.integer('type_events_id').unsigned().references('id').inTable('type_events')
      table.string('adresse', 30)
      table.integer('nbr_ticket')
      table.integer('Prix_ticket')
      table.boolean('statut')
      table.timestamps()

    })
  }

  down() {
    this.drop('evenements')
  }
}

module.exports = EvenementSchema
