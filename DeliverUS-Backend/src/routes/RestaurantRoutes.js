import RestaurantController from '../controllers/RestaurantController.js'

const loadFileRoutes = function (app) {
  // TODO: Include routes for restaurant described in the lab session README
  app.route('/restaurants')
    .get(RestaurantController.index) 
    .get(RestaurantController.show) 
    .post(RestaurantController.create)
    .put(RestaurantController.update)
    .delete(RestaurantController.delete)
}
export default loadFileRoutes
