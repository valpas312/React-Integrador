//SE CREO UN BOX GENERICO PARA PODER REUTILIZARLO EN TODA LA APLICACION
import { Box } from "@chakra-ui/react"

// eslint-disable-next-line react/prop-types
const GenericBox = ({children, direction, w, bg, p}) => {
  return <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap="2rem"
        flexDirection={direction && direction}
        w={ w && w}
        bg={ bg && bg}
        m={ w && "0 auto"}
        p={ p && p}
  >
    {children}
  </Box>
}

export default GenericBox