import Sidebar from '../components/Sidebar';

const DashboardPage = () => {
  return (
    <>
      <section className='flex h-full'>
        <Sidebar />
        <article className='w-full overflow-scroll p-4'>
          <h2 className='mb-4'>Hello, user!</h2>
          <ul className='grid grid-cols-12 gap-4'>
            <li className='col-span-6 row-span-2 flex min-h-[20rem] flex-col border-2 border-gray-900 p-4'>
              <h3>Weekly Forecast</h3>
              <ul className='grid h-full'>
                <li className=''>
                  <h4>Sunday</h4>
                  <ul>
                    <li className='flex w-1/4 justify-evenly text-lg'>
                      <span className='flex w-1/3 items-center justify-center'>
                        ☉
                      </span>
                      <span className='mx-1 flex w-1/3 items-center justify-center'>
                        →
                      </span>
                      <span className='flex w-1/3 items-center justify-center'>
                        ♑︎
                      </span>
                    </li>
                  </ul>
                </li>
                <li className=''>
                  <h4>Monday</h4>
                  <ul>
                    <li className='flex w-1/4 justify-evenly text-lg'>
                      <span className='flex w-1/3 items-center justify-center'>
                        ☽
                      </span>
                      <span className='mx-1 flex w-1/3 items-center justify-center'>
                        →
                      </span>
                      <span className='flex w-1/3 items-center justify-center'>
                        ♋︎
                      </span>
                    </li>
                    <li className='flex w-1/4 justify-evenly text-lg'>
                      <span className='flex w-1/3 items-center justify-center'>
                        ☉
                      </span>
                      <span className='mx-1 flex w-1/3 items-center justify-center'>
                        ☍
                      </span>
                      <span className='flex w-1/3 items-center justify-center'>
                        ☽
                      </span>
                    </li>
                  </ul>
                </li>
                <li className=''>
                  <h4>Tuesday</h4>
                  <ul>
                    <li className='flex w-1/4 justify-evenly text-lg'>
                      <span className='flex w-1/3 items-center justify-center'>
                        ♃
                      </span>
                      <span className='mx-1 flex w-1/3 items-center justify-center'>
                        =
                      </span>
                      <span className='flex w-1/3 items-center justify-center'>
                        ℞
                      </span>
                    </li>
                  </ul>
                </li>
                <li className=''>
                  <h4>Wednesday</h4>
                  <ul>
                    <li className='flex w-1/4 justify-evenly text-lg'>
                      <span className='flex w-1/3 items-center justify-center'>
                        ♄
                      </span>
                      <span className='mx-1 flex w-1/3 items-center justify-center'>
                        ≠
                      </span>
                      <span className='flex w-1/3 items-center justify-center'>
                        ℞
                      </span>
                    </li>
                  </ul>
                </li>
                <li className=''>
                  <h4>Thursday</h4>
                  <ul></ul>
                </li>
                <li className=''>
                  <h4>Friday</h4>
                  <ul></ul>
                </li>
                <li className=''>
                  <h4>Saturday</h4>
                  <ul></ul>
                </li>
              </ul>
            </li>
            <li className='col-span-6 flex min-h-[20rem] flex-col border-2 border-gray-900 p-4'>
              <h3 className='h-fit'>The Stars Today</h3>
              <section className='flex h-full'>
                <article className='flex h-full w-1/2 flex-col'>
                  <h4 className='text-[1rem]'>The Planets Today</h4>
                  <div className='mx-2 h-full border-2 border-gray-900 p-2'></div>
                </article>
                <article className='flex h-full w-1/2 flex-col'>
                  <h4 className='text-[1rem]'>Your Placements</h4>
                  <div className='mx-2 h-full border-2 border-gray-900 p-2'></div>
                </article>
              </section>
            </li>
            <li className='col-span-6 min-h-[20rem] border-2 border-gray-900 p-4'>
              <h3>Moon</h3>
            </li>
            <li className='col-span-6 min-h-[20rem] border-2 border-gray-900 p-4'>
              <h3>Upcoming Events</h3>
            </li>
            <li className='col-span-6 min-h-[20rem] border-2 border-gray-900 p-4'>
              <h3>Visualize and Manifest</h3>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
};
export default DashboardPage;
