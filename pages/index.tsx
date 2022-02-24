import { Box, Button, Flex, Heading, HStack, Link as ChakraLink, Center, Spacer, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Facebook from '../components/Facebook'
import Twitter from '../components/Twitter'
import Instagram from '../components/Instagram'
import PageAccent from '../components/PageAccent'


const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Brisilda Miftaraj</title>
        <meta name="description" content="Brisilda Miftaraj" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex h='120px' borderBottom='1px solid rgba(229, 229, 229, 0.76)' alignItems='center' p='20'>
        <Box><Image width={290} height={100} layout='fixed' src='/logo.png' alt='Logo' /></Box>
        <Spacer />
        <HStack spacing='20'>
          {['home', 'about', 'services', 'portfolio'].map(link => (
            <Link href={`/${link}`} key={link} passHref>
              <ChakraLink
                color='#ABA4A4'
                pos='relative'
                transition='all 300ms'
                fontSize='24px'
                fontFamily='Poppins'
                _hover={{
                  color: 'black',
                  _after: {
                    width: '140%',
                  }
                }}
                _after={{
                  content: '""',
                  bg: '#FFC13D',
                  position: 'absolute',
                  right: 0,
                  left: '-20%',
                  height: '4px',
                  width: '0',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  transition: 'all 300ms',
                }}
              >
                {link.toUpperCase()}
              </ChakraLink>
            </Link>
          ))}
          <HStack spacing='10'>
            <Box _hover={{ opacity: 0.5, cursor: 'pointer' }} >
              <Link href='/' passHref>
                <Facebook />
              </Link>
            </Box>
            <Box _hover={{ opacity: 0.5, cursor: 'pointer' }} >
              <Link href='/' passHref>
                <Twitter />
              </Link>
            </Box>
            <Box _hover={{ opacity: 0.5, cursor: 'pointer' }} >
              <Link href='/' passHref>
                <Instagram />
              </Link>
            </Box>
          </HStack>
          <Button
            fontFamily='Poppins'
            size='lg'
            colorScheme='brand'
            color='black'
            boxShadow="0px 10px 10px rgba(11, 7, 0, 0.33)"
            _focus={{
              boxShadow: "0px 10px 10px rgba(11, 7, 0, 0.33)"
            }}
            borderRadius='20px'
            textTransform='uppercase'
            fontWeight='bold'
          >
            Contact
          </Button>
        </HStack>
      </Flex>
      <Box as='main' pt='80px'>
        <HStack>
          <PageAccent />
          <Box maxW='583px'>
            <Heading fontWeight="bold" fontSize="37px" lineHeight="35px">HELLO I’M BRISILDA</Heading>
            <Heading fontWeight="bold" fontSize="56px" lineHeight="35px" color="#FFC13D" mt="32px" mb="63px">UI/UX DESIGNER</Heading>
            <Text fontWeight="bold" fontSize="18px" lineHeight="35px">
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Et lorem imperdiet quis
              aliquet eu gravida morbi volutpat sapien.
              Placerat in eu sapien elementum. Pharetra scelerisque
              euismod magnis duis ull
            </Text>
            <HStack pt='125px' spacing='10'>
              <Button
                fontFamily='Poppins'
                size='lg'
                color='brand.500'
                transition='opacity 300ms'
                _hover={{
                  opacity: .7,
                  transition: 'opacity 300ms'
                }}
                _active={{
                  color: 'black'
                }}
                bg='black'
                borderRadius='20px'
                textTransform='uppercase'
                fontWeight='bold'
              >
                Download CV
              </Button>
              <Button
                fontFamily='Poppins'
                size='lg'
                colorScheme='brand'
                color='black'
                borderRadius='20px'
                textTransform='uppercase'
                fontWeight='bold'
              >
                Hire me
              </Button>
            </HStack>
          </Box>
          <Spacer />
          <Box pr="41px">
            <Image width='500px' height='551px' src='/brisilda.png' alt='Me' />
          </Box>
        </HStack>
      </Box>

      <footer>
      </footer>
    </Box>
  )
}

export default Home
