'use strict'
const database = use('Database')
class ConsultReservationController {
  async affiche_reserv({ request, response, view,auth }) {
    const a = auth.user.username

    const x = await database.select('*')
      .from('type_events')

    const req1 = await database
      .from('client_reservations')
      .where('users_id', auth.user.id)
    .getMin('reservation_id')

    const b = await database
      .from('client_reservations')
      .where('users_id', auth.user.id)
      .getMax('reservation_id')

    
    

    const req = await database.select('*')
      .from('reservations')
      .where('num_reservation', '>=', req1)
      .andWhere('num_reservation', '<=', b)
    .andWhere('statut',true)

    if (req[0] != null) {

      const req2 = await database.select('evenement_id')
        .from('event_reservations')
        .where('reservation_id', b)

      const c = req2[0].evenement_id

      const req3 = await database.select('nom_event')
        .from('evenements')
        .where('code_event', c)

      const nom = req3[0].nom_event

      



      return view.render('Consulter_reservation', { req, a, nom, c, x })
    }
    else {

      const suv = "alert alert-primary"
      const suv1 = "alert"
      const suv2 = "margin - left: 500px; margin - right: 500px"
      const d = "Aucune Réservation en cours"

      return view.render('Consulter_reservation', { suv, suv1, suv2, d, a })


    }
    
  }
}

module.exports = ConsultReservationController
