import logo from '../assets/images/logo/logo.png';

function Header() {
  const list = [
    'Home',
    'Aboute',
    'Products',
    'Use Cases',
    'Pricing',
    'Resources',
  ];
  const listItems = list.map((item, index) => (
    <li className='text-black dark:text-white' key={index}>
      <a href='#'>{item}</a>
    </li>
  ));
  return (
    <header className='z-50 w-full'>
      <div className='flex'>
        {/* Logo block */}
        <div className=''>
          <img src={logo} alt='Logo' />
        </div>
        {/* Navigation */}
        <nav>
          <ul className='flex'>{listItems}</ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
