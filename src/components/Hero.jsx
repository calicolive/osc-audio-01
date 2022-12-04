export const Hero = () => {
  return (
    <section className='bg-base-200'>
      <div className='mx-auto max-w-screen-xl   px-4 py-32 lg:flex  lg:items-center'>
        <div className='mx-auto max-w-3xl text-center'>
          <h1 className='bg-gradient-to-r from-primary  to-secondary bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl'>
            Audio plugins
            <span className='sm:block'> for audio nerds. </span>
          </h1>

          <p className='mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className='mt-8 flex flex-wrap justify-center gap-4'>
            <a className='btn btn-primary' href='/'>
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
