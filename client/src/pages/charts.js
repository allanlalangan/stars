import { Link } from 'react-router-dom';
import NatalForm from '../components/NatalForm';
const ChartsPage = ({ isLoaded }) => {
  return (
    <article className='flex flex-col sm:w-1/2'>
      <h3>Star Charts</h3>
      {isLoaded && <NatalForm />}
      <section className='flex w-full flex-col'>
        <h5>Saved Charts</h5>
        <ul className='flex h-1/2 flex-col p-4 px-8 sm:h-80 sm:overflow-scroll md:h-96'>
          <li className='my-2 cursor-pointer border border-slate-300 py-2 px-4'>
            <p>Name</p>
          </li>
          <li className='my-2 cursor-pointer border border-slate-300 py-2 px-4'>
            <p>Name</p>
          </li>
          <li className='my-2 cursor-pointer border border-slate-300 py-2 px-4'>
            <p>Name</p>
          </li>
          <li className='my-2 cursor-pointer border border-slate-300 py-2 px-4'>
            <p>Name</p>
          </li>
          <li className='my-2 cursor-pointer border border-slate-300 py-2 px-4'>
            <p>Name</p>
          </li>
          <li className='my-2 cursor-pointer border border-slate-300 py-2 px-4'>
            <p>Name</p>
          </li>
          <li className='my-2 cursor-pointer border border-slate-300 py-2 px-4'>
            <p>Name</p>
          </li>
          <li className='my-2 cursor-pointer border border-slate-300 py-2 px-4'>
            <p>Name</p>
          </li>
          <li className='my-2 cursor-pointer border border-slate-300 py-2 px-4'>
            <p>Name</p>
          </li>
          <li className='my-2 cursor-pointer border border-slate-300 py-2 px-4'>
            <p>Name</p>
          </li>
          <li className='my-2 cursor-pointer border border-slate-300 py-2 px-4'>
            <p>Name</p>
          </li>
          <li className='my-2 cursor-pointer border border-slate-300 py-2 px-4'>
            <p>Name</p>
          </li>
        </ul>
      </section>
    </article>
  );
};
export default ChartsPage;
