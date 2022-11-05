import { useState } from 'react';
import NatalForm from '../components/NatalForm';
import NatalPlacements from '../components/NatalPlacements';

const GenerateChartPage = ({ user, isLoaded }) => {
  const [activeNatalChart, setActiveNatalChart] = useState(null);
  return (
    <section
      className={`${!user ? 'md:w-full' : 'md:w-3/4'} overflow-y-scroll p-4`}
    >
      <h2 className='mb-4 font-display'>Generate Natal Chart</h2>
      {isLoaded && <NatalForm setActiveNatalChart={setActiveNatalChart} />}

      <NatalPlacements placements={activeNatalChart} />
    </section>
  );
};
export default GenerateChartPage;
