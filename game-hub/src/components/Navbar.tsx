import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/console.png'

const Navbar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize={'60px'}></Image>
        <Text>Navbar</Text>
    </HStack>
)
}

export default Navbar