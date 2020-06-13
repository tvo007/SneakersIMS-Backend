'use strict';

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
const Route = use ('Route');
//API
// Route.get('api/admin/products', 'Admin/ProductController.sendAllProducts')
// Route.post('api/admin/products', 'Admin/OrderController.store')

// Admin/Products
Route.get ('/admin/products', 'Admin/ProductController.getAll'); //gets all products
Route.get ('/admin/products/:id', 'Admin/ProductController.getOne'); //gets product by id
Route.post ('/admin/products', 'Admin/ProductController.store'); //create product
// Route.get ('/admin/products/create', 'Admin/ProductController.create'); //lmao what is this?
// Route.get ('/admin/products/:id/edit', 'Admin/ProductController.edit'); shows products with brands
Route.put ('/admin/products/:id', 'Admin/ProductController.update');
//Route.get ('/admin/products/:id/delete', 'Admin/ProductController.delete');
Route.delete ('/admin/products/:id', 'Admin/ProductController.delete');

