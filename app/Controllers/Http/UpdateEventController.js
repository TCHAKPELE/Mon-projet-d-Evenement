'use strict'
const database = use('Database')

class UpdateEventController {

  async update({ view, request ,auth}) {

    const name = request.input('nom')
    const type = request.input('type')
    const adresse = request.input('adresse')
    const id = request.input('code')
    const date = request.input('date')
const prix = request.input('price')


    await database
       .table('evenements')
       .where('code_event', id)
       .update('nom_event', name)

    await database
      .table('evenements')
      .where('code_event', id)
      .update('type_events_id', type)

    await database
      .table('evenements')
      .where('code_event', id)
      .update('date', date)

    await database
      .table('evenements')
      .where('code_event', id)
      .update('adresse', adresse)

    await database
      .table('evenements')
      .where('code_event', id)
      .update('Prix_ticket', prix)

    const Notify2 = 'Modification Réussie'

    const x = await database.select('*')
      .from('type_events')

    const a = auth.user.username

    const value = await database.select('*')
      .from('evenements')
      .where('users_id', auth.user.id)

    if (value[0] == null) {
      const Notify = 'Vous n"avez pas d"Evenements'
      return view.render('update_event', { a, x, value, Notify })

    }
    else {
      return view.render('update_event', { a, x, value ,Notify2})
    }

   


  }
}

module.exports = UpdateEventController
