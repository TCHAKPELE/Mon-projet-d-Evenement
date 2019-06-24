'use strict'
const Admin = use('App/Models/User')

class EnregistrementAdminController {
  async create({ request, response, view }) {

    const admin = new Admin()

    admin.roles = 'admin'
    admin.username = request.input('Nom')
    admin.prenom = request.input('Prenom')
    admin.password = request.input('password')
    admin.tel = request.input('tel')
    admin.email = request.input('email')
    await admin.save()

    return view.render('formulaire_admin')
  }

}

module.exports = EnregistrementAdminController
