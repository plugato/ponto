import {
  Box, ChakraProvider, theme
} from '@chakra-ui/react'
import Login from './pages/Login'

import { Admin } from 'react-admin'
import Home from './pages/Home'
import authProvider from './providers/auth.provider'
 
 

export const App = () => (
  <ChakraProvider theme={theme}>
  <Box textAlign="center" fontSize="xl"> 
      <Admin loginPage={Login} authProvider={authProvider} dashboard={Home} >  
       {/* <Resource name="customers" {...List} /> 
       <Resource name="customers2" {...List} />  */}
      
      </Admin>
    </Box>
  </ChakraProvider>
)
