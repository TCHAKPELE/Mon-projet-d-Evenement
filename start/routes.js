'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

  /*
  | --------------------------------------------------------------------------
| Routes principale
    | --------------------------------------------------------------------------
    */

    Route.on('/').render('interface_connection')

/*
| --------------------------------------------------------------------------
| Enregistrement(post)
  | --------------------------------------------------------------------------
  */


Route.post('/inscription', 'EnregistrementClientController.create')
Route.post('/add_event', 'EnregistrerEventController.save')
Route.post('/login', 'ClientAuthController.login')
Route.post('/enregistrer', 'GestionreservationController.save')
Route.post('/valider', 'GestionEventController.valider')
Route.post('/create', 'EnregistrementAdminController.create')
Route.post('/search', 'SearchEventController.search')
Route.post('/search2', 'SearchEventController.search2')
Route.post('/cancel', 'CancelEventController.cancel')
Route.post('/event', 'ConsultEventController.affiche')
Route.post('/reservation', 'AffichageeventController.affiche')
Route.post('/change1', 'ChangepasswordController.change1')
Route.post('/change2', 'ChangepasswordController.change2')
Route.post('/change3', 'ChangepasswordController.change3')
Route.post('/change4', 'ChangepasswordController.change4')
Route.post('/cancel_reserv', 'ConfirmeventController.cancel_reserv')
Route.post('/save_type', 'SaveTypeController.save_type')
Route.post('/update', 'UpdateEventController.update')
Route.post('/password_forget', 'PasswordForgetController.password_forget')
Route.post('/solder','SolderController.solder')
/*
| --------------------------------------------------------------------------
| route get
  | --------------------------------------------------------------------------
  */
Route.get('/inscription', 'InscriptionController.Inscrire')
Route.get('/add_event', 'AddeventController.Newevent')
Route.get('/affiche', 'AfficheClientController.affiche')
Route.get('/home_client', 'HomeclientController.back')
Route.get('/home_admin', 'HomeadminController.back')
Route.get('/deco', 'DeconnectionController.deco')
Route.get('/add_admin', 'AddAdminController.add_admin')
Route.get('/password','RedirectPasswordController.password')
Route.get('/confirme','ConfirmeventController.confirme')
Route.get('/reserv','ConsultReservationController.affiche_reserv')
Route.get('/password2', 'RedirectPasswordController.password2')
Route.get('/add_type','AddTypeController.add_type')
Route.get('/redirect2','RedirectUpdateController.redirect2')
Route.get('/redirect3','RedirectPassForgetController.redirect3')
Route.get('redirect4','Redirect4Controller.redirect4')
