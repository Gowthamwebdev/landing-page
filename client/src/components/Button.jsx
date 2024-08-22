export const Button = ({
    label,
    iconURL,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth,
  }) => {
    return (
      <button
        className={`w-2/5 flex items-center justify-center   gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-gradient-to-r from-red-800 to-orange-600 text-white "
        } rounded-full ${fullWidth && "w-full"}`}
      >
        {label}
  
        {iconURL && (
          <img
            src={iconURL}
            alt='arrow right icon'
            className='ml-2 rounded-full bg-white w-5 h-5'
          />
        )}
      </button>
    );
  };
  
  