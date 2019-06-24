'use strict'
const database = use('Database')
const Hash = use('Hash')

class PasswordForgetController {
  async password_forget({ view, request, auth }) {

    const val1 = request.input('question')
    const val2 = await Hash.make(request.input('password'))
    const val3 = request.input('email')

    const req = await database.select('id')
      .from('users')
      .where('Question_secrète', val1)

    if (req[0] == null) {
      const v = 'Reponse à la question secrète Incorrect'

      return view.render('password_forget', { v })


    }
    else {

      const req2 = await database.select('id')
        .from('users')
        .where('email', val3)

      if (req2[0] == null) {

        const v = 'Email Incorrect'

        return view.render('password_forget', { v })




      }

      else {


        await database
          .table('users')
          .update('password', val2)
          .where('email', val3)

        return view.render('interface_connection')


      }
     

    }

  }

}

module.exports = PasswordForgetController
