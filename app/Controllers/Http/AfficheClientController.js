'use strict'
const database = use('Database')
class AfficheClientController {
  async affiche({ response, view }) {

    const x = await database.select('*')
      .from('type_events')

    const client = await database.select('*')
      .from('users')
    .where('roles','client')
    
      return view.render('liste_client', { client ,x})

    
    
  }
}
module.exports = AfficheClientController
