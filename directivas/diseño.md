# Diseño — Go Essence

> Completa este archivo con las directivas de diseño antes de iniciar el desarrollo.

Para cumplir con la directriz de elegancia y evitar saturación visual, el diseño de la interfaz de usuario (UI) empleará ángulos rectos (border-radius: 0px) en todos los contenedores, botones e imágenes. Esto proyecta una imagen clínica, sofisticada y moderna, diferenciándose de estéticas genéricas. La paleta de colores utilizará el beige (#F0E0C7) como fondo principal, textos oscuros en tono cobre (#6B2F1E) y acentos interactivos en cobres medios (#934829 y #AF7127)
.
Las tipografías serán Kymer Awon para los títulos (aportando el peso clásico y elegante) y Satoshi Light para los párrafos, garantizando legibilidad y minimalismo
.
Header
Diseño: Fondo sólido en #F0E0C7. Logotipo centrado o alineado a la izquierda. Enlaces de navegación con tipografía Satoshi Light. El botón de agendamiento será un rectángulo perfecto con fondo #934829 y texto en #F0E0C7.
GSAP: ScrollTrigger básico para ocultar el header al hacer scroll hacia abajo (yPercent: -100) y revelarlo al hacer scroll hacia arriba, utilizando ease: "power2.out", duration: 0.4.
Hero
Diseño: Fotografía a pantalla completa de alta estética (como las del moodboard de marca que muestran limpieza facial
), con un velo o capa superpuesta (overlay) en color #6B2F1E al 40% de opacidad para permitir la lectura del título en color beige.
GSAP: Animación de carga inicial. La imagen de fondo tendrá un efecto de escalado muy sutil e imperceptible (scale: 1.05 a 1, duration: 3, ease: "sine.out"). El título y el botón entrarán con gsap.from({y: 30, opacity: 0, duration: 1.2, stagger: 0.2}).
About Us
Diseño: Layout de dos columnas. Imagen a la izquierda (rectángulo perfecto) y bloque de texto a la derecha alineado al centro vertical. Fondo #F0E0C7. Se integrará la iconografía lineal de la flor de loto
 como marca de agua sutil detrás del texto.
GSAP: Al entrar en el viewport, la imagen se revela con un efecto de cortina utilizando clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%) animando desde polygon(0 0, 0 0, 0 100%, 0 100%).
Features
Diseño: Basado en los wireframes de características
. Un contenedor superior con texto y una cuadrícula inferior de tres columnas. Fondo en #F0E0C7. Se utilizarán íconos con estilo de línea fina en color #AF7127
. Ningún contenedor tendrá bordes, se utilizará el espacio negativo y líneas divisorias muy finas (border-left: 1px solid #9B7A73) para separar las columnas.
GSAP: Animación en cascada de los íconos y textos al hacer scroll. gsap.from(".feature-item", {y: 20, opacity: 0, duration: 0.8, stagger: 0.15, ScrollTrigger: { trigger: ".features-section", start: "top 80%" }}).
Services
Diseño: Retícula de tarjetas estilo catálogo clínico, tal como se muestra en el wireframe
. Cada tarjeta será un bloque rectangular perfecto con la imagen en la parte superior, título, precio inicial ("Desde $X"), viñetas con los beneficios y enlace "Saber más". En las esquinas superiores de las imágenes se colocará una etiqueta rectangular pequeña indicando la categoría (Facial, Corporal, Protocolos).
GSAP: Interacción hover estricta y elegante. Al pasar el cursor sobre la tarjeta, la imagen interna hará un zoom ligero (scale: 1.03, duration: 0.5) sin salirse del contenedor (overflow: hidden). El fondo de la tarjeta pasará de #F0E0C7 a blanco puro para destacarse sutilmente.
Testimonials
Diseño: Fondo oscuro en #6B2F1E para crear contraste
. Tres bloques rectangulares alineados horizontalmente, tal como en el wireframe
. Las estrellas de calificación se mostrarán en tono #AF7127. El texto del testimonio irá en cursiva (Satoshi Light Italic).
GSAP: Carrusel horizontal sutil anclado al scroll. Usaremos ScrollTrigger para desplazar el contenedor de los testimonios ligeramente en el eje X a medida que el usuario baja por la página, creando una sensación de lectura fluida sin animaciones invasivas.
CTA (Call to Action)
Diseño: Siguiendo el wireframe
, un gran bloque rectangular (sin bordes redondeados) con un gradiente oscuro muy elegante que oscile entre #6B2F1E y un negro cobrizo. El formulario constará de campos de entrada con fondo semitransparente, bordes rectos y tipografía blanca.
Desarrollo (WhatsApp Integration): El botón "Solicitar mi valoración" tendrá un evento de JavaScript que recopilará los valores de los inputs. Mediante encodeURIComponent, se construirá una URL dinámica: https://wa.me/573147138877?text=Hola, mi nombre es [Nombre]. Estoy interesado/a en el tratamiento [Tratamiento]. Mi correo es [Correo]. Me gustaría agendar una valoración.. Al hacer clic, abrirá una nueva pestaña directamente al WhatsApp de la clínica.
Footer
Diseño: Sección completamente separada del CTA mediante un salto visual al color beige natural (#F0E0C7). Tipografía pequeña y sobria. Logotipo monocromático en cobre
.
GSAP: Sin animaciones para esta sección. Prioridad a la accesibilidad estática y lectura inmediata de los datos de contacto y enlaces legales.


