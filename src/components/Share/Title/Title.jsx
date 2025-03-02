const Title = ({ subHading, hading }) => {
  return (
    <div className="w-4/12 mx-auto text-center my-4">
      <p className="text-[#D99904] mb-3">--- {subHading} ---</p>
      <h3 className="text-4xl border-y-4 py-4">{hading}</h3>
    </div>
  );
};

export default Title;
