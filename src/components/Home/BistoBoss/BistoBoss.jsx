import bistoImg from '../../../assets/home/chef-service.jpg';
import Parallax from '../../Share/Parallax/Parallax';
const BistoBoss = () => {
  const para = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          earum reprehenderit numquam recusandae enim debitis? Harum quia
          incidunt obcaecati culpa debitis libero ut quo repudiandae.
          Perspiciatis exercitationem natus omnis maiores quasi accusamus magni
          nisi, perferendis nulla quas eius distinctio voluptas obcaecati,
          pariatur tempora placeat vel, porro ducimus. Possimus, eveniet
          officiis.`;
  return (
    <div>
      <Parallax img={bistoImg} title="Bistro Boss" para={para} />
    </div>
    // <div
    //   style={{ backgroundImage: `url(${bistoImg})` }}
    //   className="bg-center h-screen w-full flex items-center justify-center my-11 rounded-sm"
    // >
    //   <div className="bg-[#15151599] p-20 rounded-lg shadow-lg text-center m-20">
    //     <h1 className="text-4xl font-bold">Bistro Boss</h1>
    //     <p className="mt-5">

    //     </p>
    //   </div>
    // </div>
  );
};

export default BistoBoss;
