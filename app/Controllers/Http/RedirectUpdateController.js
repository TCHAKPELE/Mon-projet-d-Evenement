'use strict'
const database = use('Database')
class RedirectUpdateController {

  async redirect2({ view ,auth}) {

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
      return view.render('update_event', { a, x, value })
    }
   

  }
}

module.exports = RedirectUpdateController
