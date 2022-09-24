import { useState } from 'react';
import NatalForm from '../components/NatalForm';
import NatalPlacements from '../components/NatalPlacements';

const GenerateChartPage = () => {
  const [activeNatalChart, setActiveNatalChart] = useState(null);
  return (
    <>
      <section>
        <NatalForm setActiveNatalChart={setActiveNatalChart} />
        <NatalPlacements placements={activeNatalChart} />
      </section>
    </>
  );
};
export default GenerateChartPage;
