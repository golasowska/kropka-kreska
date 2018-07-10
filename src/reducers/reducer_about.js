import iconStudies from '../assets/icon-studies.png';
import iconPassion from '../assets/icon-passion.png';
import iconExperience from '../assets/icon-experience.png';
import iconValues from '../assets/icon-values.png';

export default function() {
  return [
    {
      src: `${iconStudies}`,
      title: 'Studia',
      descr: `absolwentka Akademii Sztuki w${'\u00A0'}Szczecinie na${'\u00A0'}kierunku Architektura Wnętrz`
    },
    {
      src: `${iconPassion}`,
      title: 'Pasja',
      descr: `trendy projektowe zarówno w${'\u00A0'}dziedzinie architektury jak i${'\u00A0'}szeroko pojętego designu`
    },
    {
      src: `${iconExperience}`,
      title: 'Doświadczenie',
      descr: `z${'\u00A0'}każdym projektem rozwijam swoją wiedzę o${'\u00A0'}nowe doświadczenia`
    },
    {
      src: `${iconValues}`,
      title: 'Wartości',
      descr: `cenię profesjonalizm oraz${'\u00A0'}kreatywność, które są najważniejszą wartością mojej firmy`
    }
  ];
}
