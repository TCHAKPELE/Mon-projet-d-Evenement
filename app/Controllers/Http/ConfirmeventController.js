'use strict'
const database = use('Database')
const Event_reservation = use('App/Models/EventReservation')
const ClientReservation = use('App/Models/ClientReservation')

class ConfirmeventController {

  async cancel_reserv({ view, request, auth, response }) {

    const v = request.input('id')
    const g = request.input('code')
    
    await database
      .from('reservations')
      .where('num_reservation', v)
      .update('statut', false)

  

    const affiche = 'Reservation'

    return response.route('ConsultReservationController.affiche_reserv', {affiche})



  }
}

module.exports = ConfirmeventController
