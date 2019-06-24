'use strict'
const database=use ('Database')
class RedirectPassForgetController {

  async redirect3({ view }) {

    return view.render('password_forget')


  }

}

module.exports = RedirectPassForgetController
