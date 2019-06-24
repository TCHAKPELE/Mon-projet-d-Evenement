'use strict'
const event = use('App/Models/Evenement')
const database = use('Database')

class EnregistrerEventController {
  async save({ request, response, view,auth }) {

    const val = await database.select('*')
      .from('type_events')

    const Event = new event()
    Event.users_id = auth.user.id
    Event.nom_event = request.input('nom_event')

    const value = await database.select('code_event')
      .from('evenements')
      .where('nom_event', Event.nom_event)

    if (value[0] == null) {
      Event.date = request.input('date')
      Event.adresse = request.input('adress')

      const value2 = await database.select('code_event')
        .from('evenements')
        .where('adresse', Event.adresse)
        .andWhere('date', Event.date)

      if (value2[0] == null) {
        Event.nbr_ticket = request.input('nbr')

        const req = await database.select('id')
          .from('type_events')

        
          
        Event.type_events_id = request.input('type')

        

        Event.statut = false

        Event.Prix_ticket = request.input('price')

        await Event.save()
        const d = "Enrégistrement Reussi "
        const suv = "alert alert-success"
        const suv1 ="alert"
        const suv2 = "margin - left: 500px; margin - right: 500px"

        return view.render('add_event', { suv,suv1,suv2,d ,val})

      }
      else {
        const suv = "alert alert-danger"
        const suv1 = "alert"
        const suv2 = "margin - left: 500px; margin - right: 500px"

        const d = "Ce lieu est déjà reservé à cette date"

        return view.render('add_event', { suv, suv1,suv2,d ,val})

      }

    }
    else {
      const suv = "alert alert-danger"
      const suv1 = "alert"
      const suv2 = "margin - left: 500px; margin - right: 500px"
      const d = "Nom d'evenement déja utilisé"

      return view.render('add_event', { suv, suv1,suv2,d,val})

    }

    }

   
}

module.exports = EnregistrerEventController
