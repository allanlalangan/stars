import tarot from '../util/tarot';

const TarotDeckPage = (props) => {
  return (
    <ul className='overflow-y-scroll'>
      <h5>{'Name' || props.name}</h5>
      {tarot?.map((card) => (
        <li>{card.name}</li>
      ))}
    </ul>
  );
};
export default TarotDeckPage;
