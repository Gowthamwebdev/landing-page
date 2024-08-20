import { Navitems } from "../utils/Data";


const  Navbar = () => {
  return (
    <header className="padding-x p-10 py-8 z-10 w-full bg-transparent top-0 fixed">
      <nav className="flex justify-around items-center max-container">
        <a href="/">
          <img
            src=''
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {Navitems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          
        </div>
        <div className="flex flex-1 gap-2 font-monserrat font-medium leading-normal max-lg:hidden items-center justify-center">
          <span>Sign-in</span>
          <span>/</span>
          <span>Explore</span>
        </div>

        <div className="hidden max-lg:block">
          <img src='' alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;