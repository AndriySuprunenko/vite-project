import foto from "../assets/images/statisticImage.png";
import Button from "../elements/Button";

const Statistic = () => {
  return (
    <>
      <div className=" relative -translate-y-[250px] h-[500px]">
        {/* Image block */}
        <div className="max-w-[570px]">
          <img className="w-full" src={foto} alt="City's foto" />
        </div>
        {/* Block with text */}
        <div className="flex bg-custom-bg-tranparent-l-2 dark:bg-custom-bg-tranparent-d-2 absolute right-0 top-5 py-10">
          {/* Info numbers */}
          <div>
            <div className="px-[100px] flex flex-col items-center">
              <div className="flex items-center">
                <span className="text-[40px] text-custom-gray-light dark:text-white">
                  $
                </span>
                <h2 className="text-[68px] font-serif dark:text-white">
                  1 tril
                </h2>
              </div>
              <span className="text-[18px] font-light text-custom-gray-text dark:text-white">
                Market cap potential
              </span>
              <hr className="border-[1px] border-solid w-[100px] border-custom-text-green dark:border-custom-text-blue my-[40px]" />
            </div>

            <div className="px-[100px] flex flex-col items-center">
              <div className="flex items-center">
                <span className="text-[40px] text-custom-gray-light dark:text-white">
                  $
                </span>
                <h2 className="text-[68px] font-serif dark:text-white">
                  3.65 mil
                </h2>
              </div>
              <span className="text-[18px] font-light text-custom-gray-text dark:text-white">
                Deposited to platform
              </span>
              <hr className="border-[1px] border-solid w-[100px] border-custom-green-line dark:border-custom-text-blue my-[40px]" />
            </div>

            <div className="px-[100px] flex flex-col items-center">
              <div className="flex items-center">
                <span className="text-[40px] text-custom-gray-light dark:text-white">
                  $
                </span>
                <h2 className="text-[68px] font-serif dark:text-white">12</h2>
              </div>
              <span className="text-[18px] font-light text-custom-gray-text dark:text-white">
                Stablecoins
              </span>
            </div>
          </div>
          {/* Text info */}
          <div className="max-w-[400px] text-[18px] font-light text-custom-gray-text dark:text-white">
            <p>
              Solis group is a new venture created with investments from and
              collaboration with XBTO International, XBTO Ventures and Phil
              Potter, formerly of bitfinex. Stablehouse is intended to launch a
              first-of-its-kind clearing house for stablecoins that seeks to
              promote the next phase of the market’s development.{" "}
            </p>
            <p className="pt-5">
              The API-enabled, centralized platform addresses the key issues of
              inconsistent liquidity, stability and accessibility which are
              currently preventing the stablecoin market from reaching crioical
              mass.{" "}
            </p>
            <Button text="CONTACT SALES" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistic;
