import Watch1 from "../assets/watch1.png";
import  announcement  from "../assets/announcement.png";
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import RasmikaImg from "../assets/rasmika.webp";

const Home = () => {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-50 flex justify-center items-center duration-200 '>
      <div className="h-[700px] w-[700px] bg-gradient-to-t from-orange-600 to-red-800 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      <div className="container pb-8 sm:pb-0">
        <div className='grid grid-cols-2'>
          <div className="flex flex-col justify-center pt-12 sm:pt-0 text-center sm:text-left relative z-10 gap-4">
            <div className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] rounded-full">
              <img src={announcement} alt="" />
            </div>
              <h2 className='text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-b from-slate-700 to-slate-950 text-transparent bg-clip-text'>Upto 50% off* with excited prices</h2>
              <p className="text-[0.6rem] sm:text-sm lg:text-lg sm:max-w-lg font-mono text-slate-600 ">Embrace timeless elegance this summer with our exquisite analog watches.</p>
              <div className="flex py-4">
              <a className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-md">Order now</a>
              </div>
              <div className="flex w-3/4">
                <div className="bg-orange-500 rounded-lg flex  flex-row">
                <GolfCourseIcon sx={{color:'white', height:'3rem', width:'3rem'}} />
                <div className="text-white p-4">
                <h2 className="font-sans font-semibold pb-2">100+ Collections</h2>
                <p className="font-sans sm:max-w-[12rem]">More than 1lakh happy customers</p>
                </div>
                </div>
              </div>
          </div>
          <div className="flex flex-col justify-center pt-12 sm:pt-0 text-center sm:text-left relative z-10 gap-4">
            <div>
              <img src={Watch1} alt="" className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-125 object-contain mx-auto"/>
              <div className="h-[100px] w-[100px] bg-gradient-to-t from-orange-600 to-red-800 absolute left-0 bottom-5 rounded-lg -z[8]">
                <img src={RasmikaImg} alt="" className=" object-contain w-full h-full" />
              </div>
              <div className="h-[100px] w-[100px] bg-primary absolute right-10 bottom[-10]0 rounded-full -z[8]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;