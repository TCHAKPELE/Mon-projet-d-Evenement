'use strict'
const database = use('Database')
class AddTypeController {
  async add_type({ view ,auth}) {

    const a = auth.user.username
    const x = await database.select('*')
      .from('type_events')

    return view.render('formulaire_type', {a,x})

  }
}

module.exports = AddTypeController
