'use strict'
const database = use('Database')
class RedirectPasswordController {
  async password({ request, response, view,auth }) {
    const a = auth.user.username
    const x = await database.select('*')
      .from('type_events')

    return view.render('change_password', {a,x})
  }

  async password2({ request, response, view, auth }) {
    const a = auth.user.username
    const x = await database.select('*')
      .from('type_events')

    return view.render('change_passadmin', { a,x })
  }
}

module.exports = RedirectPasswordController
