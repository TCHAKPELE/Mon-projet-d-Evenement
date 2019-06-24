'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientReservationSchema extends Schema {
  up() {
    this.create('client_reservations', (table) => {
      table.integer('reservation_id').unsigned().references('num_reservation').inTable('reservations')
      table.integer('users_id').unsigned().references('id').inTable('users')
      table.date('Date_reservation')
      table.timestamps()
    })
  }

  down() {
    this.drop('client_reservations')
  }
}

module.exports = ClientReservationSchema
