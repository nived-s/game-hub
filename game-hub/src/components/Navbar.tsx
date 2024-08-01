import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/console.png";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent={'space-between'} padding={'10px'}>
      <Image src={logo} boxSize={"60px"}></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
