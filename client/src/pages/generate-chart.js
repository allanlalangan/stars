import { useState } from 'react';
import NatalForm from '../components/NatalForm';
import NatalPlacements from '../components/NatalPlacements';

const GenerateChartPage = ({ user }) => {
  const [activeNatalChart, setActiveNatalChart] = useState(null);
  return (
    <section
      className={`${!user ? 'md:w-full' : 'md:w-3/4'} overflow-y-scroll p-4`}
    >
      <h2>Generate Natal Chart</h2>
      <NatalForm setActiveNatalChart={setActiveNatalChart} />
      <NatalPlacements placements={activeNatalChart} />
    </section>
  );
};
export default GenerateChartPage;
