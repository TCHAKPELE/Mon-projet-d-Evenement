'use strict'
const database = use('Database')
class AddAdminController {

  

  async add_admin({ request, response, view }) {

    const x = await database.select('*')
      .from('type_events')
    return view.render('formulaire_admin', {x})
  }

}

module.exports = AddAdminController
