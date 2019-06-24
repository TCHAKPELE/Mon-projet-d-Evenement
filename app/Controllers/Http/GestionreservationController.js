'use strict'
const Reservation = use('App/Models/Reservation')
const database = use('Database')
const Event_reservation = use('App/Models/EventReservation')
const ClientReservation = use('App/Models/ClientReservation')


class GestionreservationController {

  async save({ request, response, view, auth }) {

    const reservation = new Reservation()

    reservation.statut = true
    const value = request.input('nbr_place')
    const prix = request.input('price')

    const montant = value * prix

    reservation.Nbr_place = value

    reservation.montant=montant
    
      
    const e = request.input('event')

    const z = request.input('code')

    const ticketMax = await database.select('nbr_ticket')
      .from('evenements')
      .where('code_event', z)

   

    const verify = ticketMax[0].nbr_ticket - value
    

    if (verify>= 0) {

      await reservation.save()


      const date = request.input('date')

      const id = await database
        .from('reservations')
        .getMax('num_reservation')





      const event_reservation = new Event_reservation()
      event_reservation.reservation_id = id
      event_reservation.evenement_id = z
      event_reservation.Montant_reservation=montant

      await event_reservation.save()



      const clientreservation = new ClientReservation()

      clientreservation.reservation_id = id
      clientreservation.users_id = auth.user.id
      clientreservation.date_reservation = reservation.created_at
      await clientreservation.save()
      

      const c = request.input('nom')
      const p = request.input('adresse')

      const val = await database.select('*')
        .from('type_events')

      const num = await database.select('*')
        .from('users')
        .where('roles', 'admin')


      return view.render('affichage_reservation', { id ,c,date,montant,p,val,num})

    }

    else

      if (verify< 0){

        const z = await database.select('*')
          .from('type_events')


      const event = await database.select('*')
        .from('evenements')
        .where('statut', true)
        .andWhere('type_events_id', e)

      const a = auth.user.username

        const error = 'Nombre de place disponible Insuffisant pour cet evenement'
        const suv = "alert alert-danger"
        const suv1 = "alert"
        const suv2 = "margin-left: 320px; margin-right:330px "
      return view.render('affichageevent', { event ,suv,suv1,suv2,a,error,z})
     
     


    }
      


  }
}

module.exports = GestionreservationController
