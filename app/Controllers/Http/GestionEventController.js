'use strict'
const database = use('Database')

class GestionEventController {

  async valider({ request,view,response,auth }) {

     await database
      .table('evenements')
      .where('nom_event', request.input('nom'))
       .update('statut', true)

    const x = await database.select('*')
      .from('type_events')

    const a = auth.user.username

    const message2 = 'Evenement Validé'

    const event = await database.select('*')
      .from('evenements')
      .where('type_events_id', request.input('id'))

    return view.render('event_valid', { event, a, x, message2 })
  
  }

  
}

module.exports = GestionEventController
