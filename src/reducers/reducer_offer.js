import iconProjects from '../assets/icon-projects.png';
import iconVisualisations from '../assets/icon-visualisations.png';
import iconPlans from '../assets/icon-plans.png';

export default function() {
  return [
    {
      src: `${iconProjects}`,
      title: 'Projekty',
      descr: `możliwość zaprojektowania całego obiektu lub${'\u00A0'}pojedynczych pomieszczeń`
    },
    {
      src: `${iconVisualisations}`,
      title: 'Wizualizacje',
      descr: `w standardzie każdego projektu jak i${'\u00A0'}możliwość osobnego zlecenia`
    },
    {
      src: `${iconPlans}`,
      title: 'Rzuty budynków',
      descr: 'inwentaryzacje, przygotowanie plików dokumentacji technicznej'
    }
  ];
}
