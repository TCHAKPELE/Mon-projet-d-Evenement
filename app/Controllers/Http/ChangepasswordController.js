'use strict'
const database = use('Database')
const Encryption = use('Encryption')
const Hash = use('Hash')
class ChangepasswordController {
  async change1({ view,response,request,auth}) {

    const a = request.input('password1')

    const b = await Hash.make(request.input('password2'))

    const verify = await Hash.verify(a, auth.user.password)
    
    if (verify) {
      const a =auth.user.username
      const c = await database
        .from('users')
        .where('id',auth.user.id)
        .update('password', b)

      const z="Mot de passe changé avec succès"
      
      return view.render('change_password',{a,z})

    }
    else {
      const a = auth.user.username
      const v = " Mot de passe incorrect"
      return view.render('change_password', {v,a})

    }
   
  }

  async change2({ view, response, request,auth}) {

    const a = request.input('email1')

    const b = request.input('email2')

    

    if (a==auth.user.email) {
      const a = auth.user.username
      const c = await database
        .from('users')
        .where('id', auth.user.id)
        .update('email', b)

      const z = "Email changé avec succès"

      return view.render('change_password', { a, z })

    }
    else {
      const a = auth.user.username
      const v = " Email incorrect"
      return view.render('change_password', { v, a })

    }


  }

  async change3({ view, response, request, auth }) {

    const a = request.input('password1')

    const b = await Hash.make(request.input('password2'))

    const verify = await Hash.verify(a, auth.user.password)

    if (verify) {
      const a = auth.user.username
      const c = await database
        .from('users')
        .where('id', auth.user.id)
        .update('password', b)

      const z = "Mot de passe changé avec succès"

      return view.render('change_passadmin', { a, z })

    }
    else {
      const a = auth.user.username
      const v = " Mot de passe incorrect"
      return view.render('change_passadmin', { v, a })

    }

  }
  async change4({ view, response, request, auth }) {

    const a = request.input('email1')

    const b = request.input('email2')



    if (a == auth.user.email) {
      const a = auth.user.username
      const c = await database
        .from('users')
        .where('id', auth.user.id)
        .update('email', b)

      const z = "Email changé avec succès"

      return view.render('change_passadmin', { a, z })

    }
    else {
      const a = auth.user.username
      const v = " Email incorrect"
      return view.render('change_passadmin', { v, a })

    }


  }

}

module.exports = ChangepasswordController
