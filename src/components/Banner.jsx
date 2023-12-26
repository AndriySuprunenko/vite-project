import Button from "../elements/Button";

const Banner = () => {
  return (
    <section className="px-[135px] pt-[150px] pb-[260px]">
      <h1 className="text-custom-blue-deep dark:text-white text-[44px] max-w-[523px] font-serif">
        A peer-to-peer stablecoin{" "}
        <span className="text-custom-text-green dark:text-custom-text-blue font-serif italic">
          clearinghouse
        </span>{" "}
        for the new economy
      </h1>
      <p className="max-w-[440px] mt-5 text-custom-text dark:text-white text-lg font-light">
        We are bringing real solutions to the payments world by leveraging
        public blockchains.
      </p>
      <Button text="JOIN NOW" />
    </section>
  );
}

export default Banner;
