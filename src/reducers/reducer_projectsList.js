import zielonka from '../assets/projects/zielonka/zielonka-1.png';
import zielonka1 from '../assets/projects/zielonka/zielonka-xl-1.png';
import zielonka2 from '../assets/projects/zielonka/zielonka-xl-2.png';
import zielonka3 from '../assets/projects/zielonka/zielonka-xl-3.png';
import zielonka4 from '../assets/projects/zielonka/zielonka-xl-4.png';

import poznanska from '../assets/projects/poznanska/poznanska-1.png';
import poznanska1 from '../assets/projects/poznanska/poznanska-xl-1.png';
import poznanska2 from '../assets/projects/poznanska/poznanska-xl-2.png';
import poznanska3 from '../assets/projects/poznanska/poznanska-xl-3.png';
import poznanska4 from '../assets/projects/poznanska/poznanska-xl-4.png';
import poznanska5 from '../assets/projects/poznanska/poznanska-xl-5.png';
import poznanska6 from '../assets/projects/poznanska/poznanska-xl-6.png';

import dlugoleka from '../assets/projects/dlugoleka/dlugoleka-1.png';
import dlugoleka1 from '../assets/projects/dlugoleka/dlugoleka-xl-1.png';
import dlugoleka2 from '../assets/projects/dlugoleka/dlugoleka-xl-2.png';
import dlugoleka3 from '../assets/projects/dlugoleka/dlugoleka-xl-3.png';
import dlugoleka4 from '../assets/projects/dlugoleka/dlugoleka-xl-4.png';

import bag from '../assets/projects/bag/bag-1.png';
import bag1 from '../assets/projects/bag/bag-xl-1.png';
import bag2 from '../assets/projects/bag/bag-xl-2.png';
import bag3 from '../assets/projects/bag/bag-xl-3.png';
import bag4 from '../assets/projects/bag/bag-xl-4.png';
import bag5 from '../assets/projects/bag/bag-xl-5.png';
import bag6 from '../assets/projects/bag/bag-xl-6.png';
import bag7 from '../assets/projects/bag/bag-xl-7.png';

export default function() {
  return [
    {
      src: `${zielonka}`,
      title: 'Zielonka',
      descr: `Projekt restauracji wraz z${'\u00A0'}małą biblioteką w${'\u00A0'}przestrzeni parku`,
      photos: [`${zielonka1}`, `${zielonka2}`, `${zielonka3}`, `${zielonka4}`]
    },
    {
      src: `${poznanska}`,
      title: 'Poznańska',
      descr: `Kompleksowy projekt mieszkania wraz z${'\u00A0'}przebudową kuchni i${'\u00A0'}łazienki`,
      photos: [
        `${poznanska1}`,
        `${poznanska2}`,
        `${poznanska3}`,
        `${poznanska4}`,
        `${poznanska5}`,
        `${poznanska6}`
      ]
    },
    {
      src: `${dlugoleka}`,
      title: 'Długołęka',
      descr: `Projekt łazienki w${'\u00A0'}domu wolnostojącym pod${'\u00A0'}Wrocławiem`,
      photos: [
        `${dlugoleka1}`,
        `${dlugoleka2}`,
        `${dlugoleka3}`,
        `${dlugoleka4}`
      ]
    },
    {
      src: `${bag}`,
      title: 'BAG',
      descr: `Dwukondygnacyjny obiekt gastronomiczny ze${'\u00A0'}strefą dzienną i${'\u00A0'}nocną`,
      photos: [
        `${bag1}`,
        `${bag2}`,
        `${bag3}`,
        `${bag4}`,
        `${bag5}`,
        `${bag6}`,
        `${bag7}`
      ]
    }
  ];
}
