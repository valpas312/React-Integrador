import {
  Menu,
  MenuButton,
  MenuList,
  ButtonGroup,
  IconButton,
  MenuItem,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
import { logout } from "../../redux/slices/userSlice";
import { Link } from "react-router-dom";

const ResponsiveNav = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  return (
    <ButtonGroup
      h="10vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="gray.200"
      boxShadow="md"
      position="sticky"
      top="0"
      zIndex="1"
      mb="2"
    >
      {user.user?.username ? (
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<RxHamburgerMenu />}
            variant="outline"
          />
          <MenuList>
            <MenuItem onClick={() => dispatch(logout())}>Logout</MenuItem>
            <MenuItem as={Link} to="/products">
              All Products
            </MenuItem>
            <MenuItem as={Link} to="/">
              Home
            </MenuItem>
            <MenuItem as={Link} to="/cart">
              Cart
            </MenuItem>
            <MenuItem as={Link} to="/profile">
              Profile
            </MenuItem>
          </MenuList>
        </Menu>
      ) : null}
    </ButtonGroup>
  );
};

export default ResponsiveNav;
