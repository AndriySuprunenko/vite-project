import foto from '../assets/images/statisticImage.png';

function Statistic(){
  return(
    <>
      <div className="px-[135px]">
        <div className='max-w-[570px]'><img className='w-full' src={foto} alt="City's foto" /></div>
      </div>
    </>
  )
}

export default Statistic;