# Lunar_lander
Proyecto de videojuego **LUNAR LANDER** en _html_ y _css_.   
__Autor__: Guillermo Cirer  
__Cliente__: Mariano  

[Probar el juego (en testeo aun)!](https://rawgit.com/guilleCM/Lunar_lander/master/index.html)  

### DESCRIPCIÓN PROYECTO:  
Tengo que desarrollar el proyecto de Mariano, y como cliente me ha proporcionado sus ideas. El archivo que me ha facilitado carece de ciertos elementos que tendré que trabajar a parte. Faltan:  
- [ ] Esquema de desarrollo _html_ (indicar cómo quiere que esté estructurado el juego en el _html_ y _css_).
- [ ] Imágen de nave en estado de explosión (cuando no se supera el juego correctamente).
- [ ] Imágenes separadas del fondo y los elementos decorativos (solo dispongo de una imagen con todo ya pegado y que no puedo tratar de forma aislada).
- [ ] Información sobre los menús e instrucciones.

##Tareas realizadas a parte:
- [x] Redimensionar imágenes: Las imágenes de la nave y del motor de la nave tenían demasiado espacio transparente sin uso. Por ello he redimensionado el lienzo de:
 * La imagen de la nave de 800x500 a  49x85 píxeles (reduciendo su peso de 2,3 kB a 1,4 kB).
 * La imagen del motor de la nave de 800x500 a 30x45 píxeles (reduciendo su peso de 985 bytes a 430 bytes)
- [x] Crear imagen .gif del motor encendido para que de la sensación de que el fuego se enciende. Ocupa 884 bytes.  
![motor_on](https://github.com/guilleCM/Lunar_lander/blob/master/img/motor.gif)  
- [x] Diseñar y crear por mi cuenta una imagen en formato .gif de la nave en estado de explosion (es decir, cuando choca precipitadamente contra la superficie). La imagen resultante pesa 15,3 kB.  
![nave_explosionada](https://github.com/guilleCM/Lunar_lander/blob/master/img/nave_rota.gif)  
- [x] Diseñar los iconos del panel de configuracion del juego (pausa, reinicia, instrucciones). En total pesan 838 bytes. Además he creado un botón adicional para propulsar la nave que es necesario para la versión smartphone del juego. Su peso es de 312 bytes.
- [x] La imagen que muestra cómo el cliente quiere que se vea el juego es inviable para el desarrollo del html. Me veo obligado a recortar y separar la imagen para poder utilizar los elementos correctamente.
 * Recortar un trozo del fondo de la imagen que me dieron para utilizarla como background con la función de repetir para llenar el fondo de una manera más óptima y que escale adecuadamente con todos los tamaños de dispositivo. La he redimensionado a 255x255 píxeles y le he reducido la paleta de colores para bajar el peso a 1,4 kB.  
 ![Imagen background](https://github.com/guilleCM/Lunar_lander/blob/master/img/fondo.png) 
 * Recortar los elementos decorativos (mundo y sol) para que se puedan adaptar a la pantalla y para poder tratarlos individualmente como *divs* en el *html*. La imagen del sol la he reducido a 1,6 kB y la del mundo a 13,2 kB.  
 ![Imagen mundo](https://github.com/guilleCM/Lunar_lander/blob/master/img/mundo.png)
 ![Imagen sol](https://github.com/guilleCM/Lunar_lander/blob/master/img/sol.png)
 * No disponía de una imagen de la luna aislada, sino que venía acoplada con el resto del fondo. Me dieron libertad para cambiarla y así lo hice porque me parecía que la que propuesta no encajaba estéticamente con el resto de elementos. Así que diseñé una luna que ocupa 9,4 kB, que mantiene la esencia de lo que el cliente quería y que va más acorde con la temática.  
![Imagen luna](https://github.com/guilleCM/Lunar_lander/blob/master/img/luna.png) 
- [x] Añadida una imágen para usarla como fondo del div que mostrará de las instrucciones, su peso es 9,3 kB.  
 ![Imagen background](https://github.com/guilleCM/Lunar_lander/blob/master/img/fondo_instrucciones.jpg) 
- [x] Añadida una imágen para usarla como fondo del html "Acerca de" que mostrará de información adicional sobre el juego. Su peso es 8,7 kB.  
 ![Imagen background instrucciones](https://github.com/guilleCM/Lunar_lander/blob/master/img/papel.jpg) 
- [x] En total, el conjunto de imágenes que darán vida al juego ocupa **62,8 kB**. 
- [x] El esquema de desarrollo del html que he seguido, para ser lo más fiel posible a la imagen de lo que el cliente me pedía, es el siguiente: (este esquema es para la versión responsive)  
![Imagen esquema](https://raw.githubusercontent.com/guilleCM/Lunar_lander/master/img/esquema_2.jpg)   
- [x] Versión optimizada para smarpthone; He creado otro css que modifica los botones para que sean más vistosos en una pantalla pequeña (resolucionados a 70x70 píxeles) y que se pueda interaccionar mejor con ellos.
- [x] Creado *div* para las instrucciones del juego, con descripción de los controles del juego y de la finalidad del mismo. Este div estará oculto hasta que se apriete el botón de Instrucciones.
- [x] Creado *html* con información adicional sobre el proyecto. Es decir, un *about* (acerca de), donde se explican los recursos utilizados.

###RESULTADOS
- [ ] Esto es lo que el cliente pedía:  
![Imagen cliente](https://github.com/guilleCM/Lunar_lander/blob/master/imagenes_cliente/propuesta_cliente.jpg)  
- [x] Y esto es lo que yo he diseñado a partir de esa propuesta:   
**CSS Smartphone**  
![Imagen vertical](https://github.com/guilleCM/Lunar_lander/blob/master/img/vertical.jpg)  
**CSS Responsive**  
![Imagen horizontal](https://github.com/guilleCM/Lunar_lander/blob/master/img/horizontal.jpg)  
