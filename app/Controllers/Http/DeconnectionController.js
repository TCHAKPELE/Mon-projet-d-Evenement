'use strict'

class DeconnectionController {
  async deco ({ view,auth } ){
    await auth.logout()
  return view.render('interface_connection')

}
}

module.exports = DeconnectionController
