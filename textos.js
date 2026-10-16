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

PEGA AQUÍ EL TEXTO BÍBLICO DEL NIVEL 1

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
