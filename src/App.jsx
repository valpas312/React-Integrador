import { ChakraProvider } from "@chakra-ui/react";
import Products from "./components/Products";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <h1>Hello World</h1>
        <Products/>
      </ChakraProvider>
    </>
  );
};

export default App;