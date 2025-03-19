const Cart = () => {
  // const [cartNum, setCartNum] = useState(0);
  // axios
  //   .get(`${import.meta.env.VITE_BASE_URL}/cart`, {
  //     headers: {
  //       Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2Q4NjBhNDAxNWU1YzEwMDZiZjUzNWIiLCJ1aWQiOiIxV0tKWEdKeUI1ZFNmU2wxd0ZmOW9tZm9JU3cyIiwiZW1haWwiOiJib2lAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NDIyODQ5MzcsImV4cCI6MTc0MjM3MTMzN30.svsWgThMgvH2CVBoToMsJhpTb6RlK5SM2Ee7AA9lDz8`, // Send token here
  //     },
  //   })
  //   .then((response) => {
  //     console.log(response);
  //     setCartNum(response.data.cartItems);
  //   })
  //   .catch((error) => console.error(error.response?.data || error.message));
  return (
    <div className="h-96">
      <h1 className="pt-11">This is Cart Component</h1>
    </div>
  );
};

export default Cart;
