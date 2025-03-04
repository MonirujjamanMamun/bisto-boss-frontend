const MenuButton = ({ title }) => {
  return (
    <div>
      <button className="border-b-2 rounded-xl p-3 text-xl cursor-pointer">
        {title}
      </button>
    </div>
  );
};

export default MenuButton;
