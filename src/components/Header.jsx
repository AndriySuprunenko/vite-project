import logo from "../assets/images/logo/logo.png";

const Header = () => {
  const list = [
    "Home",
    "Aboute",
    "Products",
    "Use Cases",
    "Pricing",
    "Resources",
  ];

  const listItems = list.map((item, index) => (
    <li
      className="text-custom-blue-deep dark:text-white pl-[30px] text-sm"
      key={index}
    >
      <a
        className="hover:border-b-4 border-solid border-custom-ogange-active dark:border-green-900 p-[5px]"
        href="#"
      >
        {item}
      </a>
    </li>
  ));

  return (
    <header className="z-50 w-full bg-custom-bg-tranparent-l dark:bg-custom-bg-tranparent-d backdrop-blur-sm">
      <div className="flex py-6 px-[135px] justify-between">
        {/* Logo block */}
        <div className="max-w-[107px]">
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        {/* Navigation */}
        <nav className="flex items-center">
          <ul className="flex">{listItems}</ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
