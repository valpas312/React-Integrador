import { useSelector, useDispatch } from "react-redux";
import { Button, ButtonGroup, Text } from "@chakra-ui/react";
import {
  removeProductFromCart,
  clearCart,
} from "../redux/slices/productsSlice";
import CartCard from "../components/CartCard";
import { Link } from "react-router-dom";
import GenericBox from "../components/styles/GenericBox";

const Cart = () => {
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  const total = useSelector((state) => state.products.totalCartPrice);

  return (
    <GenericBox direction="column">
    <GenericBox>
      {cart.length === 0 ? (
        <h1>Cart is empty</h1>
      ) : (
        cart.map((product) => {
          return (
            <CartCard
              key={product.id}
              {...product}
              handleRemoveFromCart={() =>
                dispatch(removeProductFromCart(product))
              }
            />
          );
        })
      )}
    </GenericBox>
      <GenericBox>
        <ButtonGroup spacing="2">
          <Button colorScheme="blue" as={Link} to={"/checkout"}
          isDisabled={cart.length === 0 ? true : false}
          >
            Checkout
          </Button>
          <Button colorScheme="red" onClick={() => dispatch(clearCart())}>
            Clear cart
          </Button>
        </ButtonGroup>
        <Text>Total: ${total.toFixed(2)}</Text>
      </GenericBox>
    </GenericBox>
  );
};

export default Cart;
