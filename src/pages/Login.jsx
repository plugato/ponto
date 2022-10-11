import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { useState } from 'react'
import { useLogin, useNotify } from 'react-admin'
 

const Login = () => {
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue('gray.100', 'gray.700')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const login = useLogin();
  const notify = useNotify();
  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <form
        onSubmit={async (event) => {
          event.preventDefault()
         
            login({ email, password }).catch(() =>
                notify('Invalid email or password')
            ) 
           
        }}>
        <Flex flexDirection="column" bg={formBackground} p={12} borderRadius={8} boxShadow="lg">
          <Heading mb={6}>Log In</Heading>
          <FormControl isRequired>
            <Input
              placeholder="08460903923@gazin.com.br"//08460903923
              type="email"
              variant="filled"
              mb={3}
              onChange={(event) => setEmail(event.currentTarget.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <Input
              placeholder="**********"
              type="password"
              variant="filled"
              mb={6}
              onChange={(event) => setPassword(event.currentTarget.value)}
            />
          </FormControl>
          <Button colorScheme="teal" mb={8} type="submit">
            Log In
          </Button>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="dark_mode" mb="0">
              Enable Dark Mode?
            </FormLabel>
            <Switch id="dark_mode" colorScheme="teal" size="lg" onChange={toggleColorMode} />
          </FormControl>
        </Flex>
      </form>
    </Flex>
  )
}

export default Login
