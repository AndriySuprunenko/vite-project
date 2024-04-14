const Benefits = () => {
  return (
    <>
      <div className='flex flex-wrap justify-between md:flex-row'>
        {/* component */}
        <div className='max-w-[570px] h-[340px] p-[30px] border-t-[2px] border-custom-gray-light border-solid pb-[112px]'>
          <h3 className='text-[40px] text-custom-blue-deep font-serif dark:text-white'>
            Qualified{' '}
            <span className='italic text-custom-text-green dark:text-custom-text-blue'>
              traders
            </span>{' '}
            and liquidty{' '}
            <span className='italic text-custom-text-green dark:text-custom-text-blue'>
              solutions
            </span>
          </h3>
          <p className='text-[18px] text-custom-blue-deep dark:text-white font-light mt-[30px]'>
            Trade easily and efficiently between 12 stablecoins, including USDT,
            TrueUSD, Dai, Eurs and Gemini Dollar.
          </p>
        </div>

        <div className='max-w-[570px] p-[30px] border-t-[2px] border-custom-gray-light border-solid pb-[112px]'>
          <h3 className='text-[40px] text-custom-blue-deep font-serif dark:text-white'>
            Settlement/OTC API and{' '}
            <span className='italic text-custom-text-green dark:text-custom-text-blue'>
              integration
            </span>{' '}
          </h3>
          <p className='text-[18px] text-custom-blue-deep dark:text-white font-light mt-[30px]'>
            Integrate OTC operations and settlements using our efficient API.
          </p>
        </div>

        <div className='max-w-[570px] p-[30px] border-t-[2px] border-custom-gray-light border-solid pb-[112px]'>
          <h3 className='text-[40px] text-custom-blue-deep font-serif dark:text-white'>
            The best{' '}
            <span className='italic text-custom-text-green dark:text-custom-text-blue'>
              payments solutions
            </span>{' '}
          </h3>
          <p className='text-[18px] text-custom-blue-deep dark:text-white font-light mt-[30px]'>
            Trade easily and efficiently between 12 stablecoins, including USDT,
            TrueUSD, Dai, Eurs and Gemini Dollar.
          </p>
        </div>

        <div className='max-w-[570px] p-[30px] border-t-[2px] border-custom-gray-light border-solid pb-[112px]'>
          <h3 className='text-[40px] text-custom-blue-deep font-serif dark:text-white'>
            <span className='italic text-custom-text-green dark:text-custom-text-blue'>
              Treasury
            </span>{' '}
            and{' '}
            <span className='italic text-custom-text-green dark:text-custom-text-blue'>
              returns
            </span>{' '}
            for stablecoin stores
          </h3>
          <p className='text-[18px] text-custom-blue-deep dark:text-white font-light mt-[30px]'>
            Automate your stablecoin store with instant payments and on-the-fly
            conversion between different stablecoins.
          </p>
        </div>
      </div>
    </>
  );
};

export default Benefits;
