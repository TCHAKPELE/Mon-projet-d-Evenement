'use strict'
const Client = use('App/Models/User')
const database = use('Database')

class EnregistrementClientController {
  async create({ request, response, view }) {

    const client = new Client()

    client.roles = 'client'
    client.username = request.input('Nom')
    client.prenom = request.input('Prenom')
    client.password = request.input('password')
    client.tel = request.input('tel')
    client.email = request.input('email')
    client.Question_secrète = request.input('question')

    const val = await database.select('id')
      .from('users')
      .where('email', client.email)
    console.log(val[0])
    if (val[0] == null) {
      await client.save()
      
      return view.render('interface_connection')

    }
    else {

      const value = "Error : Email déjà utilisé "
      return view.render('formulaire_inscription', {value})

    }
   
  }

}

module.exports = EnregistrementClientController
