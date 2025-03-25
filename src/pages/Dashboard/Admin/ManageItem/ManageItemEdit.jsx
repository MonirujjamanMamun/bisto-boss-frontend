import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const imgbb_hosting_key = import.meta.env.VITE_imgbb_hosting_key;
const imgbb_api = `https://api.imgbb.com/1/upload?key=${imgbb_hosting_key}`;

const ManageItemEdit = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { name, category, recipe, price, image, _id } = data.menus;
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const selectedFile = watch('fileUpload');

  const onSubmit = async (data) => {
    if (!selectedFile || selectedFile.length === 0) {
      data.fileUpload = image;
    } else {
      const imgFile = { image: data.fileUpload[0] };
      const res = await axiosPublic.post(imgbb_api, imgFile, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (!res.data.success) {
        return console.error('image not uploaded', res.data);
      }
      data.fileUpload = res.data.data.display_url;
    }
    const updateMenuItem = {
      name: data.recipe,
      recipe: data.recipeDetails,
      image: data.fileUpload,
      category: data.category,
      price: data.price,
    };
    const updateRes = await axiosSecure.patch(
      `/editmenu/${_id}`,
      updateMenuItem
    );

    if (updateRes.data.success) {
      reset();
      navigate('/dashboard/manageitem');
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `${updateRes.data.updatedMenu.name} is updated successfully.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <div>
        <h3 className="text-[40px] text-center mt-11 mb-5">UPDATE ITEM</h3>
      </div>
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
                  defaultValue={name}
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
                    defaultValue={category}
                    {...register('category', { required: true })}
                    name="category"
                    id="category"
                    className="h-[50px] border rounded-[5px] w-full px-2 bg-[#1d232a] text-inherit"
                  >
                    {/* <option disabled value="default">
                      Select a category
                    </option> */}
                    <option value="salad">Salad</option>
                    <option value="pizza">Pizza</option>
                    <option value="soup">Soup</option>
                    <option value="dessert">Dessert</option>
                    <option value="drinks">Drink</option>
                  </select>
                  {errors.category && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>
                <div>
                  <label htmlFor="price" className="mb-1">
                    Price*
                  </label>
                  <input
                    defaultValue={price}
                    {...register('price', { required: true })}
                    type="number"
                    name="price"
                    id="price"
                    className="h-[50px] border rounded-[5px] w-full px-2"
                    placeholder="Price"
                  />
                  {errors.price && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>
              </div>
              <div className="">
                <label htmlFor="recipeDetails" className="">
                  Recipe Details*
                </label>
                <div className="w-full rounded-[12px]">
                  <textarea
                    defaultValue={recipe}
                    {...register('recipeDetails', { required: true })}
                    id="recipeDetails"
                    className="h-40 px-3 py-1 outline-none w-full resize-none border rounded-lg"
                    placeholder="Recipe Details"
                  ></textarea>
                  {errors.recipeDetails && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>
              </div>
              <div className="">
                <label htmlFor="fileUpload" className="mb-1 block">
                  Upload file
                </label>
                <input
                  {...register('fileUpload')}
                  id="fileUpload"
                  type="file"
                  className="w-full file:mr-4 file:rounded-md file:border-0 file:py-2 file:px-4  file:font-semibold focus:outline-none disabled:pointer-events-none disabled:opacity-60"
                />
                {image && (
                  <img src={image} alt="Current Image" className="h-9 mt-2" />
                )}
              </div>
            </div>
            <div className="flex justify-center items-center mt-8 pt-6">
              <button
                type="submit"
                className="text-xl font-bold h-[50px] bg-linear-to-r from-[#835D23] to-[#B58130] rounded-[5px] p-[13px_25px] gap-[10px] cursor-pointer"
              >
                Update Recipe Details
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ManageItemEdit;
