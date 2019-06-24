'use strict'
const database = use('Database')
class HomeclientController {
  async back({ request, response, view ,auth}) {
    const a = auth.user.username
    const x = await database.select('*')
      .from('type_events')

    return view.render('menu_client', {a,x})
  }
}
module.exports = HomeclientController
