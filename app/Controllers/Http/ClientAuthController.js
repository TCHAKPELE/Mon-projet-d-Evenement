'use strict'
const database = use('Database')

class ClientAuthController {

  async login({ request, auth, view,session,response}) {


    const { email, password } = request.all()

   

    if (await auth.attempt(email, password)) {
     
      

      if (auth.user.roles === 'client') {

        const x = await database.select('*')
          .from('type_events')


        const a = auth.user.username
        return view.render('menu_client', { a, x })
      }

      else

        if (auth.user.roles === 'admin') {

          const x = await database.select('*')
            .from('type_events')


          const a = auth.user.username
          return view.render('menu_admin', { a, x })
        }
        else
          if (auth.user.role == null) {
          
            const a = "Email ou Mot de passe Incorrect"

            return view.render('interface_connection', {a})
          }

          }

    }
    

}

      





  



    

     
  
  
  



module.exports = ClientAuthController
