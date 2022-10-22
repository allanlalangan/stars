import tarot from '../util/tarot';

const TarotPage = () => {
  return (
    <ul className='flex flex-wrap overflow-y-scroll'>
      {tarot?.map((card) => (
        <li className='m-2 flex h-32 w-24 items-center justify-center border-2 p-2'>
          <p className='text-center'>{card.name}</p>
        </li>
      ))}
    </ul>
  );
};
export default TarotPage;
