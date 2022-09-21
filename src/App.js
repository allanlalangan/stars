import NatalForm from './components/NatalForm';
import { useJsApiLoader } from '@react-google-maps/api';

// import Counter from './components/Counter';

const App = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries: ['places'],
  });

  return (
    <div>
      <h1 className='font-medium text-red-400'>Stars</h1>
      <NatalForm isLoaded={isLoaded} />
      {/* <Counter /> */}
    </div>
  );
};
export default App;
