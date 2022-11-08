import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharts } from '../features/chartSlice';
import FormInput from './FormInput';
import { createPost } from '../features/postsSlice';
const NewPost = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedChart, setSelectedChart] = useState(null);

  const [shareChart, setShareChart] = useState(false);
  const dispatch = useDispatch();

  const { charts } = useSelector((state) => state.chart);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      text: inputValue,
      chart: selectedChart?._id || null,
    };
    dispatch(createPost(formData));
  };
  useEffect(() => {
    dispatch(getCharts());
  }, []);
  // useEffect(() => {
  //   console.log(charts);
  // }, [charts]);

  const onRadioChange = (e) => {
    setShareChart(e.target.checked);
    if (!e.target.checked) {
      setSelectedChart(null);
    }
  };

  const handleChartSelect = (e) => {
    const chart = charts.find((chart) => chart._id === e.target.value);
    setSelectedChart(chart);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className='p-4 shadow'>
      <h3 className='font-display text-lg'>Share something</h3>
      <FormInput
        onChange={handleInputChange}
        label='Text'
        type='text'
        name='text'
        id='text'
      />
      <fieldset className='mb-2 grid w-full grid-cols-4 items-center gap-2'>
        <button
          type='button'
          htmlFor='today'
          className='col-span-2 flex h-full flex-col justify-between'
        >
          <input
            type='checkbox'
            onChange={onRadioChange}
            checked={shareChart}
            name='category'
            id='today'
            className='peer hidden'
          />
          <label
            htmlFor='today'
            className='flex w-full cursor-pointer justify-center rounded border border-slate-700 p-2 text-primary-400 transition hover:border-primary-700 hover:text-primary-700 peer-checked:border-transparent peer-checked:bg-slate-700 peer-checked:text-secondary-200'
          >
            Share Natal Chart
          </label>
        </button>

        {/* <fieldset className='mb-2 flex w-full flex-col items-start'> */}
        {/* <label
            htmlFor='chart'
            className='cursor pointer w-full font-heading text-sm font-semibold'
          >
            Select Chart:
          </label> */}
        {shareChart && (
          <select
            name='chart'
            id='chart'
            onChange={handleChartSelect}
            disabled={!shareChart}
            className='col-span-2 flex h-[42px] flex-col justify-center rounded border border-primary-700 bg-white p-2 disabled:border-slate-300 disabled:bg-slate-50 disabled:p-2 disabled:text-slate-300'
          >
            <option value=''>Select a Chart</option>
            {charts?.map((chart) => (
              <option value={chart._id}>{`${chart.name}: ${new Date(
                chart.year,
                chart.month - 1,
                chart.day,
                chart.hour,
                chart.minute,
                0
              ).toLocaleDateString()}`}</option>
            ))}
          </select>
        )}
        {/* </fieldset> */}
      </fieldset>

      <button
        type='submit'
        className='w-full rounded bg-slate-700 p-2 font-bold text-slate-50 shadow transition hover:bg-primary-700 hover:text-secondary-200 hover:shadow-primary-300'
      >
        Create New Post
      </button>
    </form>
  );
};
export default NewPost;
