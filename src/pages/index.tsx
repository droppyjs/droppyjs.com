import {
  Container,
  Text,
  GridItem,
  Heading,
  VStack,
  Grid,
  Button,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Image from "next/image";

import Header from "../common/Header/Header";
import Highlight from "../common/Highlight/Highlight";

import goingUp from '../../public/illustrations/undraw_going_up_re_86kg.svg';

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="droppy - droppyjs.com" />

      <Header />

      <VStack paddingTop={5}>
        <Container maxW="container.xl">
          <Grid templateColumns="repeat(2, 1fr)" gap={6} width="100%">
            <GridItem>
              <Heading paddingTop={100}>
                This is <Highlight>droppy</Highlight>
              </Heading>
              <Text fontSize="lg">
                an open-source self-hosted file storage server with a web
                interface and capabilities to edit files and view media directly
                in the browser. It is particularly well-suited to be run on
                low-end hardware like the Raspberry Pi.
              </Text>
              <br />
              <Button as="a" colorScheme={"blue"} href="https://github.com/droppyjs/droppy" >View on GitHub</Button>
            </GridItem>
            <GridItem>
              <Image src={goingUp} alt="a" />
            </GridItem>
          </Grid>
        </Container>
      </VStack>
    </>
  );
};

export default Home;
