'use strict'
const database = use('Database')

class CancelEventController {
  async cancel({ request, view,response ,auth}) {

    await database
      .table('evenements')
      .where('nom_event', request.input('nom'))
      .update('statut', false)

    const x = await database.select('*')
      .from('type_events')

    const a=auth.user.username

    const message = 'Evenement Retiré'

    const event = await database.select('*')
      .from('evenements')
      .where('type_events_id', request.input('code'))

      return view.render('event_valid', {event, a, x ,message})
    }
    }
    


module.exports = CancelEventController
