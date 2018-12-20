# Estructura general de *Apilado*

El framwork se llama apilado porque está destinado a apliar definiciones 
(o extensiones de clases) a partir de unas iniciales. 
Dada cualquier aplicación se le puede apilar distintas capas. 
Por ejemplo, podrían ser capas genéricas (que se le pueden apilar a cualquier aplicación):

  * Una agenda (con las tablas calenario y citas, y un método que sepa 
    dibujar eso en pantalla)
  * Una bitácora (que deja registrado todas las acciones de los usuarios) con 
    su botón actividad (que muestra al supervisor qué hizo cada usuario)
  * Un configurador visual (para elegir tipos de letra y sus tamaños, colores 
    en pantalla, etc)

Apilando una capa la aplicación final tendría más funcionalidad. Otras capas
serían específicas a un dominio particular o a una aplicación ya existente. 
Por ejemplo en una aplicación de encuestas se podrían agregar:

  * Control de consistencias (con sus correspondientes tablas y pantallas)
  * Tablero de control (que indica el avance del trabajo)

En cada capa apilada pueden o no agregarse tablas en la base de datos, 
pantallas en el cliente, opciones de menú, procesos en batch, 
controles internos, etc.

## back-end

Es el conjunto de clases que maneja el servidor, inicia el *express*, 
registra los path con sus URL, lee o conoce la configuración inicial, 
se conecta a la base de datos, empaqueta y desempaqueta 
los mensajes transmitidos hacia el front-end y 
hace validaciones de tipos de datos y parámetros obligatorios. 

Una parte fundamental del back-end es tener las funciones (o servicios) 
que soportan los ABM de las tablas. 

## front-end

Es el conjunto de clases que sabe dibujar las pantallas en el navegador, 
reaccionar ante las acciones del usuario,
enviar y recibir los mensajes del back-end,
refrescar el contenido de las pantalla y enviar mensajes al usuario. 

Una parte fundamental del front-end es poder dibujar (de manera genérica)
las tablas (tipo Excel) para poder editar los datos de la aplicación. 

## modelo

Es el conjunto de clases que describe el modelo del negocio 
(buisness rules), independientemente de los detalles de implementación
del back-end y del front-end. 
Forman parte del modelo:

  1. El modelo de datos: los nombres de tablas o entidades con sus campos, 
    tipos y relaciones (ej: tabla de calendario, tabla de citas).
  2. Los procesos o servicios (ej: cancelar todas las citas de una semana)
  3. Los controless (ej: no se pueden agendar citas para días bloqueados 
    en el calendario)
  4. Los menúes
  5. Los permisos
  6. Las pantallas que deben usarse para las distintas interacciones 
    (ej: para mostrar el calendario en vez de una tabla tipo *"Excel"* 
    se usará una pantalla específica definida en la capa de *front-end* 
    del calendario)

El conocimiento (o una parte de él) está compartido entre el *front-end* 
y el *back-end*
