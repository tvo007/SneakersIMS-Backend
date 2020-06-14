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
Route.put ('/admin/products/:id', 'Admin/ProductController.update'); //edit product by id
Route.delete ('/admin/products/:id', 'Admin/ProductController.delete'); //delete product by id

// Admin/Brands
Route.get('/admin/brands', 'Admin/BrandController.getAll') //get all
Route.post('/admin/brands', 'Admin/BrandController.store') //add/create a brand
Route.get('/admin/brands/:id', 'Admin/BrandController.getOne') //get one brand
Route.put('/admin/brands/:id', 'Admin/BrandController.update') //edit a brand by id
Route.delete('/admin/brands/:id', 'Admin/BrandController.delete') // delete brand by id

//auth/login/getUser
Route.post('/admin/register', 'Admin/UserController.register') //reg user
Route.post('/admin/login', 'Admin/UserController.login') //login user
Route.get('/admin/users/:id', 'Admin/UserController.getUser') //get a user by id



