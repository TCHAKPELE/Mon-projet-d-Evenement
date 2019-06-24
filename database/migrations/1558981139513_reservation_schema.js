'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReservationSchema extends Schema {
  up() {
    this.create('reservations', (table) => {
      table.increments('num_reservation')
      table.integer('num_paiement')
      table.integer('	tel_client')
      table.integer('tel_promotteur')
      table.integer('montant',4)
      table.integer('Nbr_place', 25)
      table.enum('soldé', ['Oui', 'Non'])
      table.boolean('statut')
      table.timestamps()
    })
  }

  down() {
    this.drop('reservations')
  }
}

module.exports = ReservationSchema
