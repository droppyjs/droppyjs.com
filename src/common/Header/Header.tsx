import Image from 'next/image'

import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import { HeaderProps } from "./Header.types";

import { SiTwitter, SiGithub } from "react-icons/si";

import logo from "../../../public/logo.svg";

const Header = ({}: HeaderProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightMode = colorMode === "light";
  const isDarkMode = colorMode === "dark";


  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box sx={{paddingTop: '10px'}}>
            <Image src={logo} alt="droppyjs logo" height={'40px'} width={'140px'} />
          </Box>


          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Stack direction="row" spacing={1}>
                <Button as="a" href="https://twitter.com/droppyjs">
                  <Icon as={SiTwitter} color="#1DA1F2" />
                </Button>
                <Button as="a" href="https://github.com/droppyjs/droppy">
                  <Icon as={SiGithub} color="#000000" />
                </Button>
              </Stack>
              <Divider orientation='vertical' height="40px" padding={0} borderColor={isDarkMode ? "gray.600" : 'gray.300'}/>
              <Button onClick={toggleColorMode}>
                {isLightMode ? <MoonIcon /> : <SunIcon />}
              </Button>

            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
