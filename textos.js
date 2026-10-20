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
{ n:"VISIÓN", ref:"Apocalipsis 1 CS CAP 24", video:"videos/nivel1.mp4",
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

Capítulo 24—El templo de Dios
El pasaje biblico que más que ninguno había sido el fundamento y el pilar central de la fe adventista era la declaración: “Hasta dos mil y trescientas tardes y mañanas; entonces será purificado el santuario”. Daniel 8:14 (VM). Estas palabras habían sido familiares para todos los que creían en la próxima venida del Señor. La profecía que encerraban era repetida como santo y seña de su fe por miles de bocas. Todos sentían que sus esperanzas más gloriosas y más queridas dependían de los acontecimientos en ella predichos. Había quedado demostrado que aquellos días proféticos terminaban en el otoño del año 1844. En común con el resto del mundo cristiano, los adventistas creían entonces que la tierra, o alguna parte de ella, era el santuario. Entendían que la purificación del santuario era la purificación de la tierra por medio del fuego del último y supremo día, y que ello se verificaría en el segundo advenimiento. De ahí que concluyeran que Cristo volvería a la tierra en 1844. 

Pero el tiempo señalado había pasado, y el Señor no había aparecido. Los creyentes sabían que la Palabra de Dios no podía fallar; su interpretación de la profecía debía estar pues errada; ¿pero dónde estaba el error? Muchos cortaron sin más ni más el nudo de la dificultad negando que los 2.300 días terminasen en 1844. Este aserto no podía apoyarse con prueba alguna, a no ser con la de que Cristo no había venido en el momento en que se le esperaba. Alegábase que si los días proféticos hubiesen terminado en 1844, Cristo habría vuelto entonces para limpiar el santuario mediante la purificación de la tierra por fuego, y que como no había venido, los días no podían haber terminado. 

Aceptar estas conclusiones equivalía a renunciar a los cómputos anteriores de los períodos proféticos. Se había comprobado que los 2.300 días principiaron cuando entró en vigor el decreto de Artajerjes ordenando la restauración y edificación de Jerusalén, en el otoño del año 457 a. C. Tomando esto como punto de partida, había perfecta armonía en la aplicación de todos los acontecimientos predichos en la explicación de ese período hallada en. Daniel 9:25-27. Sesenta y nueve semanas, o los 483 primeros años de los 2.300 años debían alcanzar hasta el Mesías, el Ungido; y el bautismo de Cristo y su unción por el Espíritu Santo, en el año 27 de nuestra era, cumplían exactamente la predicción. En medio de la septuagésima semana, el Mesías había de ser muerto. Tres años y medio después de su bautismo, Cristo fue crucificado, en la primavera del año 31. Las setenta semanas, o 490 años, les tocaban especialmente a los judíos. Al fin del período, la nación selló su rechazamiento de Cristo con la persecución de sus discípulos, y los apóstoles se volvieron hacia los gentiles en el año 34 de nuestra era. Habiendo terminado entonces los 490 primeros años de los 2.300, quedaban aún 1.810 años. Contando desde el año 34, 1.810 años llegan a 1844. “Entonces—había dicho el ángel—será purificado el santuario”. Era indudable que todas las anteriores predicciones de la profecía se habían cumplido en el tiempo señalado. 

En ese cálculo, todo era claro y armonioso, menos la circunstancia de que en 1844 no se veía acontecimiento alguno que correspondiese a la purificación del santuario. Negar que los días terminaban en esa fecha equivalía a confundir todo el asunto y a abandonar creencias fundadas en el cumplimiento indudable de las profecías. 

Pero Dios había dirigido a su pueblo en el gran movimiento adventista; su poder y su gloria habían acompañado la obra, y él no permitiría que esta terminase en la oscuridad y en un chasco, para que se la cubriese de oprobio como si fuese una mera excitación mórbida y producto del fanatismo. No iba a dejar su Palabra envuelta en dudas e incertidumbres. Aunque muchos abandonaron sus primeros cálculos de los períodos proféticos, y negaron la exactitud del movimiento basado en ellos, otros no estaban dispuestos a negar puntos de fe y de experiencia que estaban sostenidos por las Sagradas Escrituras y por el testimonio del Espíritu de Dios. Creían haber adoptado en sus estudios de las profecías sanos principios de interpretación, y que era su deber atenerse firmemente a las verdades ya adquiridas, y seguir en el mismo camino de la investigación bíblica. Orando con fervor, volvieron a considerar su situación, y estudiaron las Santas Escrituras para descubrir su error. Como no encontraran ninguno en sus cálculos de los períodos proféticos, fueron inducidos a examinar más de cerca la cuestión del santuario. 

En sus investigaciones vieron que en las Santas Escrituras no hay prueba alguna en apoyo de la creencia general de que la tierra es el santuario; pero encontraron en la Biblia una explicación completa de la cuestión del santuario, su naturaleza, su situación y sus servicios; pues el testimonio de los escritores sagrados era tan claro y tan amplio que despejaba este asunto de toda duda. El apóstol Pablo dice en su Epístola a los Hebreos: “En verdad el primer pacto también tenía reglamentos del culto, y su santuario que lo era de este mundo. Porque un tabernáculo fue preparado, el primero, en que estaban el candelabro y la mesa y los panes de la proposición; el cual se llama el lugar santo. Y después del segundo velo, el tabernáculo que se llama el lugar santísimo: que contenía el incensario de oro y el arca del pacto, cubierta toda en derredor de oro, en la cual estaba el vaso de oro que contenía el maná, y la vara de Aarón que floreció, y las tablas del pacto; y sobre ella, los querubines de gloria, que hacían sombra al propiciatorio”. Hebreos 9:1-5 (VM). 

El santuario al cual se refiere aquí San Pablo era el tabernáculo construído por Moisés a la orden de Dios como morada terrenal del Altísimo. “Me harán un santuario, para que yo habite en medio de ellos” (Éxodo 25:8, VM), había sido la orden dada a Moisés mientras estaba en el monte con Dios. Los israelitas estaban peregrinando por el desierto, y el tabernáculo se preparó de modo que pudiese ser llevado de un lugar a otro; no obstante era una construcción de gran magnificencia. Sus paredes consistían en tablones ricamente revestidos de oro y asegurados en basas de plata, mientras que el techo se componía de una serie de cortinas o cubiertas, las de fuera de pieles, y las interiores de lino fino magníficamente recamado con figuras de querubines. A más del atrio exterior, donde se encontraba el altar del holocausto, el tabernáculo propiamente dicho consistía en dos departamentos llamados el lugar santo y el lugar santísimo, separados por rica y magnífica cortina, o velo; otro velo semejante cerraba la entrada que conducía al primer departamento. 

En el lugar santo se encontraba hacia el sur el candelabro, con sus siete lámparas que alumbraban el santuario día y noche; hacia el norte estaba la mesa de los panes de la proposición; y ante el velo que separaba el lugar santo del santísimo estaba el altar de oro para el incienso, del cual ascendía diariamente a Dios una nube de sahumerio junto con las oraciones de Israel. 

En el lugar santísimo se encontraba el arca, cofre de madera preciosa cubierta de oro, depósito de las dos tablas de piedra sobre las cuales Dios había grabado la ley de los Diez Mandamientos. Sobre el arca, a guisa de cubierta del sagrado cofre, estaba el propiciatorio, verdadera maravilla artística, coronada por dos querubines, uno en cada extremo y todo de oro macizo. En este departamento era donde se manifestaba la presencia divina en la nube de gloria entre los querubines. 

Después que los israelitas se hubieron establecido en Canaán el tabernáculo fue reemplazado por el templo de Salomón, el cual, aunque edificio permanente y de mayores dimensiones, conservaba las mismas proporciones y el mismo amueblado. El santuario subsistió así—menos durante el plazo en que permaneció en ruinas en tiempo de Daniel—hasta su destrucción por los romanos, en el año 70 de nuestra era. 

Tal fue el único santuario que haya existido en la tierra y del cual la Biblia nos dé alguna información. San Pablo dijo de él que era el santuario del primer pacto. ¿Pero no tiene el nuevo pacto también el suyo? 

Volviendo al libro de los Hebreos, los que buscaban la verdad encontraron que existía un segundo santuario, o sea el del nuevo pacto, al cual se alude en las palabras ya citadas del apóstol Pablo: “En verdad el primer pacto también tenía reglamentos del culto, y su santuario que lo era de este mundo”. El uso de la palabra “también” implica que San Pablo ha hecho antes mención de este santuario. Volviendo al principio del capítulo anterior, se lee: “Lo principal, pues, entre las cosas que decimos es esto: Tenemos un tal sumo sacerdote que se ha sentado a la diestra del trono de la Majestad en los cielos; ministro del santuario, y del verdadero tabernáculo, que plantó el Señor, y no el hombre”. Hebreos 8:1, 2 (VM). 

Aqui tenemos revelado el santuario del nuevo pacto. El santuario del primer pacto fue asentado por el hombre, construído por Moisés; este segundo es asentado por el Señor, no por el hombre. En aquel santuario los sacerdotes terrenales desempeñaban el servicio; en este es Cristo, nuestro gran Sumo Sacerdote, quien ministra a la diestra de Dios. Uno de los santuarios estaba en la tierra, el otro está en el cielo. 

Además, el tabernáculo construído por Moisés fue hecho según un modelo. El Señor le ordenó: “Conforme a todo lo que yo te mostrare, el diseño del tabernáculo, y el diseño de todos sus vasos, así lo haréis”. Y le mandó además: “Mira, y hazlos conforme a su modelo, que te ha sido mostrado en el monte”. Éxodo 25:9, 40. Y San Pablo dice que el primer tabernáculo “era una parábola para aquel tiempo entonces presente; conforme a la cual se ofrecían dones y sacrificios”; que sus santos lugares eran “representaciones de las cosas celestiales”; que los sacerdotes que presentaban las ofrendas según la ley, ministraban lo que era “la mera representación y sombra de las cosas celestiales”, y que “no entró Cristo en un lugar santo hecho de mano, que es una mera representación del verdadero, sino en el cielo mismo, para presentarse ahora delante de Dios por nosotros”. Hebreos 9:9, 23; 8:5; Hebreos 9:24 (VM). 

El santuario celestial, en el cual Jesús ministra, es el gran modelo, del cual el santuario edificado por Moisés no era más que trasunto. Dios puso su Espíritu sobre los que construyeron el santuario terrenal. La pericia artística desplegada en su construcción fue una manifestación de la sabiduría divina. Las paredes tenían aspecto de oro macizo, y reflejaban en todas direcciones la luz de las siete lámparas del candelero de oro. La mesa de los panes de la proposición y el altar del incienso relucían como oro bruñido. La magnífica cubierta que formaba el techo, recamada con figuras de ángeles, en azul, púrpura y escarlata, realzaba la belleza de la escena. Y más allá del segundo velo estaba la santa Shekina, la manifestación visible de la gloria de Dios, ante la cual solo el sumo sacerdote podía entrar y sobrevivir. 

El esplendor incomparable del tabernáculo terrenal reflejaba a la vista humana la gloria de aquel templo celestial donde Cristo nuestro precursor ministra por nosotros ante el trono de Dios. La morada del Rey de reyes, donde miles y miles ministran delante de él, y millones de millones están en su presencia (Daniel 7:10); ese templo, lleno de la gloria del trono eterno, donde los serafines, sus flamantes guardianes, cubren sus rostros en adoración, no podía encontrar en la más grandiosa construcción que jamás edificaran manos humanas, más que un pálido reflejo de su inmensidad y de su gloria. Con todo, el santuario terrenal y sus servicios revelaban importantes verdades relativas al santuario celestial y a la gran obra que se llevaba allí a cabo para la redención del hombre. 

Los lugares santos del santuario celestial están representados por los dos departamentos del santuario terrenal. Cuando en una visión le fue dado al apóstol Juan que viese el templo de Dios en el cielo, contempló allí “siete lámparas de fuego ardiendo delante del trono”. Apocalipsis 4:5 (VM). Vio un ángel que tenía “en su mano un incensario de oro; y le fue dado mucho incienso, para que lo añadiese a las oraciones de todos los santos, encima del altar de oro que estaba delante del trono”. Apocalipsis 8:3 (VM). Se le permitió al profeta contemplar el primer departamento del santuario en el cielo; y vio allí las “siete lámparas de fuego” y el “altar de oro” representados por el candelabro de oro y el altar de incienso en el santuario terrenal. De nuevo, “fue abierto el templo de Dios” (Apocalipsis 11:19, VM), y miró hacia adentro del velo interior, el lugar santísimo. Allí vio “el arca de su pacto”, representada por el cofre sagrado construído por Moisés para guardar la ley de Dios. 

Así fue como los que estaban estudiando ese asunto encontraron pruebas irrefutables de la existencia de un santuario en el cielo. Moisés hizo el santuario terrenal según un modelo que le fue enseñado. San Pablo declara que ese modelo era el verdadero santuario que está en el cielo. Y San Juan afirma que lo vio en el cielo. 

En el templo celestial, la morada de Dios, su trono está asentado en juicio y en justicia. En el lugar santísimo está su ley, la gran regla de justicia por la cual es probada toda la humanidad. El arca, que contiene las tablas de la ley, está cubierta con el propiciatorio, ante el cual Cristo ofrece su sangre a favor del pecador. Así se representa la unión de la justicia y de la misericordia en el plan de la redención humana. Solo la sabiduría infinita podía idear semejante unión, y solo el poder infinito podía realizarla; es una unión que llena todo el cielo de admiración y adoración. Los querubines del santuario terrenal que miraban reverentemente hacia el propiciatorio, representaban el interés con el cual las huestes celestiales contemplan la obra de redención. Es el misterio de misericordia que los ángeles desean contemplar, a saber: que Dios puede ser justo al mismo tiempo que justifica al pecador arrepentido y reanuda sus relaciones con la raza caída; que Cristo pudo humillarse para sacar a innumerables multitudes del abismo de la perdición y revestirlas con las vestiduras inmaculadas de su propia justicia, a fin de unirlas con ángeles que no cayeron jamás y permitirles vivir para siempre en la presencia de Dios. 

La obra mediadora de Cristo en favor del hombre se presenta en esta hermosa profecía de Zacarías relativa a Aquel “cuyo nombre es El Vástago”. El profeta dice: “Sí, edificará el templo de Jehová, y llevará sobre sí la gloria; y se sentará y reinará sobre su trono, siendo Sacerdote sobre su trono; y el consejo de la paz estará entre los dos”. Zacarías 6:12, 13 (VM). 

“Sí, edificará el templo de Jehová”. Por su sacrificio y su mediación, Cristo es el fundamento y el edificador de la iglesia de Dios. El apóstol Pablo le señala como “la piedra principal del ángulo: en la cual todo el edificio, bien trabado consigo mismo, va creciendo para ser un templo santo en el Señor; en quien—dice—vosotros también sois edificados juntamente, para ser morada de Dios, en virtud del Espíritu”. Efesios 2:20-22 (VM). 

“Y llevará sobre sí la gloria”. Es a Cristo a quien pertenece la gloria de la redención de la raza caída. Por toda la eternidad, el canto de los redimidos será: “A Aquel que nos ama, y nos ha lavado de nuestros pecados en su misma sangre, [...] a él sea la gloria y el dominio por los siglos de los siglos”. Apocalipsis 1:5, 6 (VM). 

“Y se sentará y reinará sobre su trono, siendo Sacerdote sobre su trono”. No todavía “sobre el trono de su gloria”; el reino de gloria no le ha sido dado aún. Solo cuando su obra mediadora haya terminado, “le dará el Señor Dios el trono de David su padre”, un reino del que “no habrá fin”. Lucas 1:32, 33. Como sacerdote, Cristo está sentado ahora con el Padre en su trono. Apocalipsis 3:21. En el trono, en compañía del Dios eterno que existe por sí mismo, está Aquel que “ha llevado nuestros padecimientos, y con nuestros dolores [...] se cargó”, quien fue “tentado en todo punto, así como nosotros, mas sin pecado”, para que pudiese “también socorrer a los que son tentados”. “Si alguno pecare, abogado tenemos para con el Padre, a saber, a Jesucristo el justo.” Isaías 53:4; Hebreos 4:15; 2:18; 1 Juan 2:1 (VM). Su intercesión es la de un cuerpo traspasado y quebrantado y de una vida inmaculada. Las manos heridas, el costado abierto, los pies desgarrados, abogan en favor del hombre caído, cuya redención fue comprada a tan infinito precio. 

“Y el consejo de la paz estará entre los dos”. El amor del Padre, no menos que el del Hijo, es la fuente de salvación para la raza perdida. Jesús había dicho a sus discípulos antes de irse: “No os digo, que yo rogaré al Padre por vosotros; pues el mismo Padre os ama”. Juan 16:26, 27. “Dios estaba en Cristo, reconciliando consigo mismo al mundo”. 2 Corintios 5:19 (VM). Y en el ministerio del santuario celestial, “el consejo de la paz estará entre los dos”. “De tal manera amó Dios al mundo, que dio a su Hijo unigénito, para que todo aquel que cree en él, no perezca, sino que tenga vida eterna”. Juan 3:16 (VM). 

Las Escrituras contestan con claridad a la pregunta: ¿Qué es el santuario? La palabra “santuario”, tal cual la usa la Biblia, se refiere, en primer lugar, al tabernáculo que construyó Moisés, como figura o imagen de las cosas celestiales; y, en segundo lugar, al “verdadero tabernáculo” en el cielo, hacia el cual señalaba el santuario terrenal. Muerto Cristo, terminó el ritual típico. El “verdadero tabernáculo” en el cielo es el santuario del nuevo pacto. Y como la profecía de Daniel 8:14 se cumple en esta dispensación, el santuario al cual se refiere debe ser el santuario del nuevo pacto. Cuando terminaron los 2.300 días, en 1844, hacía muchos siglos que no había santuario en la tierra. De manera que la profecía: “Hasta dos mil y trescientas tardes y mañanas; entonces será purificado el santuario”, se refiere indudablemente al santuario que está en el cielo. 

Pero queda aún la pregunta más importante por contestar: ¿Qué es la purificación del santuario? En el Antiguo Testamento se hace mención de un servicio tal con referencia al santuario terrenal. ¿Pero puede haber algo que purificar en el cielo? En el noveno capítulo de la Epístola a los Hebreos, se menciona claramente la purificación de ambos santuarios, el terrenal y el celestial. “Según la ley, casi todas las cosas son purificadas con sangre; y sin derramamiento de sangre no hay remisión. Fue pues necesario que las representaciones de las cosas celestiales fuesen purificadas con estos sacrificios, pero las mismas cosas celestiales, con mejores sacrificios que estos” (Hebreos 9:22, 23, VM), a saber, la preciosa sangre de Cristo. 

En ambos servicios, el típico y el real, la purificación debe efectuarse con sangre; en aquel con sangre de animales; en este, con la sangre de Cristo. San Pablo dice que la razón por la cual esta purificación debe hacerse con sangre, es porque sin derramamiento de sangre no hay remisión. La remisión, o sea el acto de quitar los pecados, es la obra que debe realizarse. ¿Pero como podía relacionarse el pecado con el santuario del cielo o con el de la tierra? Puede saberse esto estudiando el servicio simbólico, pues los sacerdotes que oficiaban en la tierra, ministraban “lo que es la mera representación y sombra de las cosas celestiales”. Hebreos 8:5 (VM). 

El servicio del santuario terrenal consistía en dos partes; los sacerdotes ministraban diariamente en el lugar santo, mientras que una vez al año el sumo sacerdote efectuaba un servicio especial de expiación en el lugar santísimo, para purificar el santuario. Día tras día el pecador arrepentido llevaba su ofrenda a la puerta del tabernáculo, y poniendo la mano sobre la cabeza de la víctima, confesaba sus pecados, transfiriéndolos así figurativamente de sí mismo a la víctima inocente. Luego se mataba el animal. “Sin derramamiento de sangre”, dice el apóstol, no hay remisión de pecados. “La vida de la carne en la sangre está”. Levítico 17:11. La ley de Dios quebrantada exigía la vida del transgresor. La sangre, que representaba la vida comprometida del pecador, cuya culpa cargaba la víctima, la llevaba el sacerdote al lugar santo y la salpicaba ante el velo, detrás del cual estaba el arca que contenía la ley que el pecador había transgredido. Mediante esta ceremonia, el pecado era transferido figurativamente, por intermedio de la sangre, al santuario. En ciertos casos, la sangre no era llevada al lugar santo; pero el sacerdote debía entonces comer la carne, como Moisés lo había mandado a los hijos de Aarón, diciendo: “Dióla él a vosotros para llevar la iniquidad de la congregación”. Levítico 10:17. Ambas ceremonias simbolizaban por igual la transferencia del pecado del penitente al santuario. 

Tal era la obra que se llevaba a cabo día tras día durante todo el año. Los pecados de Israel eran transferidos así al santuario, y se hacía necesario un servicio especial para eliminarlos. Dios mandó que se hiciera una expiación por cada uno de los departamentos sagrados. “Así hará expiación por el santuario, a causa de las inmundicias de los hijos de Israel y de sus transgresiones, con motivo de todos sus pecados. Y del mismo modo hará con el tabernáculo de reunión, que reside con ellos, en medio de sus inmundicias”. Debía hacerse también una expiación por el altar: “Lo purificará y lo santificará, a causa de las inmundicias de los hijos de Israel”. Levítico 16:16, 19 (VM). 

Una vez al año, en el gran día de las expiaciones, el sacerdote entraba en el lugar santísimo para purificar el santuario. El servicio que se realizaba allí completaba la serie anual de los servicios. En el día de las expiaciones se llevaban dos machos cabríos a la entrada del tabernáculo y se echaban suertes sobre ellos, “la una suerte para Jehová y la otra para Azazel”. Vers. 8. El macho cabrío sobre el cual caía la suerte para Jehová debía ser inmolado como ofrenda por el pecado del pueblo. Y el sacerdote debía llevar velo adentro la sangre de aquel y rociarla sobre el propiciatorio y delante de él. También había que rociar con ella el altar del incienso, que se encontraba delante del velo. 

“Y pondrá Aarón entrambas manos sobre la cabeza del macho cabrío vivo, y confesará sobre él todas las iniquidades de los hijos de Israel, y todas sus transgresiones, a causa de todos sus pecados, cargándolos así sobre la cabeza del macho cabrío, y le enviará al desierto por mano de un hombre idóneo. Y el macho cabrío llevará sobre sí las iniquidades de ellos a tierra inhabitada”. Levítico 16:21, 22 (VM). El macho cabrío emisario no volvía al real de Israel, y el hombre que lo había llevado afuera debía lavarse y lavar sus vestidos con agua antes de volver al campamento. 

Toda la ceremonia estaba destinada a inculcar a los israelitas una idea de la santidad de Dios y de su odio al pecado; y además hacerles ver que no podían ponerse en contacto con el pecado sin contaminarse. Se requería de todos que afligiesen sus almas mientras se celebraba el servicio de expiación. Toda ocupación debía dejarse a un lado, y toda la congregación de Israel debía pasar el día en solemne humillación ante Dios, con oración, ayuno y examen profundo del corazón. 

El servicio típico enseña importantes verdades respecto a la expiación. Se aceptaba un substituto en lugar del pecador; pero la sangre de la víctima no borraba el pecado. Solo proveía un medio para transferirlo al santuario. Con la ofrenda de sangre, el pecador reconocía la autoridad de la ley, confesaba su culpa, y expresaba su deseo de ser perdonado mediante la fe en un Redentor por venir; pero no estaba aún enteramente libre de la condenación de la ley. El día de la expiación, el sumo sacerdote, después de haber tomado una víctima ofrecida por la congregación, iba al lugar santísimo con la sangre de dicha víctima y rociaba con ella el propiciatorio, encima mismo de la ley, para dar satisfacción a sus exigencias. Luego, en calidad de mediador, tomaba los pecados sobre sí y los llevaba fuera del santuario. Poniendo sus manos sobre la cabeza del segundo macho cabrío, confesaba sobre él todos esos pecados, transfiriéndolos así figurativamente de él al macho cabrío emisario. Este los llevaba luego lejos y se los consideraba como si estuviesen para siempre quitados y echados lejos del pueblo. 

Tal era el servicio que se efectuaba como “mera representación y sombra de las cosas celestiales”. Y lo que se hacía típicamente en el santuario terrenal, se hace en realidad en el santuario celestial. Después de su ascensión, nuestro Salvador empezó a actuar como nuestro Sumo Sacerdote. San Pablo dice: “No entró Cristo en un lugar santo hecho de mano, que es una mera representación del verdadero, sino en el cielo mismo, para presentarse ahora delante de Dios por nosotros”. Hebreos 9:24 (VM). 

El servicio del sacerdote durante el año en el primer departamento del santuario, “adentro del velo” que formaba la entrada y separaba el lugar santo del atrio exterior, representa la obra y el servicio a que dio principio Cristo al ascender al cielo. La obra del sacerdote en el servicio diario consistía en presentar ante Dios la sangre del holocausto, como también el incienso que subía con las oraciones de Israel. Así es como Cristo ofrece su sangre ante el Padre en beneficio de los pecadores, y así es como presenta ante él, además, junto con el precioso perfume de su propia justicia, las oraciones de los creyentes arrepentidos. Tal era la obra desempeñada en el primer departamento del santuario en el cielo. 

Hasta allí siguieron los discípulos a Cristo por la fe cuando se elevó de la presencia de ellos. Allí se concentraba su esperanza, “la cual—dice San Pablo—tenemos como ancla del alma, segura y firme, y que penetra hasta a lo que está dentro del velo; adonde, como precursor nuestro, Jesús ha entrado por nosotros, constituido sumo sacerdote para siempre”. “Ni tampoco por medio de la sangre de machos de cabrío y de terneros, sino por la virtud de su propia sangre, entró una vez para siempre en el lugar santo, habiendo ya hallado eterna redención”. Hebreos 6:19, 20; 9:12 (VM). 

Este ministerio siguió efectuándose durante dieciocho siglos en el primer departamento del santuario. La sangre de Cristo, ofrecida en beneficio de los creyentes arrepentidos, les aseguraba perdón y aceptación cerca del Padre, pero no obstante sus pecados permanecían inscritos en los libros de registro. Como en el servicio típico había una obra de expiación al fin del año, así también, antes de que la obra de Cristo para la redención de los hombres se complete, queda por hacer una obra de expiación para quitar el pecado del santuario. Este es el servicio que empezó cuando terminaron los 2.300 días. Entonces, así como lo había anunciado Daniel el profeta, nuestro Sumo Sacerdote entró en el lugar santísimo, para cumplir la última parte de su solemne obra: la purificación del santuario. 

Así como en la antigüedad los pecados del pueblo eran puestos por fe sobre la víctima ofrecida, y por la sangre de esta se transferían figurativamente al santuario terrenal, así también, en el nuevo pacto, los pecados de los que se arrepienten son puestos por fe sobre Cristo, y transferidos, de hecho, al santuario celestial. Y así como la purificación típica de lo terrenal se efectuaba quitando los pecados con los cuales había sido contaminado, así también la purificación real de lo celestial debe efectuarse quitando o borrando los pecados registrados en el cielo. Pero antes de que esto pueda cumplirse deben examinarse los registros para determinar quiénes son los que, por su arrepentimiento del pecado y su fe en Cristo, tienen derecho a los beneficios de la expiación cumplida por él. La purificación del santuario implica por lo tanto una obra de investigación, una obra de juicio. Esta obra debe realizarse antes de que venga Cristo para redimir a su pueblo, pues cuando venga, su galardón está con él, para que pueda otorgar la recompensa a cada uno según haya sido su obra. Apocalipsis 22:12. 

Así que los que andaban en la luz de la palabra profética vieron que en lugar de venir a la tierra al fin de los 2.300 días, en 1844, Cristo entró entonces en el lugar santísimo del santuario celestial para cumplir la obra final de la expiación preparatoria para su venida. 

Se vio además que, mientras que el holocausto señalaba a Cristo como sacrificio, y el sumo sacerdote representaba a Cristo como mediador, el macho cabrío simbolizaba a Satanás, autor del pecado, sobre quien serán colocados finalmente los pecados de los verdaderamente arrepentidos. Cuando el sumo sacerdote, en virtud de la sangre del holocausto, quitaba los pecados del santuario, los ponía sobre la cabeza del macho cabrío para Azazel. Cuando Cristo, en virtud de su propia sangre, quite del santuario celestial los pecados de su pueblo al fin de su ministerio, los pondrá sobre Satanás, el cual en la consumación del juicio debe cargar con la pena final. El macho cabrío era enviado lejos a un lugar desierto, para no volver jamás a la congregación de Israel. Así también Satanás será desterrado para siempre de la presencia de Dios y de su pueblo, y será aniquilado en la destrucción final del pecado y de los pecadores. 
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
