import { ImSpoonKnife } from 'react-icons/im';
import Title from '../../../../components/Share/Title/Title';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const imgbb_hosting_key = import.meta.env.VITE_imgbb_hosting_key;
const imgbb_api = `https://api.imgbb.com/1/upload?key=${imgbb_hosting_key}`;

const AddItem = () => {
  const {
    register,
    handleSubmit,
    reset,
    // watch,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    const imgFile = { image: data.fileUpload[0] };
    const res = await axiosPublic.post(imgbb_api, imgFile, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (res.data.success) {
      // console.log('img', res.data.data);
      const menuItem = {
        name: data.recipe,
        recipe: data.recipeDetails,
        image: res.data.data.display_url,
        category: data.category,
        price: data.price,
      };
      const itemRes = await axiosSecure.post('/menu', menuItem);
      if (itemRes.data.success) {
        reset();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${itemRes.data.menus.name} is added to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  return (
    <div>
      <Title hading={'ADD AN ITEM'} subHading={"What's new?"} />
      <div>
        <section className="p-1 xs:p-8">
          <div className=" max-w-96 sm:max-w-4xl mx-auto p-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="recipe" className="mb-1 ">
                    Recipe name*
                  </label>
                  <input
                    {...register('recipe', { required: true })}
                    type="text"
                    id="recipe"
                    className="h-[50px] rounded-[5px] border w-full px-2"
                    name="recipe"
                    placeholder="Recipe name"
                  />
                  {errors.recipe && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="category" className="mb-1">
                      Category*
                    </label>
                    <select
                      {...register('category', { required: true })}
                      name="category"
                      id="category"
                      className="h-[50px] border rounded-[5px] w-full px-2 bg-[#1d232a] text-inherit"
                      defaultValue="salad"
                    >
                      <option value="salad">Salad</option>
                      <option value="pizza">Pizza</option>
                      <option value="soup">Soup</option>
                      <option value="dessert">Dessert</option>
                      <option value="drink">Drink</option>
                    </select>
                    {errors.category && (
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="price" className="mb-1">
                      Price*
                    </label>
                    <input
                      {...register('price', { required: true })}
                      type="number"
                      name="price"
                      id="price"
                      className="h-[50px] border rounded-[5px] w-full px-2"
                      placeholder="Price"
                    />
                    {errors.price && (
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="">
                  <label htmlFor="recipeDetails" className="">
                    Recipe Details*
                  </label>
                  <div className="w-full rounded-[12px]">
                    <textarea
                      {...register('recipeDetails', { required: true })}
                      id="recipeDetails"
                      className="h-40 px-3 py-1 outline-none w-full resize-none border rounded-lg"
                      placeholder="Recipe Details"
                    ></textarea>
                    {errors.recipeDetails && (
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="">
                  <label htmlFor="fileUpload" className="mb-1 block">
                    Upload file
                  </label>
                  <input
                    {...register('fileUpload', { required: true })}
                    id="fileUpload"
                    type="file"
                    className="w-full file:mr-4 file:rounded-md file:border-0 file:py-2 file:px-4  file:font-semibold focus:outline-none disabled:pointer-events-none disabled:opacity-60"
                  />
                  {errors.fileUpload && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>
              </div>
              <div className="mt-8 pt-6">
                <button
                  type="submit"
                  className="text-xl font-bold w-44 h-[50px] bg-linear-to-r from-[#835D23] to-[#B58130] rounded-[5px] p-[13px_25px] gap-[10px] flex justify-center items-center cursor-pointer"
                >
                  Add Item
                  <ImSpoonKnife className="w-6 h-6 mr-1" />
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddItem;
