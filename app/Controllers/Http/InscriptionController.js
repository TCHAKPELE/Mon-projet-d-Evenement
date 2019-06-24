'use strict'

class InscriptionController {
  async Inscrire({ request, response, view }) {
    return view.render('formulaire_inscription')
  }

}

module.exports = InscriptionController
