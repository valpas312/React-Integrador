//SE CREO UN BOX GENERICO PARA PODER REUTILIZARLO EN TODA LA APLICACION
import { Box } from "@chakra-ui/react"

// eslint-disable-next-line react/prop-types
const GenericBox = ({children, direction, w}) => {
  return <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap="2rem"
        flexDirection={direction ? direction : null}
        w={ w ? w : null}
  >
    {children}
  </Box>
}

export default GenericBox