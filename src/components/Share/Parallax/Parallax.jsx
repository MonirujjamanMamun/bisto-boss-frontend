const Parallax = ({ img, title }) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="bg-center h-96 w-full flex items-center justify-center mb-11 rounded-sm"
    >
      <div className="bg-[#15151599] w-3/4 p-20 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
          similique placeat reprehenderit dolore nobis doloremque deserunt
          voluptas voluptatum enim facere illo quo fugiat impedit iusto aperiam,
          hic culpa pariatur illum?
        </p>
      </div>
    </div>
  );
};

export default Parallax;
