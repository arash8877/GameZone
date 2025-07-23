import { Box, HStack, Image } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import logo from '../assets/logo.webp';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100%"
      zIndex="100"
      bg="#121212"
      boxShadow="sm"
    >
      <HStack paddingX="30px" paddingY="10px">
        <Link to="/">
          <Image src={logo} boxSize="60px" objectFit="cover" />
        </Link>
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </Box>
  );
};

export default Navbar;
