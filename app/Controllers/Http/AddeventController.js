'use strict'
const database = use('Database')

class AddeventController {
  async Newevent({ request, response, view }) {

    const val = await database.select('*')
    .from('type_events')
    

    return view.render('add_event', {val})
  }
}
module.exports = AddeventController
