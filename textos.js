/* =====================================================================
   ISLA DE PATMOS – APOCALIPSIS
   ARCHIVO DE TEXTOS Y CONFIGURACIÓN  (textos.js)

   ► Este es el ÚNICO archivo que necesitas editar para cargar tu información.
   ► Súbelo a GitHub en la MISMA carpeta que index.html.
   ► Todos los que abran el enlace verán lo que escribas aquí.

   CÓMO PEGAR UN TEXTO
   - Busca el NIVEL que quieres (están del 1 al 12, en orden).
   - Pega tu texto de la Biblia entre las comillas invertidas ` ` de "biblia".
   - Pega tu texto de El conflicto de los siglos entre las comillas ` ` de "conflicto".
   - Separa cada párrafo con UNA LÍNEA EN BLANCO (así se pueden marcar con ★).
   - IMPORTANTE: dentro del texto NO uses el símbolo ` (comilla invertida)
     ni la combinación ${ . Todo lo demás (comillas, tildes, ñ) sí se puede.
   ===================================================================== */


/* ────────────── AJUSTES GENERALES ────────────── */

// Enlace del botón REGRESAR (arriba a la derecha)
const REGRESAR_URL = "https://robertproductions12-developer.github.io/BATALLADANIEL/";

// Imagen del explorador
const EXPLORADOR_IMG = "explorador.png";


/* ────────────── WHATSAPP (botón debajo de cada video) ──────────────
   Escribe el número con código de país, SIN el signo + y SIN espacios.
   Ejemplo Colombia: "573001234567"     Ejemplo México: "525512345678"
   Si lo dejas vacío (""), WhatsApp se abre y la persona elige el contacto.
   También puedes poner el enlace de un GRUPO o canal de WhatsApp en
   WHATSAPP_ENLACE y ese tendrá prioridad.                                   */
const WHATSAPP_NUMERO = "";
const WHATSAPP_ENLACE = "";          // ej: "https://chat.whatsapp.com/XXXXXXXX"
const WHATSAPP_BOTON  = "Escríbele a tu guía por WhatsApp";
// Mensaje que se escribe solo. Puedes usar {nivel}, {nombre} y {ref}
const WHATSAPP_MENSAJE = "Hola, vengo de la Isla de Patmos. Terminé el Nivel {nivel}: {nombre} ({ref}) y quiero compartir lo que aprendí.";


/* ────────────── ALERTA ANTES DE ENTRAR A CADA NIVEL ────────────── */

const ORACION_SEGUNDOS = 6;    // segundos que el botón espera para dar tiempo a orar (0 = sin espera)
const ORACION_TITULO = "Antes de entrar, ora";
const ORACION_TEXTO  = "Señor, abre mis ojos y mi corazón. Graba en mí lo que voy a aprender en este nivel y ayúdame a ponerlo en práctica. En el nombre de Jesús, amén.";

// Cada vez que alguien entra a un nivel se muestran 3 de estos métodos al azar.
// Puedes agregar, quitar o cambiar los que quieras.
const METODOS = [
  { icono:"🔊", titulo:"Léelo en voz alta",       texto:"Oír lo que lees ayuda a que se quede en tu memoria. Usa el botón Escuchar." },
  { icono:"★",  titulo:"Marca lo que te hable",   texto:"Toca el párrafo que más te impacte y guárdalo con ★ Marcar." },
  { icono:"✍️", titulo:"Resúmelo con tus palabras", texto:"Al terminar, escribe en una sola frase lo que aprendiste." },
  { icono:"❓", titulo:"Hazte preguntas",          texto:"¿Qué dice? ¿Qué significa? ¿Qué debo hacer yo con esto?" },
  { icono:"🗣️", titulo:"Compártelo con alguien",   texto:"Enseñar a otro es la mejor forma de aprender. Usa el botón de WhatsApp." },
  { icono:"🔁", titulo:"Repásalo mañana",          texto:"Vuelve a este nivel mañana y trata de recordarlo sin mirar el texto." },
  { icono:"🙏", titulo:"Conviértelo en oración",   texto:"Termina agradeciendo a Dios por una verdad que te mostró hoy." }
];


/* =====================================================================
   NIVELES 1 AL 12
   n        = nombre del nivel
   ref      = capítulos de Apocalipsis
   video    = ruta del video (súbelo a GitHub en la carpeta "videos")
   biblia   = texto bíblico (pégalo entre las comillas invertidas)
   conflicto= texto de El conflicto de los siglos
   (opcional) whatsapp = número solo para este nivel, ej: "573001234567"
   (opcional) enlace   = enlace de WhatsApp solo para este nivel
   ===================================================================== */
const NIVELES = [

/* ───────────────────────── NIVEL 1 ───────────────────────── */
{ n:"La visión de Patmos", ref:"Apocalipsis 1", video:"videos/nivel1.mp4",
  whatsapp:"", enlace:"",
  biblia:`

La revelación de Jesucristo
1 La revelación de Jesucristo, que Dios le dio para manifestar a sus siervos las cosas que deben suceder pronto. La declaró enviándola por medio de su ángel a su siervo Juan, 2 el cual ha dado testimonio de la palabra de Dios, del testimonio de Jesucristo y de todas las cosas que ha visto. 3 Bienaventurado el que lee y los que oyen las palabras de esta profecía, y guardan las cosas en ella escritas, porque el tiempo está cerca.

Salutaciones a las siete iglesias
4 Juan, a las siete iglesias que están en Asia: Gracia y paz a vosotros de parte del que es y que era y que ha de venir, de los siete espíritus que están delante de su trono, 5 y de Jesucristo, el testigo fiel, el primogénito de los muertos y el soberano de los reyes de la tierra. Al que nos ama, nos ha lavado de nuestros pecados con su sangre 6 y nos hizo reyes y sacerdotes para Dios, su Padre, a él sea gloria e imperio por los siglos de los siglos. Amén.

7 He aquí que viene con las nubes:
Todo ojo lo verá, y los que lo traspasaron;
y todos los linajes de la tierra se lamentarán por causa de él.
Sí, amén.

8 «Yo soy el Alfa y la Omega, principio y fin», dice el Señor, el que es y que era y que ha de venir, el Todopoderoso.

Una visión del Hijo del hombre
9 Yo, Juan, vuestro hermano y compañero en la tribulación, en el reino y en la perseverancia de Jesucristo, estaba en la isla llamada Patmos, por causa de la palabra de Dios y del testimonio de Jesucristo. 10 Estando yo en el Espíritu en el día del Señor oí detrás de mí una gran voz, como de trompeta, 11 que decía: «Yo soy el Alfa y la Omega, el primero y el último. Escribe en un libro lo que ves y envíalo a las siete iglesias que están en Asia: a Éfeso, Esmirna, Pérgamo, Tiatira, Sardis, Filadelfia y Laodicea.»

12 Me volví para ver la voz que hablaba conmigo. Y vuelto, vi siete candelabros de oro, 13 y en medio de los siete candelabros a uno semejante al Hijo del hombre, vestido de una ropa que llegaba hasta los pies, y tenía el pecho ceñido con un cinto de oro. 14 Su cabeza y sus cabellos eran blancos como blanca lana, como nieve; sus ojos, como llama de fuego. 15 Sus pies eran semejantes al bronce pulido, refulgente como en un horno, y su voz como el estruendo de muchas aguas. 16 En su diestra tenía siete estrellas; de su boca salía una espada aguda de dos filos y su rostro era como el sol cuando resplandece con toda su fuerza.

17 Cuando lo vi, caí a sus pies como muerto. Y él puso su diestra sobre mí, diciéndome: «No temas. Yo soy el primero y el último, 18 el que vive. Estuve muerto, pero vivo por los siglos de los siglos, amén. Y tengo las llaves de la muerte y del Hades. 19 Escribe, pues, las cosas que has visto, las que son y las que han de ser después de éstas. 20 Respecto al misterio de las siete estrellas que has visto en mi diestra, y de los siete candelabros de oro: las siete estrellas son los ángeles de las siete iglesias, y los siete candelabros que has visto son las siete iglesias.

`,
  conflicto:`

PEGA AQUÍ EL TEXTO DE EL CONFLICTO DE LOS SIGLOS DEL NIVEL 1

`},

/* ───────────────────────── NIVEL 2 ───────────────────────── */
{ n:"Las siete iglesias", ref:"Apocalipsis 2–3", video:"videos/nivel2.mp4",
  whatsapp:"", enlace:"",
  biblia:`

PEGA AQUÍ EL TEXTO BÍBLICO DEL NIVEL 2

`,
  conflicto:`

PEGA AQUÍ EL TEXTO DE EL CONFLICTO DE LOS SIGLOS DEL NIVEL 2

`},

/* ───────────────────────── NIVEL 3 ───────────────────────── */
{ n:"El trono y el Cordero", ref:"Apocalipsis 4–5", video:"videos/nivel3.mp4",
  whatsapp:"", enlace:"",
  biblia:`

PEGA AQUÍ EL TEXTO BÍBLICO DEL NIVEL 3

`,
  conflicto:`

PEGA AQUÍ EL TEXTO DE EL CONFLICTO DE LOS SIGLOS DEL NIVEL 3

`},

/* ───────────────────────── NIVEL 4 ───────────────────────── */
{ n:"Los siete sellos", ref:"Apocalipsis 6", video:"videos/nivel4.mp4",
  whatsapp:"", enlace:"",
  biblia:`

PEGA AQUÍ EL TEXTO BÍBLICO DEL NIVEL 4

`,
  conflicto:`

PEGA AQUÍ EL TEXTO DE EL CONFLICTO DE LOS SIGLOS DEL NIVEL 4

`},

/* ───────────────────────── NIVEL 5 ───────────────────────── */
{ n:"Los sellados", ref:"Apocalipsis 7", video:"videos/nivel5.mp4",
  whatsapp:"", enlace:"",
  biblia:`

PEGA AQUÍ EL TEXTO BÍBLICO DEL NIVEL 5

`,
  conflicto:`

PEGA AQUÍ EL TEXTO DE EL CONFLICTO DE LOS SIGLOS DEL NIVEL 5

`},

/* ───────────────────────── NIVEL 6 ───────────────────────── */
{ n:"Las siete trompetas", ref:"Apocalipsis 8–9", video:"videos/nivel6.mp4",
  whatsapp:"", enlace:"",
  biblia:`

PEGA AQUÍ EL TEXTO BÍBLICO DEL NIVEL 6

`,
  conflicto:`

PEGA AQUÍ EL TEXTO DE EL CONFLICTO DE LOS SIGLOS DEL NIVEL 6

`},

/* ───────────────────────── NIVEL 7 ───────────────────────── */
{ n:"El librito y los dos testigos", ref:"Apocalipsis 10–11", video:"videos/nivel7.mp4",
  whatsapp:"", enlace:"",
  biblia:`

PEGA AQUÍ EL TEXTO BÍBLICO DEL NIVEL 7

`,
  conflicto:`

PEGA AQUÍ EL TEXTO DE EL CONFLICTO DE LOS SIGLOS DEL NIVEL 7

`},

/* ───────────────────────── NIVEL 8 ───────────────────────── */
{ n:"La mujer y el dragón", ref:"Apocalipsis 12", video:"videos/nivel8.mp4",
  whatsapp:"", enlace:"",
  biblia:`

PEGA AQUÍ EL TEXTO BÍBLICO DEL NIVEL 8

`,
  conflicto:`

PEGA AQUÍ EL TEXTO DE EL CONFLICTO DE LOS SIGLOS DEL NIVEL 8

`},

/* ───────────────────────── NIVEL 9 ───────────────────────── */
{ n:"Las dos bestias", ref:"Apocalipsis 13–14", video:"videos/nivel9.mp4",
  whatsapp:"", enlace:"",
  biblia:`

PEGA AQUÍ EL TEXTO BÍBLICO DEL NIVEL 9

`,
  conflicto:`

PEGA AQUÍ EL TEXTO DE EL CONFLICTO DE LOS SIGLOS DEL NIVEL 9

`},

/* ───────────────────────── NIVEL 10 ───────────────────────── */
{ n:"Las siete plagas", ref:"Apocalipsis 15–16", video:"videos/nivel10.mp4",
  whatsapp:"", enlace:"",
  biblia:`

PEGA AQUÍ EL TEXTO BÍBLICO DEL NIVEL 10

`,
  conflicto:`

PEGA AQUÍ EL TEXTO DE EL CONFLICTO DE LOS SIGLOS DEL NIVEL 10

`},

/* ───────────────────────── NIVEL 11 ───────────────────────── */
{ n:"Babilonia", ref:"Apocalipsis 17–18", video:"videos/nivel11.mp4",
  whatsapp:"", enlace:"",
  biblia:`

PEGA AQUÍ EL TEXTO BÍBLICO DEL NIVEL 11

`,
  conflicto:`

PEGA AQUÍ EL TEXTO DE EL CONFLICTO DE LOS SIGLOS DEL NIVEL 11

`},

/* ───────────────────────── NIVEL 12 ───────────────────────── */
{ n:"Cristo viene y la nueva Jerusalén", ref:"Apocalipsis 19–22", video:"videos/nivel12.mp4",
  whatsapp:"", enlace:"",
  biblia:`

PEGA AQUÍ EL TEXTO BÍBLICO DEL NIVEL 12

`,
  conflicto:`

PEGA AQUÍ EL TEXTO DE EL CONFLICTO DE LOS SIGLOS DEL NIVEL 12

`}

];
