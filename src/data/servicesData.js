import prpImg from '../assets/imagenes/servicios/Plasma-rico-plaquetas.webp';
import hidralipsImg from '../assets/imagenes/servicios/hidralips.jpeg';
import limpiezaImg from '../assets/imagenes/servicios/limpieza.jpg';
import dermapenImg from '../assets/imagenes/servicios/dermapen.JPG';
import corporalImg from '../assets/imagenes/servicios/corporal.JPG';
import cejasImg from '../assets/imagenes/servicios/cejas.JPG';

export const servicesData = [
  {
    slug: 'plasma-rico-en-plaquetas',
    title: 'Plasma Rico en Plaquetas (PRP)',
    shortDesc: 'Bio-estimulación facial utilizando los factores de crecimiento de tu propia sangre para combatir flacidez y dar un aspecto radiante.',
    detailedDesc: 'El Plasma Rico en Plaquetas (PRP) es un tratamiento médico-estético de vanguardia que utiliza las proteínas y factores de crecimiento presentes en tu propia sangre para reparar profundamente las células de tu fisionomía. Al ser un material autólogo (tuyo propio), el riesgo de alergias es prácticamente nulo. Se indica especialmente para personas que buscan una luminosidad extrema, reducción de líneas de expresión, control de secuelas de acné y un tensado cutáneo duradero sin cirugías.',
    image: prpImg,
    icon: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>',
    benefits: ['Estimulación natural de colágeno', 'Recuperación de la firmeza estructural', 'Tono parejo y luminoso']
  },
  {
    slug: 'hidralips',
    title: 'Hidralips',
    shortDesc: 'Revitalización profunda para unos labios con aspecto más lleno, saludable y un sutil tinte natural sin rellenos.',
    detailedDesc: 'El protocolo Hidralips está diseñado para combatir y revertir los labios resecos, pálidos y agrietados. A través de un dispositivo de microagujas indoloras, se infunden cócteles altamente concentrados de vitaminas y ácido hialurónico directamente en las capas superficiales de los labios. Esto les otorga una turgencia y definición revitalizada, junto a un sutil rubor natural continuo que elimina la necesidad del maquillaje diario, luciendo carnosos pero sin alteraciones de volumen excesivo.',
    image: hidralipsImg,
    icon: '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>',
    benefits: ['Hidratación prolongada', 'Eliminación del aspecto agrietado', 'Color uniforme y natural']
  },
  {
    slug: 'limpieza-facial-profunda',
    title: 'Limpieza Facial Profunda',
    shortDesc: 'Renovación celular intensiva que elimina impurezas, puntos negros y devuelve a tu rostro una apariencia fina y oxigenada.',
    detailedDesc: 'Toda transformación estética comienza por una estructura limpia. Nuestro circuito de Limpieza Facial Profunda va más allá de un cuidado básico; incluye una combinación de extracción clínica, aparatología ultrasónica para retirar micro-impurezas y terapia nutritiva calmante. Es el abordaje principal para eliminar radicales libres, puntos negros y regular el sebo. Tu piel volverá a respirar, logrando así que todos los cosméticos o procesos posteriores tengan una penetración y éxito del 100%.',
    image: limpiezaImg,
    icon: '<path d="M12 2.04v.02c-4.43.43-8 4.19-8 8.64 0 4.78 3.89 8.66 8.68 8.66 1.48 0 2.87-.37 4.08-1.01l-1.54-2.67c-.77.39-1.63.61-2.54.61-3.13 0-5.68-2.54-5.68-5.66 0-3.12 2.55-5.66 5.68-5.66 2.04 0 3.84 1.07 4.85 2.68l2.58-1.5c-1.39-2.31-3.92-3.87-6.9-4.11zm5.34 7.64l-2.07 3.58a5.612 5.612 0 01-3.23 2.15l-1.54-2.67c.72-.42 1.34-1 1.83-1.69l3.58-2.07c.39.2.82.46 1.43.7z"/>',
    benefits: ['Apertura y limpieza de poros obstruidos', 'Oxigenación del sistema microvascular', 'Dermis lisa y receptiva']
  },
  {
    slug: 'hidratacion-dermapen',
    title: 'Hidratación con Dermapen',
    shortDesc: 'Terapia que induce colágeno y penetra activos puros para reparar estrías cutáneas, arrugas y unificar tonos.',
    detailedDesc: 'El microneedling avanzado (Dermapen) es considerado el gold-standard de la dermatología estética para forzar a la piel a reconstruirse por sí misma a través de micro-punciones controladas. Durante este proceso, abrimos miles canales que son aprovechados para suministrar vitaminas, factores tensores y ácido hialurónico hasta la dermis media. Se logran de esta manera cambios drásticos en la reducción de cicatrices, manchas del sol o melasmas, y una reducción notable en arrugas periorbitales funcionales.',
    image: dermapenImg,
    icon: '<path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>',
    benefits: ['Neo-producción sistémica de colágeno', 'Minimización de cicatrices de acné', 'Mejora general en la textura de la apariencia facial']
  },
  {
    slug: 'tratamiento-corporal',
    title: 'Tratamiento Corporal',
    shortDesc: 'Moldeamiento y reducción personalizadas. Tratamos grasa localizada y flacidez mediante aparatología para lograr siluetas armónicas.',
    detailedDesc: 'Nuestra rama de Tratamientos Corporales ofrece soluciones especializadas destinadas a esculpir las zonas más desafiantes de tu silueta corporal que a veces no responden solo a dietas o ejercicios. Mezclando terapias comprobadas científicamente (como láseres de diodo y radiofrecuencia fraccionada), estimulamos el drenaje de células adiposas, y tensamos los tabiques que causan irregularidades como la celulitis. Todo desde un acercamiento clínico seguro que fortalece tu musculatura superficial logrando que tu cuerpo acompañe tu ritmo vital de bienestar.',
    image: corporalImg,
    icon: '<path d="M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69l1.31-5.24C10.43 14.18 10 13.14 10 12c0-1.1.9-2 2-2s2 .9 2 2c0 1.14-.43 2.18-1 2.45l1.31 5.24C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9z"/>',
    benefits: ['Reducción de medidas localizadas', 'Tensado de piel laxa en flancos o abdomen', 'Drenaje linfático y reactivación circulatoria']
  },
  {
    slug: 'cejas-y-pestanas',
    title: 'Cejas y Pestañas',
    shortDesc: 'Arquitectura para enmarcar tu mirada. Lifting y laminado profesional que realzan el marco principal de tu rostro.',
    detailedDesc: 'Tus ojos son el ancla principal de tu apariencia facial. El diseño personalizado mediante el servicio de visagismo de cejas y el lifting biológico de pestañas nos garantiza la correcta armonización para potenciar tu belleza de forma sutil pero impactante. Al emplear la técnica de laminado y lifting nutricional de alto nivel logramos darle dirección ascendente, longitud y orden a toda la mirada, corrigiendo asimetrías para presentarte tal y como mereces ante el mundo, conservando la naturalidad en cada fibra capilar implicada.',
    image: cejasImg,
    icon: '<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>',
    benefits: ['Definición prolongada del arco de las cejas', 'Aumento en longitud percibida de pestañas', 'Resultados inmediatos sin tiempos de espera prolongados']
  }
];
