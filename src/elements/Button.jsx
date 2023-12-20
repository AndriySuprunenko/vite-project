function Button({ text = 'default' }) {
  return (
    <button
      type='button'
      className='text-custom-ogange-active dark:text-custom-green-neon dark:hover:text-custom-green-neon-dark hover:text-custom-red-dark font-bold text-xl mt-[37px]'
    >
      <hr className='border-none h-3 bg-custom-button-shadow-l dark:bg-custom-button-shadow-d  translate-x-2 translate-y-7' />
      {text}
    </button>
  );
}

export default Button;
