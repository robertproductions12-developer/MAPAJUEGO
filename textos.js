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
{ n:"VISIÓN", ref:"Apocalipsis 1", video:"videos/nivel1.mp4",
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

Capítulo 22—Una amonestación rechazada
Al predicar la doctrina del segundo advenimiento, Guillermo Miller y sus colaboradores no tuvieron otro propósito que el de estimular a los hombres para que se preparasen para el juicio. Habían procurado despertar a los creyentes religiosos que hacían profesión de cristianismo y hacerles comprender la verdadera esperanza de la iglesia y la necesidad que tenían de una experiencia cristiana más profunda; trabajaron además para hacer sentir a los inconversos su deber de arrepentirse y de convertirse a Dios inmediatamente. “No trataron de convertir a los hombres a una secta ni a un partido religioso. De aquí que trabajasen entre todos los partidos y sectas, sin entremeterse en su organización ni disciplina”. 

Miller aseveró: “En todas mis labores nunca abrigué el deseo ni el pensamiento de fomentar interés distinto del de las denominaciones existentes, ni de favorecer a una a expensas de otra. Pensé en ser útil a todas. Suponiendo que todos los cristianos se regocijarían en la perspectiva de la venida de Cristo, y que aquellos que no pudiesen ver las cosas como yo no dejarían por eso de amar a los que aceptasen esta doctrina, no me figuré que habría jamás necesidad de tener reuniones distintas. Mi único objeto era el deseo de convertir almas a Dios, de anunciar al mundo el juicio venidero e inducir a mis semejantes a que hiciesen la preparación de corazón que les permitirá ir en paz al encuentro de su Dios. La gran mayoría de los que fueron convertidos por medio de mi ministerio se unieron a las diversas iglesias existentes”. Bliss, 328. 

Como su obra tendía a la edificación de las iglesias, se la miró durante algún tiempo con simpatía. Pero cuando los ministros y los directores de aquellas se declararon contra la doctrina del advenimiento y quisieron sofocar el nuevo movimiento, no solo se opusieron a ella desde el púlpito, sino que además negaron a sus miembros el derecho de asistir a predicaciones sobre ella y hasta de hablar de sus esperanzas en las reuniones de edificación mutua en la iglesia. Así se vieron reducidos los creyentes a una situación crítica que les causaba perplejidad. Querían a sus iglesias y les repugnaba separarse de ellas; pero al ver que se anulaba el testimonio de la Palabra de Dios, y que se les negaba el derecho que tenían para investigar las profecías, sintieron que la lealtad hacia Dios les impedía someterse. No podían considerar como constituyendo la iglesia de Cristo a los que trataban de rechazar el testimonio de la Palabra de Dios, “columna y apoyo de la verdad”. De ahí que se sintiesen justificados para separarse de la que hasta entonces fuera su comunión religiosa. En el verano de 1844 cerca de cincuenta mil personas se separaron de las iglesias. 

Por aquel tiempo se advirtió un cambio notable en la mayor parte de las iglesias de los Estados Unidos de Norteamérica. Desde hacía muchos años venía observándose una conformidad cada vez mayor con las prácticas y costumbres mundanas, y una decadencia correspondiente en la vida espiritual; pero en aquel año se notó repentinamente una decadencia aún más acentuada en casi todas las iglesias del país. Aunque nadie parecía capaz de indicar la causa de ella, el hecho mismo fue muy notado y comentado, tanto por la prensa como desde el púlpito. 

En una reunión del presbiterio de Filadelfia, el Sr. Barnes, autor de un comentario de uso muy general, y pastor de una de las principales iglesias de dicha ciudad, “declaró que ejercía el ministerio desde hacía veinte años, y que nunca antes de la última comunión había administrado la santa cena sin recibir muchos o pocos nuevos miembros en la iglesia. Pero ahora, añadía, no hay despertamientos, ni conversiones, ni mucho aparente crecimiento en la gracia en los que hacen profesión de religión, y nadie viene más a su despacho para conversar acerca de la salvación de sus almas. Con el aumento de los negocios y las perspectivas florecientes del comercio y de las manufacturas, ha aumentado también el espíritu mundano. Y esto sucede en todas las denominaciones”. Congregational Journal, 23 de mayo de 1844. 

En el mes de febrero del mismo año, el profesor Finney, del colegio de Oberlin, dijo: “Hemos podido comprobar el hecho de que en general las iglesias protestantes de nuestro país, han sido o apáticas u hostiles con respecto a casi todas las reformas morales de la época. Existen excepciones parciales, pero no las suficientes para impedir que el hecho sea general. Tenemos además otro hecho más que confirma lo dicho y es la falta casi universal de influencias reavivadoras en las iglesias. La apatía espiritual lo penetra casi todo y es por demás profunda; así lo atestigua la prensa religiosa de todo el país [...]. De modo muy general, los miembros de las iglesias se están volviendo esclavos de la moda, se asocian con los impíos en diversiones, bailes, festejos, etc. [...]. Pero no necesitamos extendernos largamente sobre tan doloroso tema. Basta con que las pruebas aumenten y nos abrumen para demostrarnos que las iglesias en general están degenerando de un modo que da pena. Se han alejado muchísimo de Dios, y él se ha alejado de ellas”. 

Y un escritor declaraba en el Religious Telescope, conocido periódico religioso: “Jamás habíamos presenciado hasta ahora un estado de decadencia semejante al de la actualidad. En verdad que la iglesia debería despertar y buscar la causa de este estado aflictivo; pues tal debe ser para todo aquel que ama a Sión. Cuando recordamos cuán pocos son los casos de verdadera conversión, y la impenitencia sin igual y la dureza de los pecadores, exclamamos casi involuntariamente: ‘¿Se ha olvidado Dios de tener misericordia? o está cerrada la puerta de la gracia?’” 

Tal condición no existe nunca sin que la iglesia misma tenga la culpa. Las tinieblas espirituales que caen sobre las naciones, sobre las iglesias y sobre los individuos, no se deben a un retraimiento arbitrario de la gracia divina por parte de Dios, sino a la negligencia o al rechazamiento de la luz divina por parte de los hombres. Ejemplo sorprendente de esta verdad lo tenemos en la historia del pueblo judío en tiempo de Cristo. Debido a su apego al mundo y al olvido de Dios y de su Palabra, el entendimiento de este pueblo se había oscurecido y su corazón se había vuelto mundano y sensual. Así permaneció en la ignorancia respecto al advenimiento del Mesías, y en su orgullo e incredulidad rechazó al Redentor. Pero ni aun entonces Dios privó a la nación judía de conocer o participar en las bendiciones de la salvación. Pero los que rechazaron la verdad perdieron todo deseo de obtener el don del cielo. Ellos habían hecho “de la luz tinieblas, y de las tinieblas luz” hasta que la luz que había en ellos se volvió tinieblas; y ¡cuán grandes fueron aquellas tinieblas! 

Conviene a la política de Satanás que los hombres conserven las formas de religión, con tal que carezcan de piedad vital. Después de haber rechazado el evangelio, los judíos siguieron conservando ansiosamente sus antiguos ritos, y guardaron intacto su exclusivismo nacional, mientras que ellos mismos no podían menos que confesar que la presencia de Dios ya no se manifestaba más entre ellos. 

La profecía de Daniel señalaba de modo tan exacto el tiempo de la venida del Mesías y predecía tan a las claras su muerte, que ellos trataban de desalentar el estudio de ella, y finalmente los rabinos pronunciaron una maldición sobre todos los que intentaran computar el tiempo. En su obcecación e impenitencia, el pueblo de Israel ha permanecido durante mil ochocientos años indiferente a los ofrecimientos de salvación gratuita, así como a las bendiciones del evangelio, de modo que constituye una solemne y terrible advertencia del peligro que se corre al rechazar la luz del cielo. 

Dondequiera que esta causa exista, seguirán los mismos resultados. Quien deliberadamente mutila su conciencia del deber porque ella está en pugna con sus inclinaciones, acabará por perder la facultad de distinguir entre la verdad y el error. 

La inteligencia se entenebrece, la conciencia se insensibiliza, el corazón se endurece, y el alma se aparta de Dios. Donde se desdeña o se desprecia la verdad divina, la iglesia se verá envuelta en tinieblas; la fe y el amor se enfriarán, y entrarán el desvío y la disensión. Los miembros de las iglesias concentran entonces sus intereses y energías en asuntos mundanos, y los pecadores se endurecen en su impenitencia. 

El mensaje del primer ángel en el capítulo 14 del Apocalipsis, que anuncia la hora del juicio de Dios y que exhorta a los hombres a que le teman y adoren, tenía por objeto separar de las influencias corruptoras del mundo al pueblo que profesaba ser de Dios y despertarlo para que viera su verdadero estado de mundanalidad y apostasía. Con este mensaje Dios había enviado a la iglesia un aviso que, de ser aceptado, habría curado los males que la tenían apartada de él. Si los cristianos hubiesen recibido el mensaje del cielo, humillándose ante el Señor y tratando sinceramente de prepararse para comparecer ante su presencia, el Espíritu y el poder de Dios se habrían manifestado entre ellos. La iglesia habría vuelto a alcanzar aquel bendito estado de unidad, fe y amor que existía en tiempos apostólicos, cuando “la muchedumbre de los creyentes era de un mismo corazón y de una misma alma”, y “hablaron la Palabra de Dios con denuedo”, cuando “el Señor añadía a la iglesia los salvados, de día en día”. Hechos 4:32, 31; 2:47 (VM). 

Si los que profesan pertenecer a Dios recibiesen la luz tal cual brilla sobre ellos al dimanar de su Palabra, alcanzarían esa unidad por la cual oró Cristo y que el apóstol describe como “la unidad del Espíritu en el vínculo de la paz”. “Hay—dice—un mismo cuerpo, y un mismo espíritu, así como fuisteis llamados en una misma esperanza de vuestra vocación; un mismo Señor, una misma fe, un mismo bautismo”. Efesios 4:3-5 (VM). 

Tales fueron los resultados benditos experimentados por los que aceptaron el mensaje del advenimiento. Provenían de diferentes denominaciones, y sus barreras confesionales cayeron al suelo; los credos opuestos se hicieron añicos; la esperanza antibíblica de un milenio temporal fue abandonada, las ideas erróneas sobre el segundo advenimiento fueron enmendadas, el orgullo y la conformidad con el mundo fueron extirpados; los agravios fueron reparados; los corazones se unieron en la más dulce comunión, y el amor y el gozo reinaban por encima de todo. Si esta doctrina lo hizo para los pocos que la recibieron, habría hecho lo mismo para todos, si todos la hubiesen aceptado. 

Pero las iglesias en general no aceptaron la amonestación. Sus ministros que, como centinelas “a la casa de Israel”, hubieran debido ser los primeros en discernir las señales de la venida de Jesús, no habían aprendido la verdad, fuese por el testimonio de los profetas o por las señales de los tiempos. Como las esperanzas y ambiciones mundanas llenaban su corazón, el amor a Dios y la fe en su Palabra se habían enfriado, y cuando la doctrina del advenimiento fue presentada, solo despertó sus prejuicios e incredulidad. La circunstancia de ser predicado el mensaje mayormente por laicos, se presentaba como argumento desfavorable. Como antiguamente, se oponían al testimonio claro de la Palabra de Dios con la pregunta: “¿Ha creído en él alguno de los príncipes, o de los fariseos?” Y al ver cuán difícil era refutar los argumentos sacados de los pasajes proféticos, muchos dificultaban el estudio de las profecías, enseñando que los libros proféticos estaban sellados y que no se podían entender. Multitudes que confiaban implícitamente en sus pastores, se negaron a escuchar el aviso, y otros, aunque convencidos de la verdad, no se atrevían a proclamarlo para “no ser echados de la sinagoga”. El mensaje que Dios había enviado para probar y purificar la iglesia reveló con exagerada evidencia cuán grande era el número de los que habían concentrado sus afectos en este mundo más bien que en Cristo. Los lazos que los unían a la tierra eran más fuertes que los que les atraían hacia el cielo. Prefirieron escuchar la voz de la sabiduría humana y no hicieron caso del mensaje de verdad destinado a escudriñar los corazones. 

Al rechazar la amonestación del primer ángel, rechazaron los medios que Dios había provisto para su redención. Despreciaron al mensajero misericordioso que habría enmendado los males que los separaban de Dios, y con mayor ardor volvieron a buscar la amistad del mundo. Tal era la causa del terrible estado de mundanalidad, apostasía y muerte espiritual que imperaba en las iglesias en 1844. 

En el capítulo 14 de Apocalipsis, el primer ángel es seguido de otro que dice: “¡Caída, caída es la gran Babilonia, la cual ha hecho que todas las naciones beban del vino de la ira de su fornicación!” Apocalipsis 14:8 (VM). La palabra “Babilonia” deriva de “Babel” y significa confusión. Se emplea en las Santas Escrituras para designar las varias formas de religiones falsas y apóstatas. En el capítulo 17 del Apocalipsis, Babilonia está simbolizada por una mujer, figura que se emplea en la Biblia para representar una iglesia; siendo una mujer virtuosa símbolo de una iglesia pura, y una mujer vil, de una iglesia apóstata. 

En la Biblia, el carácter sagrado y permanente de la relación que existe entre Cristo y su iglesia está representado por la unión del matrimonio. El Señor se ha unido con su pueblo en alianza solemne, prometiendo él ser su Dios, y el pueblo a su vez comprometiéndose a ser suyo y solo suyo. Dios dice: “Te desposaré conmigo para siempre: sí, te desposaré conmigo en justicia, y en rectitud, y en misericordia, y en compasiones”. Oseas 2:19 (VM). Y también: “Yo soy vuestro esposo”. Jeremías 3:14. Y San Pablo emplea la misma figura en el Nuevo Testamento cuando dice: “Os he desposado a un marido, para presentaros como una virgen pura a Cristo”. 2 Corintios 11:2. 

La infidelidad a Cristo de que la iglesia se hizo culpable al dejar enfriarse la confianza y el amor que a él le unieran, y al permitir que el apego a las cosas mundanas llenase su alma, es comparada a la violación del voto matrimonial. El pecado que Israel cometió al apartarse del Señor está representado bajo esta figura; y el amor maravilloso de Dios que ese pueblo despreció, está descrito de modo conmovedor: “Te di juramento y entré en pacto contigo, dice Jehová el Señor; y viniste a ser mía”. “Y fuiste sumamente hermosa, y prosperaste hasta llegar a dignidad real. Y salió tu renombre entre las naciones, en atención a tu hermosura, la cual era perfecta, a causa de mis adornos que yo había puesto sobre ti [...]. Mas pusiste tu confianza en tu hermosura, y te prostituiste a causa de tu renombre”. “Así como una mujer es desleal a su marido, así vosotros habéis sido desleales para conmigo, oh casa de Israel, dice Jehová”. “¡Ah, mujer adúltera, que en vez de tu marido admites los extraños!” Ezequiel 16:8, 13-15, 32; Jeremías 3:20 (VM). 

En el Nuevo Testamento se hace uso de un lenguaje muy parecido para con los cristianos profesos que buscan la amistad del mundo más que el favor de Dios. El apóstol Santiago dice: “¡Almas adúlteras! ¿no sabéis acaso que la amistad del mundo es enemistad contra Dios? Aquel pues que quisiere ser amigo del mundo, se hace enemigo de Dios”. Santiago 4:4 (VM). 

La mujer Babilonia de Apocalipsis 17 está descrita como “vestida de púrpura y escarlata, y adornada de oro y piedras preciosas y perlas, teniendo en su mano un cáliz de oro, lleno de abominaciones, es decir, las inmundicias de sus fornicaciones; y en su frente tenía un nombre escrito: Misterio: Babilonia la grande, madre de las rameras”. El profeta dice: “Vi a aquella mujer embriagada de la sangre de los santos, y de la sangre de los mártires de Jesús”. Se declara además que Babilonia “es aquella gran ciudad, la cual tiene el imperio sobre los reyes de la tierra”. Apocalipsis 17:4-6, 18 (VM). La potencia que por tantos siglos dominó con despotismo sobre los monarcas de la cristiandad, es Roma. La púrpura y la escarlata, el oro y las piedras preciosas y las perlas describen como a lo vivo la magnificencia y la pompa más que reales de que hacía gala la arrogante sede romana. Y de ninguna otra potencia se podría decir con más propiedad que estaba “embriagada de la sangre de los santos” que de aquella iglesia que ha perseguido tan cruelmente a los discípulos de Cristo. Se acusa además a Babilonia de haber tenido relaciones ilícitas con “los reyes de la tierra”. Por su alejamiento del Señor y su alianza con los paganos la iglesia judía se transformó en ramera; Roma se corrompió de igual manera al buscar el apoyo de los poderes mundanos, y por consiguiente recibe la misma condenación. 

Se dice que Babilonia es “madre de las rameras”. Sus hijas deben simbolizar las iglesias que se atienen a sus doctrinas y tradiciones, y siguen su ejemplo sacrificando la verdad y la aprobación de Dios, para formar alianza ilícita con el mundo. El mensaje de Apocalipsis 14, que anuncia la caída de Babilonia, debe aplicarse a comunidades religiosas que un tiempo fueron puras y luego se han corrompido. En vista de que este mensaje sigue al aviso del juicio, debe ser proclamado en los últimos días, y no puede por consiguiente referirse solo a la iglesia romana, pues dicha iglesia está en condición caída desde hace muchos siglos. Además, en el capítulo 18 del Apocalipsis se exhorta al pueblo de Dios a que salga de Babilonia. Según este pasaje de la Escritura, muchos del pueblo de Dios deben estar aún en Babilonia. ¿Y en qué comunidades religiosas se encuentra actualmente la mayoría de los discípulos de Cristo? Sin duda alguna, en las varias iglesias que profesan la fe protestante. Al nacer, esas iglesias se decidieron noblemente por Dios y la verdad, y la bendición divina las acompañó. Aun el mundo incrédulo se vio obligado a reconocer los felices resultados de la aceptación de los principios del evangelio. Se les aplican las palabras del profeta a Israel: “Salió tu renombre entre las naciones, en atención a tu hermosura, la cual era perfecta, a causa de mis adornos, que yo había puesto sobre ti, dice Jehová el Señor”. Pero esas iglesias cayeron víctimas del mismo deseo que causó la maldición y la ruina de Israel: el deseo de imitar las prácticas de los impíos y de buscar su amistad. “Pusiste tu confianza en tu hermosura, y te prostituiste a causa de tu renombre”. Ezequiel 16:14, 15 (VM). 

Muchas de las iglesias protestantes están siguiendo el ejemplo de Roma, y se unen inicuamente con “los reyes de la tierra”. Así obran las iglesias del estado en sus relaciones con los gobiernos seculares, y otras denominaciones en su afán de captarse el favor del mundo. Y la expresión “Babilonia”—confusión—puede aplicarse acertadamente a esas congregaciones que, aunque declaran todas que sus doctrinas derivan de la Biblia, están sin embargo divididas en un sinnúmero de sectas, con credos y teorías muy opuestos. 

Además de la unión pecaminosa con el mundo, las iglesias que se separaron de Roma presentan otras características de esta. 

Una obra católica romana arguye que “si la iglesia romana fue alguna vez culpable de idolatría con respecto a los santos, su hija, la iglesia anglicana, es igualmente culpable, pues tiene diez iglesias dedicadas a María por una dedicada a Cristo”. Dr. Challoner, The Catholic Christian Instructed, prólogo, 21, 22. 

Y el Dr. Hopkins, en un “Tratado sobre el milenio”, declara: “No hay razón para creer que el espíritu y las prácticas anticristianas se limiten a lo que se llama actualmente la iglesia romana. Las iglesias protestantes tienen en sí mucho del Anticristo, y distan mucho de haberse reformado enteramente de [...] las corrupciones e impiedades”. Samuel Hopkins, Works 2:328. 

Respecto a la separación entre la iglesia presbiteriana y la de Roma, el doctor Guthrie escribe: “Hace trescientos años que nuestra iglesia, con una Biblia abierta en su bandera y el lema ‘Escudriñad las Escrituras’ en su rollo de pergamino, salió de las puertas de Roma”. Luego hace la significativa pregunta: “¿Salió del todo de Babilonia?” Thomas Guthrie, The Gospel in Ezekiel, 237. 

“La iglesia de Inglaterra—dice Spurgeon—parece estar completamente roída por la doctrina de que la salvación se encuentra en los sacramentos; pero los disidentes parecen estar tan hondamente contaminados por la incredulidad filosófica. Aquellos de quienes esperábamos mejores cosas están apartándose unos tras otros de los fundamentos de la fe. Creo que el mismo corazón de Inglaterra está completamente carcomido por una incredulidad fatal que hasta se atreve a subir al púlpito y llamarse cristiana”. 

¿Cuál fue el origen de la gran apostasía? ¿Cómo empezó a apartarse la iglesia de la sencillez del evangelio? Conformándose a las prácticas del paganismo para facilitar a los paganos la aceptación del cristianismo. El apóstol Pablo dijo acerca de su propio tiempo: “Ya está obrando el misterio de iniquidad”. 2 Tesalonicenses 2:7. Mientras aún vivían los apóstoles, la iglesia permaneció relativamente pura. “Pero hacia fines del siglo segundo, la mayoría de las iglesias asumieron una forma nueva; la sencillez primitiva desapareció, e insensiblemente, a medida que los antiguos discípulos bajaban a la tumba, sus hijos, en unión con nuevos convertidos, [...] se adelantaron y dieron nueva forma a la causa” (Robert Robinson, Ecclesiastical Researches, capítulo 6, p. 51). Para aumentar el número de los convertidos, se rebajó el alto nivel de la fe cristiana, y el resultado fue que “una ola de paganismo anegó la iglesia, trayendo consigo sus costumbres, sus prácticas y sus ídolos”. Gavazzi, Lectures, 278. Una vez que la religión cristiana hubo ganado el favor y el apoyo de los legisladores seculares, fue aceptada nominalmente por multitudes; pero mientras estas eran cristianas en apariencia, muchos “permanecieron en el fondo paganos que seguían adorando sus ídolos en secreto” (ibíd.). 

¿No ha sucedido otro tanto en casi todas las iglesias que se llaman protestantes? Cuando murieron sus fundadores, que poseían el verdadero espíritu de reforma, sus descendientes se adelantaron y “dieron nueva forma a la causa”. Mientras se atenían ciegamente al credo de sus padres y se negaban a aceptar cualquiera verdad que fuese más allá de lo que veían, los hijos de los reformadores se alejaron mucho de su ejemplo de humildad, de abnegación y de renunciación al mundo. Así “la simplicidad primitiva desaparece”. Una ola de mundanalidad invade la iglesia “trayendo consigo sus costumbres, sus prácticas y sus ídolos”. 

¡Ay, hasta qué grado esa amistad del mundo, que es “enemistad contra Dios”, es fomentada actualmente entre los que profesan ser discípulos de Cristo! ¡Cuánto no se han alejado las iglesias nacionales de toda la cristiandad del modelo bíblico de humildad, abnegación, sencillez y piedad! Juan Wesley decía, al hablar del buen uso del dinero: “No malgastéis nada de tan precioso talento, tan solo por agradar a los ojos con superfluos y costosos atavíos o con adornos innecesarios. No gastéis parte de él adornando prolijamente vuestras casas con muebles inútiles y costosos, con cuadros costosos, pinturas y dorados [...]. No gastéis nada para satisfacer la soberbia de la vida, ni para obtener la admiración de los hombres [...]. ‘Siempre que te halagues a ti mismo, los hombres hablarán bien de ti’. Siempre que te vistas ‘de púrpura y de lino fino blanco, y tengas banquetes espléndidos todos los días, ‘no faltará quien aplauda tu elegancia, tu buen gusto, tu generosidad y tu rumbosa hospitalidad. Pero no vayas a pagar tan caros sus aplausos. Conténtate más bien con el honor que viene de Dios” (Wesley, Works, sermón 50, sobre el uso de dinero). Pero muchas iglesias actuales desprecian estas enseñanzas. 

Está de moda en el mundo hacer profesión de religión. Gobernantes, políticos, abogados, médicos y comerciantes se unen a la iglesia para asegurarse el respeto y la confianza de la sociedad, y así promover sus intereses mundanos. Tratan de cubrir todos sus procederes injustos con el manto de la religiosidad. Las diversas comunidades religiosas robustecidas con las riquezas y con la influencia de esos mundanos bautizados pujan a cual más por mayor popularidad y patrocinio. 

Iglesias magníficas, embellecidas con el más extravagante despilfarro, se yerguen en las avenidas más ricas y más pobladas. Los fieles visten con lujo y a la moda. Se pagan grandes sueldos a ministros elocuentes para que entretengan y atraigan a la gente. Sus sermones no deben aludir a los pecados populares, sino que deben ser suaves y agradables como para los oídos de un auditorio elegante. Así los pecadores del mundo son recibidos en la iglesia, y los pecados de moda se cubren con un manto de piedad. 

Hablando de la actitud actual de los profesos cristianos para con el mundo, un notable periódico profano dice: “Insensiblemente la iglesia ha seguido el espíritu del siglo, y ha adaptado sus formas de culto a las necesidades de la actualidad”. “En verdad, todo cuanto contribuye a hacer atractiva la religión, la iglesia lo emplea ahora y se vale de ello”. Y un escritor apunta, en el Independent de Nueva York, lo siguiente acerca del metodismo actual: “La línea de separación entre los piadosos y los irreligiosos desaparece en una especie de penumbra, y en ambos lados se está trabajando con empeño para hacer desaparecer toda diferencia entre su modo de ser y sus placeres”. “La popularidad de la religión tiende en gran manera a aumentar el número de los que quisieran asegurarse sus beneficios sin cumplir honradamente con los deberes de ella”. 

Howard Crosby dice: “Motivo de hondo pesar es el hecho de que la iglesia de Cristo esté cumpliendo tan mal los designios del Señor. Así como los antiguos judíos dejaron que el trato familiar con las naciones idólatras alejara sus corazones de Dios, [...] así también ahora la iglesia de Jesús, merced al falso consorcio con el mundo incrédulo, está abandonando los métodos divinos de su verdadera vida y doblegándose a las costumbres perniciosas, si bien a menudo plausibles, de una sociedad anticristiana, valiéndose de argumentos y llegando a conclusiones ajenas a la revelación de Dios y directamente opuestas a todo crecimiento en la gracia”. The Healthy Christian: An Appeal to the Church, 141, 142. 

En esta marea de mundanalidad y de afán por los placeres, el espíritu de desprendimiento y de sacrificio personal por el amor de Cristo ha desaparecido casi completamente. “Algunos de los hombres y mujeres que actúan hoy en esas iglesias aprendieron, cuando niños, a hacer sacrificios para poder dar o hacer algo por Cristo”. Pero “ahora si se necesitan fondos, [...] no hay que pedirle nada a nadie. ¡Oh no! Organícese un bazar, prepárese una representación de figuras vivas, una escena Jocosa, una comida al estilo antiguo o a la moderna, cualquier cosa para divertir a la gente”. 

El gobernador Washburn, de Wisconsin, declaró en su mensaje anual, el 9 de enero de 1873: “Parece necesario dictar una ley que obligue a cerrar las escuelas donde se forman jugadores. Se las encuentra por todas partes. Hasta se ven iglesias que (sin saberlo, indudablemente) hacen a veces la obra del diablo. Los conciertos y las representaciones de beneficio, así como las rifas, que se hacen, a veces con fines religiosos o de caridad, pero a menudo con propósitos menos dignos, loterías, premios, etc., no son sino estratagemas para recaudar dinero sin dar un valor correspondiente. No hay nada tan desmoralizador y tan embriagador, especialmente para los jóvenes, como la adquisición de dinero o de propiedad sin trabajo. Si personas respetables toman parte en esas empresas de azar y acallan su conciencia con la reflexión de que el dinero está destinado a un buen fin, nada de raro tiene que la juventud del estado caiga tan a menudo en los hábitos que con casi toda seguridad engendra la afición a los juegos de azar”. 

El espíritu de conformidad con el mundo está invadiendo las iglesias por toda la cristiandad. Robert Atkins, en un sermón predicado en Londres, pinta un cuadro sombrío del decaimiento espiritual que predomina en Inglaterra: “Los hombres verdaderamente justos están desapareciendo de la tierra, sin que a nadie se le importe algo. Los que hoy profesan religiosidad, en todas las iglesias, aman al mundo, se conforman con él, gustan de las comodidades terrenales y aspiran a los honores. Están llamados a sufrir con Cristo, pero retroceden ante el simple oprobio [...]. ¡Apostasía, apostasía, apostasía! es lo que está grabado en el frontis mismo de cada iglesia; y si lo supiesen o sintiesen, habría esperanza; pero ¡ay! lo que se oye decir, es: Rico soy, y estoy lleno de bienes, y nada me falta” (Second Advent Library, folleto no 39). 

El gran pecado de que se acusa a Babilonia es que ha hecho que “todas las naciones beban del vino de la ira de su fornicación”. Esta copa embriagadora que ofrece al mundo representa las falsas doctrinas que ha aceptado como resultado de su unión ilícita con los magnates de la tierra. La amistad con el mundo corrompe su fe, y a su vez Babilonia ejerce influencia corruptora sobre el mundo enseñando doctrinas que están en pugna con las declaraciones más claras de la Sagrada Escritura. 

Roma le negó la Biblia al pueblo y exigió que en su lugar todos aceptasen sus propias enseñanzas. La obra de la Reforma consistió en devolver a los hombres la Palabra de Dios; pero ¿ no se ve acaso que en las iglesias de hoy lo que se enseña a los hombres es a fundar su fe en el credo y en las doctrinas de su iglesia antes que en las Sagradas Escrituras? Hablando de las iglesias protestantes, Carlos Beecher dice: “Retroceden ante cualquier palabra severa que se diga contra sus credos con la misma sensibilidad con que los santos padres se habrían estremecido ante una palabra dura pronunciada contra la veneración creciente que estaban fomentando por los santos y los mártires [...]. Las denominaciones evangélicas protestantes se han atado mutuamente las manos, de tal modo que nadie puede hacerse predicador entre ellas sin haber aceptado primero la autoridad de algún libro aparte de la Biblia [...]. No hay nada de imaginario en la aseveración de que el poder del credo está ahora empezando a proscribir la Biblia tan ciertamente como lo hizo Roma, aunque de un modo más sutil” (sermón sobre la Biblia como credo suficiente, predicado en Fort Wayne, Indiana, el 22 de febrero de 1846). 

Cuando se levantan maestros verdaderos para explicar la Palabra de Dios, levántanse también hombres de saber, ministros que profesan comprender las Santas Escrituras, para denunciar la sana doctrina como si fuera herejía, alejando así a los que buscan la verdad. Si el mundo no estuviese fatalmente embriagado con el vino de Babilonia, multitudes se convencerían y se convertirían por medio del conocimiento de las verdades claras y penetrantes de la Palabra de Dios. Pero la fe religiosa aparece tan confusa y discordante que el pueblo no sabe qué creer ni qué aceptar como verdad. La iglesia es responsable del pecado de impenitencia del mundo. El mensaje del segundo ángel de Apocalipsis 14 fue proclamado por primera vez en el verano de 1844, y se aplicaba entonces más particularmente a las iglesias de los Estados Unidos de Norteamérica, donde la amonestación del juicio había sido también más ampliamente proclamada y más generalmente rechazada, y donde el decaimiento de las iglesias había sido más rápido. Pero el mensaje del segundo ángel no alcanzó su cumplimiento total en 1844. Las iglesias decayeron entonces moralmente por haber rechazado la luz del mensaje del advenimiento; pero este decaimiento no fue completo. A medida que continuaron rechazando las verdades especiales para nuestro tiempo, fueron decayendo más y más. Sin embargo aún no se puede decir: “¡Caída, caída es la gran Babilonia, la cual ha hecho que todas las naciones beban del vino de la ira de su fornicación!” Aún no ha dado de beber a todas las naciones. El espíritu de conformidad con el mundo y de indiferencia hacia las verdades que deben servir de prueba en nuestro tiempo, existe y ha estado ganando terreno en las iglesias protestantes de todos los países de la cristiandad; y estas iglesias están incluidas en la solemne y terrible amonestación del segundo ángel. Pero la apostasía aún no ha culminado. 

La Biblia declara que antes de la venida del Señor, Satanás obrará con todo poder, y con señales, y con maravillas mentirosas, y con todo el artificio de la injusticia”, y que todos aquellos que “no admitieron el amor de la verdad para” ser “salvos”, serán dejados para que reciban “la eficaz operación de error, a fin de que crean a la mentira”. 2 Tesalonicenses 2:9-11 (VM). La caída de Babilonia no será completa sino cuando la iglesia se encuentre en este estado, y la unión de la iglesia con el mundo se haya consumado en toda la cristiandad. El cambio es progresivo, y el cumplimiento perfecto de Apocalipsis 14:8 está aún reservado para lo por venir. 

A pesar de las tinieblas espirituales y del alejamiento de Dios que se observan en las iglesias que constituyen Babilonia, la mayoría de los verdaderos discípulos de Cristo se encuentran aún en el seno de ellas. Muchos de ellos no han oído nunca proclamar las verdades especiales para nuestro tiempo. No pocos están descontentos con su estado actual y tienen sed de más luz. En vano buscan el espíritu de Cristo en las iglesias a las cuales pertenecen. Como estas congregaciones se apartan más y más de la verdad y se van uniendo más y más con el mundo, la diferencia entre ambas categorías de cristianos se irá acentuando hasta quedar consumada la separación. Llegará el día en que los que aman a Dios sobre todas las cosas no podrán permanecer unidos con los que son “amadores de los placeres, más bien que amadores de Dios; teniendo la forma de la piedad, mas negando el poder de ella”. 

El capítulo 18 del Apocalipsis indica el tiempo en que, por haber rechazado la triple amonestación de Apocalipsis 14:16-12, la iglesia alcanzará el estado predicho por el segundo ángel, y el pueblo de Dios que se encontrare aún en Babilonia, será llamado a separarse de la comunión de esta. Este mensaje será el último que se dé al mundo y cumplirá su obra. Cuando los que “no creen a la verdad, sino que se complacen en la injusticia” (2 Tesalonicenses 2:12, VM), sean dejados para sufrir tremendo desengaño y para que crean a la mentira, entonces la luz de la verdad brillará sobre todos aquellos cuyos corazones estén abiertos para recibirla, y todos los hijos del Señor que quedaren en Babilonia, oirán el llamamiento: “¡Salid de ella, pueblo mío!” Apocalipsis 18:4. 

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
