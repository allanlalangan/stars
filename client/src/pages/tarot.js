import tarot from '../util/tarot';

const TarotPage = () => {
  return (
    <article className='flex flex-wrap items-center justify-around overflow-y-scroll'>
      {tarot?.map((card) => (
        <li className='mb-2 flex flex-col items-center justify-center'>
          <button className='mx-2 flex h-32 w-24 items-center justify-center rounded border border-primary-200 p-2 shadow transition hover:shadow-md active:shadow-sm'></button>
          <p className='p-2 text-center text-sm'>{card.name}</p>
        </li>
      ))}
    </article>
  );
};
export default TarotPage;
