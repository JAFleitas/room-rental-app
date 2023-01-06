# Rutas API

## /api/properties
 
#### /getProperties

Esta ruta me devuelve un array con las propiedades, por default, me devolverá las propiedades con todos los atributos y cada propiedad estará ordenada por nombre de forma ascendete, es decir, de la A a la Z.

Se puede realizar filtrados pasandole las siguientes queries:

* attributes

   Para indicar los attributos que queremos recibir, cada atributo debe ir separado por un espacio o %20, por ejemplo, si solo queremos traer el nombre y id, la consulta quedaría: 

   http://localhost:5000/api/properties/getProperties?attributes=name%20id

* exclude

   Esta query es parecida a la de attributes, pero en vez de indicarme qué atributos quiero traer, me dice cuáles no quiero traer, por ejemplo, si en el home no necesito la descripción y el id del propietario le pasaría la siguiente consulta:

   http://localhost:5000/api/properties/getProperties?exclude=description%20userID

* orderBy y order

   La query 'order' por default tendrá el valor de ASC, pero si queremos cambiarlo podríamos usar DESC, y me indica si se ordenará de forma ascendente o descendente en base a orderBy.

   La query 'orderBy' tiene por default el valor 'name' y me indica en base a qué se realiza el ordenamiento, por ejemplo, si queremos que las propiedades estén ordenadas de forma descendente por nombre, pondríamos:

   http://localhost:5000/api/properties/getProperties?order=DESC

   Si no queremos que esté ordenado por nombre, sino por precio, podríamos setear ambos valores de la siguiente forma:

   http://localhost:5000/api/properties/getProperties?order=DESC&orderBy=price

   Si encambio quisieramos que el orden fuera por rating, de forma ascendente, no hace falta ponerle order=ASC ya que ya tiene ese valor por defecto:

   http://localhost:5000/api/properties/getProperties?orderBy=rating

* search

   Esta query la usaría en caso de que quiera buscar una propiedad por nombre, por ejemplo, si quiero buscar todas las propiedades que en su nombre contengan la palabra 'ciudad', quedaría una consulta:

   http://localhost:5000/api/properties/getProperties?search=ciudad

   También se le pueden pasar frases, por ejemplo:

   http://localhost:5000/api/properties/getProperties?search=tamento%20moderno


* minprice y maxprice

   Estas queries me permiten filtrar por precio, podemos usar uno o ambos, por ejemplo:

   http://localhost:5000/api/properties/getProperties?minprice=10

   http://localhost:5000/api/properties/getProperties?maxprice=40

   http://localhost:5000/api/properties/getProperties?minprice=30&maxprice=50


* type => id_type_properties

   Esta query me permite filtrar las propiedades según su tipo (Alojamiento completo, casa de playa, etc), se le debe pasar el id del tipo de propiedad que se quiere buscar, por ejemplo: 

   http://localhost:5000/api/properties/getProperties?type=1bb62325-bdb7-4452-af86-d9205253bbc7

* location

   Esta query me permite buscar por ubicación, no debe de ser exacto, por ejemplo, le podría hacer la siguientes consultas:

   http://localhost:5000/api/properties/getProperties?location=per

   http://localhost:5000/api/properties/getProperties?location=ecuad

* minrooms y maxrooms
* minpeople y maxpeople
   
   Ambos pares de queries funcionan igual que minprice y maxprice, se puede usar un solo valor, ambos o ninguno en caso de no querer filtrar por este criterio:

   De 3 habitaciones en adelante: http://localhost:5000/api/properties/getProperties?minrooms=3

   Que tenga 2 habitaciones o menos: http://localhost:5000/api/properties/getProperties?maxrooms=2

   De 3 a 5 habitaciones: http://localhost:5000/api/properties/getProperties?minrooms=3&maxrooms=4

   Que acepten al menos 3 personas: http://localhost:5000/api/properties/getProperties?minpeople=3
   
   Que acepten como máximo a 4 personas: http://localhost:5000/api/properties/getProperties?maxpeople=4

   Que acepten de 3 a 4 personas: http://localhost:5000/api/properties/getProperties?maxpeople=4&minpeople=3


Se pueden combinar todas las querys para lograr una búsqueda más compleja, sin embargo, si se coloca por ejemplo la query attributes y exclude en la misma consulta,

se ignorará la segunda, solo se puede usar una de esas querys en la misma consulta.

http://localhost:5000/api/properties/getProperties?maxpeople=4&minpeople=3&attributes=name%20id%20price%20rating&orderBy=rating&location=ecuad
