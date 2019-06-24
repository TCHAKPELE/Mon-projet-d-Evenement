'use strict'
const database = use('Database')

class SearchEventController {

  async search({ response, view, request }) {

    const z = await database.select('*')
      .from('type_events')

    const event = await database.select('*')
      .from('evenements')
      .where('nom_event', request.input('recherche'))
      .andWhere('statut', true)

    const verify = await database.select('code_event')
      .from('evenements')
      .where('nom_event', request.input('recherche'))
      .andWhere('statut', true)
    if (verify[0] == null) {
      const x="0 Resultat trouvé"
      return view.render('affichageevent', { event, x ,z})
    }
    else
    return view.render('affichageevent', {event,z})
  }

  async search2({ response, view, request }) {

    const val = await database.select('*')
      .from('type_events')

    const event = await database.select('*')
      .from('evenements')
      .where('nom_event', request.input('recherche'))
      .andWhere('statut', true)


    const verify = await database.select('code_event')
      .from('evenements')
      .where('nom_event', request.input('recherche'))
      .andWhere('statut', true)

    if (verify[0] == null) {
      const x = "0 Resultat trouvé"
      return view.render('event_valid', { event, x ,z})
    }

    return view.render('event_valid', { event,z})
  }
}

module.exports = SearchEventController
