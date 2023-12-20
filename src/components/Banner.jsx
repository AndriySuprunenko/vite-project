import Button from "../elements/Button";

function Banner() {
  return (
    <section className='px-[135px] pt-[150px]'>
      <h1 className='text-custom-blue-deep dark:text-white text-[44px] max-w-[523px]'>
        A peer-to-peer stablecoin{' '}
        <span className='text-custom-text-green dark:text-custom-text-blue italic'>
          clearinghouse
        </span>{' '}
        for the new economy
      </h1>
      <p className="max-w-[440px] mt-5 text-custom-text dark:text-white text-lg font-light">
        We are bringing real solutions to the payments world by leveraging
        public blockchains.
      </p>
      <Button text="JOIN NOW"/>
    </section>
  );
}

export default Banner;
