'use strict'
const database = use ('Database')
class PayerController {
  async payer({ view, request,response ,auth}) {

    const tel = request.input('tel')

    await database
      .table('reservations')
      .update('num_paiement', tel)
      .where('num_reservation', request_input('id'))

    await database
      .table('reservations')
      .update('tel_promotteur', request.input('c'))
      .where('num_reservation', request.input('id'))

    await database
      .table('reservations')
      .update('tel_promotteur', auth.user.tel)
      .where('num_reservation', request.input('id'))
   
    return response.route('HomeclientController.back')

  }

}

module.exports = PayerController
