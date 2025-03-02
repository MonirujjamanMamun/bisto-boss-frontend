import Title from '../../Share/Title/Title';
import featured from '../../../assets/home/featured.jpg';

const FromOurMenu = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center px-6 rounded-sm my-11"
      style={{ backgroundImage: `url(${featured})` }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Content Container */}
      <div>
        <div className="relative mb-5">
          <Title hading={'FROM OUR MENU'} subHading={'Check it out'} />
        </div>
        <div className="relative max-w-4xl w-full flex flex-col md:flex-row items-center gap-5 p-1 text-white">
          {/* Left: Image */}
          <div className="w-full md:w-2/3">
            <img
              src={featured}
              alt="Hero"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right: Heading & Paragraph */}
          <div className="w-full md:w-3/4 text-center md:text-left">
            <h1 className="text-4xl font-bold">
              March 20, 2023 <br />
              WHERE CAN I GET SOME?
            </h1>
            <p className="text-lg mt-4">
              Your paragraph text goes here. Describe your product, service, or
              message concisely.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Error voluptate facere, deserunt dolores maiores
              quod nobis quas quasi. Eaque repellat recusandae ad laudantium
              tempore consequatur consequuntur omnis ullam maxime tenetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromOurMenu;
