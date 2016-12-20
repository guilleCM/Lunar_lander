# Implementaciones:  
## Tareas cumplidas:
- [x] Poner fondo, imagen de la nave y luna. Poner una tierra fijada a la pantalla para que se vea en cualquier tipo de dispositivo. Optimizar las imágenes. Recuerda que se pueden cargar diferentes tamaños y formas de fondos en función del dispositivo usando css.
- [x] Crear el menú: O bien creamos un menú 100% del espacio disponible (que para el móvil será el 100% de la pantalla) o ponemos un menú horizontal para la versión de escritorio y un menú 100% para el móvil.
- [x] Al pulsar una tecla o bien hacer click en la pantalla la nave debe cambiar de aspecto a nave con motor encendido y debe cambiar la aceleración de g a -g
- [x] Al pulsar una tecla o bien hacer click en la pantalla debe vaciarse el tanque de combustible de forma proporcional al tiempo que mantenemos pulsado el propulsor. Opcionalmente se pueden disponer de menores o mayores tanques de combustible para aumentar o disminuir la dificultad del juego.
- [x] Al tocar fondo debe mirarse si la velocidad de impacto es inferior a un valor umbral, en caso afirmativo mostrar mensaje de felicitación, en caso negativo explotar la nave. En ambos casos el juego finaliza y puede reiniciarse con la opción del menú reiniciar
- [x] Debe haber una página de How to play y una página de About accesibles desde el menú.

## Tareas extras:
- [x] Creado apartado Configuración en el menú del juego. Esta herramienta permite al jugador:  
 - Elegir dificultad del juego. El jugador dispone de tres niveles de combustible: Fácil (100litros), Medio (50litros) y Difícil (35litros).  
 ![settings](https://github.com/guilleCM/Lunar_lander/blob/master/img/menuConfiguracion-min.jpg)
 - Cambiar modelo de la nave (cada una con su respectiva animación de motor y en estado destruida).  
 ![modelo nave 2](https://github.com/guilleCM/Lunar_lander/blob/master/img/mod2nave.gif)
 ![modelo nave 1](https://github.com/guilleCM/Lunar_lander/blob/master/img/nave.png)
 - Cambiar el color de la luna.  
 ![modelo luna](https://github.com/guilleCM/Lunar_lander/blob/master/img/luna.png)
 ![modelo luna2](https://github.com/guilleCM/Lunar_lander/blob/master/img/mod2luna.png)
- [x] El medidor de fuel (expresado en tanto por ciento restante %) degrada el color a rojo en función del fuel que queda. Con el tanque vacio (0%) el indicador aparece en rojo.  
 ![fuel](https://github.com/guilleCM/Lunar_lander/blob/master/img/fuel-min.jpg)
- [x] Al finalizar el juego, si el jugador no consigue superar la partida se le indicará cuantos intentos ha utilizado.
- [x] El juego dispone en el html de un código que cargará el css en función del dispositivo que se utilice. Para escritorio siempre aplicará el css responsive que se ajusta a cualquier tamaño y recibe eventos ONCLICK y con TECLADO. Sin embargo para la versión Smartphone he decidido cargar otro css que recibe solo eventos ONTOUCH (que responde mejor al comportamiento del móvil). Por lo tanto para ver el funcionamiento del css vertical es necesario cargar el juego desde el movil, de modo que al detectar los eventos ONTOUCH el css cambiará automáticamente para responder a estos eventos.
- [x] Añadida rama minified (comprimida al máximo) del proyecto. Se ha reducido de 600kB a 200kB (66,6% aprox.) el peso del proyecto. [Puedes acceder aquí](https://github.com/guilleCM/Lunar_lander/tree/minified)
