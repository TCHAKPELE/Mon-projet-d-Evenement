'use strict'
const database = use('Database')

class ConsultEventController {

  async affiche({ response, view, request ,auth}) {

    const x = await database.select('*')
      .from('type_events')

      const event = await database.select('*')
        .from('evenements')
        .where('type_events_id', request.input('1'))

    const a = auth.user.username

      if (event[0] == null) {
        const d = "0 Resultat trouvé"
        return view.render('event_valid', { event,d, x ,a})
      }
      else

      return view.render('event_valid', { event,a,x})
   

  }
}

module.exports = ConsultEventController
