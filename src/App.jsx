import { ChakraProvider } from "@chakra-ui/react";
import Products from "./components/Products";
import Router from "./components/Router";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <Router/>
        <Products/>
      </ChakraProvider>
    </>
  );
};

export default App;