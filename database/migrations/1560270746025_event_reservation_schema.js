'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventReservationSchema extends Schema {
  up() {
    this.create('event_reservations', (table) => {
      table.integer('evenement_id').unsigned().references('code_event').inTable('evenements')
      table.integer('reservation_id').unsigned().references('num_reservation').inTable('reservations')
      table.integer('Montant_reservation')
      table.timestamps()
    })
  }

  down() {
    this.drop('event_reservations')
  }
}

module.exports = EventReservationSchema
