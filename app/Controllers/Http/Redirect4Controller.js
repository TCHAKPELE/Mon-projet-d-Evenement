'use strict'
const database = use ('Database')
class Redirect4Controller {
  async redirect4({ view,request,auth}) {

    const x = await database.select('*')
      .from('type_events')

    const a = auth.user.username

    const reserv = await database.select('*')
      .from('reservations')
      .where('num_paiement', auth.user.tel)


    return view.render('gestion_reservation', {a,x,reserv})
    




  }

}

module.exports = Redirect4Controller
