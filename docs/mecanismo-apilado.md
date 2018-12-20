# Mecanismo de Apilado

## problema

Dado un sistema tenemos que poder programar otro "apilándole cosas al primero". 

Dado un framework tenemos que poder "apilarle capas" que agreguen funcionalidad.

Esas capas pueden agregar métodos internos a nivel framework 
(del *front-end* o del *back-end*) o funcionalidad a nivel usuario: 
(más tablas, más pantallas)

## mecanismo de *backend-plus*

En *backend-plus* solo el backend tenía una clase (orientada a objetos), 
el *front-end* y el *modelo* eran datos del *back-end*. 
Para apilar los *back-ends* se utilizaba el patrón 
*[Mixin](https://basarat.gitbooks.io/typescript/docs/types/mixins.html)*

### desventajas de los Mixin

Usar Mixin tiene dos desventajas. Una es la necesidad de usar funciones,
la otra es la limitación de tener que tener un constructor genérico (con *any*).

Lo de las funciones se puede volver muy incómodo si pensamos en que 
hay que escribir una por cada clase que se quiere extender. 