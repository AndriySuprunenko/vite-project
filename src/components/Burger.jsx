import { useEffect, useRef } from 'react';
import Button from '../elements/Button';

const Burger = ({ handlClick, darkMode }) => {
  const hambRef = useRef(null);
  const popupRef = useRef(null);

  const open = () => {
    const popup = popupRef.current;
    const hamb = hambRef.current;
    popup.classList.toggle('open');
    hamb.classList.toggle('open');
  };

  useEffect(() => {
    const hamb = hambRef.current;
    const popup = popupRef.current;

    hamb.addEventListener('click', open);
    popup.addEventListener('click', open);

    return () => {
      hamb.removeEventListener('click', open);
      popup.removeEventListener('click', open);
    };
  }, []);

  const list = [
    'Home',
    'Aboute',
    'Products',
    'Use Cases',
    'Pricing',
    'Resources',
  ];

  const listItems = list.map((item, index) => (
    <li
      className='text-custom-blue-deep dark:text-white text-md p-3'
      key={index}
    >
      <a
        className='hover:border-b-4 border-solid border-custom-ogange-active dark:border-green-900'
        href='#'
      >
        {item}
      </a>
    </li>
  ));

  return (
    <div className='lg:hidden flex'>
      <div className='hamb'>
        <div className='hamb__field' ref={hambRef} id='hamb'>
          <span className='bar bg-custom-blue-deep dark:bg-white'></span>
          <span className='bar bg-custom-blue-deep dark:bg-white'></span>
          <span className='bar bg-custom-blue-deep dark:bg-white'></span>
        </div>
      </div>
      <div
        className='popup bg-custom-bg-tranparent-l-2 dark:bg-custom-bg-tranparent-d-2 p-10 rounded-lg flex-col items-start'
        ref={popupRef}
        id='popup'
      >
        <ul>{listItems}</ul>
        <Button
          text={`${(darkMode && 'Light') || 'Dark'}`}
          handlClick={handlClick}
          style='flex p-3'
        />
      </div>
    </div>
  );
};

export default Burger;
