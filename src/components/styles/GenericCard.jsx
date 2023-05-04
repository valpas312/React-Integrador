//SE CREO UNA CARD GENERICA PARA PODER REUTILIZARLA EN TODA LA APLICACION
import { Card } from '@chakra-ui/react'

// eslint-disable-next-line react/prop-types
const GenericCard = ({children, minW, maxW, bg, display, alignItems, justifyContent}) => {
  return <Card display={ display && display } justifyContent={ justifyContent && justifyContent } alignItems={ alignItems && alignItems } minW={ minW ? minW : "300px"}  maxW={maxW ? maxW : "25vw"} h="100%" shadow="md" _hover={{shadow:"xl"}} transition='all 0.2s cubic-bezier(.08,.52,.52,1)' bg={ bg ? bg : "#f1f1f1" }>
    {children}
  </Card>
}

export default GenericCard