
interface cartProps {
  cartItems: string[];
}

const Cart = ({ cartItems }: cartProps) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
