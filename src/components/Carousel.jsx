export const Carousel = () => {
  return (
    <section className='bg-base-200 max-w-screen flex flex-col items-center space-y-4 p-10'>
      <div className='text-secondary text-4xl font-bold'>
        Current Promotions
      </div>
      <div className=' flex flex-col items-center justify-center space-y-4 lg:space-y-0 lg:flex-row lg:space-x-3'>
        <div className='indicator'>
          <span className='indicator-item badge badge-secondary'>FREE</span>
          <div className='card w-96  bg-base-100 shadow-xl '>
            <figure>
              <img src='../../public/images/SA2.png' alt='SA' />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>luapselREVGUITAR</h2>
              <p>Free sampler instrument!</p>
              <div className='card-actions justify-end'>
                <button className='btn btn-primary'>Download</button>
              </div>
            </div>
          </div>
        </div>
        <div className='indicator'>
          <span className='indicator-item badge badge-secondary'>50% off!</span>
          <div className='card w-96 bg-base-100 shadow-xl '>
            <figure>
              <img src='../../public/images/sa3.png' alt='Shoes' />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>Oscilloscope</h2>
              <p>Intro pricing 50% off!</p>
              <div className='card-actions justify-end'>
                <button className='btn btn-primary'>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className='indicator'>
          <span className='indicator-item badge badge-secondary'>FREE</span>
          <div className='card  w-96 bg-base-100 shadow-xl'>
            <figure>
              <img src='../../public/images/SA.png' alt='Shoes' />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>healingBOWL</h2>
              <p>Free sampler instrument!</p>
              <div className='card-actions justify-end'>
                <button className='btn btn-primary'>Download</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
