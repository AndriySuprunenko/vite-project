import Button from '../elements/Button';

const Banner = () => {
  return (
    <section className='lg:px-[135px] lg:pt-[150px] lg:pb-[260px] p-6 pb-80'>
      <h1 className='text-custom-blue-deep dark:text-white lg:text-[44px] md:text-[32px] text-[26px] max-w-[523px] font-serif'>
        A peer-to-peer stablecoin{' '}
        <span className='text-custom-text-green dark:text-custom-text-blue font-serif italic'>
          clearinghouse
        </span>{' '}
        for the new economy
      </h1>
      <p className='max-w-[440px] mt-5 text-custom-text dark:text-white lg:text-lg text-[20px] font-light'>
        We are bringing real solutions to the payments world by leveraging
        public blockchains.
      </p>
      <Button
        text='JOIN NOW'
        handlClick={() => prompt('Please enter your name', 'Harry Potter')}
      />
    </section>
  );
};

export default Banner;
