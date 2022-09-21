import BirthdayForm from './components/BirthdayForm';
import Counter from './components/Counter';

const App = () => {
  return (
    <div>
      <h1 className='text-red-400 font-medium'>Stars</h1>
      <BirthdayForm />
      <Counter />
    </div>
  );
};
export default App;
