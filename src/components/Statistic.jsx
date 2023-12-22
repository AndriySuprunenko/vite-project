import foto from "../assets/images/statisticImage.png";
import Button from "../elements/Button";

function Statistic() {
  return (
    <>
      <div className="px-[135px] relative">
        {/* Image block */}
        <div className="max-w-[570px]">
          <img className="w-full" src={foto} alt="City's foto" />
        </div>
        {/* Block with text */}
        <div className="flex max-w-[770px] bg-custom-bg-tranparent-l-2 absolute right-5 top-5 py-11">
          {/* Info numbers */}
          <div>
            <div>
              <div className="flex">
                <span>$</span>
                <h2>1 Tril</h2>
              </div>
              <span>Market cap potential</span>
            </div>
          </div>
          {/* Text info */}
          <div className="max-w-[400px]">
            <p>
              Solis group is a new venture created with investments from and
              collaboration with XBTO International, XBTO Ventures and Phil
              Potter, formerly of bitfinex. Stablehouse is intended to launch a
              first-of-its-kind clearing house for stablecoins that seeks to
              promote the next phase of the market’s development.{" "}
            </p>
            <p>
              The API-enabled, centralized platform addresses the key issues of
              inconsistent liquidity, stability and accessibility which are
              currently preventing the stablecoin market from reaching critical
              mass.{" "}
            </p>
            <Button text="CONTACT SALES" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistic;
