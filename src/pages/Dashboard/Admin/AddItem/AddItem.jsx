import { ImSpoonKnife } from 'react-icons/im';
import Title from '../../../../components/Share/Title/Title';

const AddItem = () => {
  return (
    <div>
      <Title hading={'ADD AN ITEM'} subHading={"What's new?"} />
      <div>
        <section className="p-1 xs:p-8">
          <div className=" max-w-96 sm:max-w-4xl mx-auto p-8">
            <form>
              <div className="space-y-6">
                <div>
                  <label htmlFor="recipe" className="mb-1 ">
                    Recipe name*
                  </label>
                  <input
                    type="text"
                    id="recipe"
                    className="h-[50px] rounded-[5px] border w-full px-2"
                    name="recipe"
                  />
                </div>
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="category" className="mb-1">
                      Category*
                    </label>
                    <select
                      name="category"
                      id="category"
                      className="h-[50px] border rounded-[5px] w-full px-2"
                    >
                      <option value="" selected="">
                        Select
                      </option>
                      <option value="HR">HR</option>
                      <option value="programming">Programming</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="price" className="mb-1">
                      Price*
                    </label>
                    <input
                      type="text"
                      name=""
                      id="price"
                      className="h-[50px] border rounded-[5px] w-full px-2"
                    />
                  </div>
                </div>
                <div className="">
                  <label htmlFor="recipeDetails" className="">
                    Recipe Details*
                  </label>
                  <div className="w-full rounded-[12px]">
                    <textarea
                      id="recipeDetails"
                      className="h-40 px-3 py-1 outline-none w-full resize-none border rounded-lg"
                      placeholder="Recipe Details"
                    ></textarea>
                  </div>
                </div>
                <div className="">
                  <label htmlFor="fileUpload" className="mb-1 block">
                    Upload file
                  </label>
                  <input
                    id="fileUpload"
                    type="file"
                    className="w-full file:mr-4 file:rounded-md file:border-0 file:py-2 file:px-4  file:font-semibold focus:outline-none disabled:pointer-events-none disabled:opacity-60"
                  />
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
