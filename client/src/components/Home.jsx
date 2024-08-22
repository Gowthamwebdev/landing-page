import Watch1 from "../assets/watch1.png";
import  announcement  from "../assets/announcement.png";

const Home = () => {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-50 flex justify-center items-center duration-200 '>
      <div className="container pb-8 sm:pb-0">
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div>
            <div className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] rounded-full">
              <img src={announcement} alt="" />
            </div>
              <h2 className='text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>Weekend Sale is</h2>
              <p className='text-3xl sm:text-4xl lg:text-6xl font-mono bg-gradient-to-t from-slate-600 to-black text-transparent bg-clip-text'>live now</p>
          </div>
          <div>
            <div>
              <img src={Watch1} alt="" className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-125 object-contain mx-auto"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;