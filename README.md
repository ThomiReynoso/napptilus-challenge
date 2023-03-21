# Code challenge para Napptilus por Thomas Reynoso

Este challenge es un e-commerce donde se pueden comprar dispositivos móviles.

## Funcionalidades / Vistas

### Listado de productos (/)
<img width="1420" alt="image" src="https://user-images.githubusercontent.com/26986556/226696445-1999ef20-e95d-43d8-a89d-feb55e3188f6.png">
En caso de no encontrar ningun producto desde el SearchBar, se muestra lo siguiente: 
<img width="897" alt="image" src="https://user-images.githubusercontent.com/26986556/226698205-699d37f5-7acd-41c5-aa39-a3452548fd6d.png">


### Detalle de un producto (/product/id)
<img width="1422" alt="image" src="https://user-images.githubusercontent.com/26986556/226696707-cd5ff347-e4ba-4f57-90f8-230f83b4433e.png">

En esta vista se puede apreciar como se arma el breadcrumb, con posibilidad de acceder al listado inicial si se clickea en `Products`

Por otro lado, si se agrega el item al carrito, recibimos un mensaje de feedback, y se agrega efectivamente.
<img width="1005" alt="image" src="https://user-images.githubusercontent.com/26986556/226697564-008288b1-8085-4770-ab16-ddf4fd185109.png">

### Persistencia de datos y manejo de estados
- El item agregado al carrito persiste durante 5 minutos, ya que lo almacenamos en `LocalStorage`. Se puede encontrar con la key `store`
- Se hace uso de `Redux` para poder mantener el estado del `Header` actualizado. 
- Se agrega la funcionalidad de caché para evitar hacer llamados a la API todo el tiempo. Para ello, se almacenan en `LocalStorage` los objetos `products` y `product-id` con toda la informacion del mismo. Estos datos persisten durante 1 hora, luego se borran. 
  
  <img width="1423" alt="image" src="https://user-images.githubusercontent.com/26986556/226699388-e608e45d-9768-4273-adb2-25842ee37fa5.png">

 
## Available Scripts

In the project directory, you can run:

### `npm start`

Levanta la app en modo desarrollo en [http://localhost:3000](http://localhost:3000) 

### `npm test`

Lanza los tests creados en alguna de las funcionalidades core de la app, como por ejemplo: 
- Header
- Buscador
- Acciones (agregar al carrito)
- Rendereado del listado

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
\
