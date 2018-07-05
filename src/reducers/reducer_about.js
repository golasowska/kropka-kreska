import iconStudies from '../assets/icon-studies.png';
import iconPassion from '../assets/icon-passion.png';
import iconExperience from '../assets/icon-experience.png';
import iconValues from '../assets/icon-values.png';

export default function() {
  return [
    {
      src: `${iconStudies}`,
      title: 'Studia',
      descr:
        'absolwentka Akademii Sztuki w Szczecinie na kierunku Architektura Wnętrz'
    },
    {
      src: `${iconPassion}`,
      title: 'Pasja',
      descr:
        'trendy projektowe zarówno w dziedzinie architektury jak i szeroko pojętego designu'
    },
    {
      src: `${iconExperience}`,
      title: 'Doświadczenie',
      descr: 'z każdym projektem rozwijam swoją wiedzę o nowe doświadczenia'
    },
    {
      src: `${iconValues}`,
      title: 'Wartości',
      descr:
        'cenię profesjonalizm oraz kreatywność, które są najważniejsą wartością mojej firmy'
    }
  ];
}
