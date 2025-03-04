const LocationCard = ({
  icon: Icon,
  heading,
  subheading,
  startDay,
  endDay,
}) => {
  return (
    <div className="flex md:flex-col justify-center items-center h-80">
      {Icon && (
        <div
          className={`h-20 w-full rounded-2xl flex items-center justify-center`}
          style={{ backgroundColor: '#D1A054' }}
        >
          <Icon className="text-white text-3xl" />{' '}
          {/* Adjust icon size and color */}
        </div>
      )}
      <div className="p-7 text-center h-60">
        {heading && <h3 className="text-2xl font-semibold my-1">{heading}</h3>}
        {subheading && <p className="my-1">{subheading}</p>}
        {startDay && <p className="my-1">{startDay}</p>}
        {endDay && <p className="my-1">{endDay}</p>}
      </div>
    </div>
  );
};

export default LocationCard;
