'use strict'
const database = use('Database')
class AffichageeventController {
  async affiche({ response, view, auth, request }) {

    const z = await database.select('*')
      .from('type_events')
       
  
     
        const event = await database.select('*')
          .from('evenements')
          .where('type_events_id', request.input('1'))
          .andWhere('statut', true)

    const a = auth.user.username
   
        if (event[0] == null) {
          const x = "0 Resultat trouvé"
          return view.render('affichageevent', { event, x, a,z })
        }
        else

          return view.render('affichageevent', { event, a ,z})
      }

      }
     
      
    

   


module.exports = AffichageeventController
