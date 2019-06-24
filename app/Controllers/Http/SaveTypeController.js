'use strict'
const database = use('Database')
const Type = use('App/Models/TypeEvent')
class SaveTypeController {

  async save_type({ view, request ,auth}) {

    const type = new Type()

     type.libelle = request.input('type')

    const verify = await database.select('id')
      .from('type_events')
      .where('libelle', type.libelle)
    const a = auth.user.username


    if (verify[0] == null) {

      const z = "Type Evenement ajouté "
     
      await type.save()

      return view.render('formulaire_type', { z, a })
    }
    else {
      const w = "Ce Type d'Evenement Existe déjà "

      return view.render('formulaire_type', { w, a })

    }


  }
}

module.exports = SaveTypeController
