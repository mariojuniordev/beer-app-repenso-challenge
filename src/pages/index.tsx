import Head from "../../node_modules/next/head";
import { Flex } from '../components/UI/Flex/index';
import { Heading } from '../components/UI/Heading/index';

const Home: React.FC = () =>  {
  return (
   <div>
      <Head>
        <title>HomePage</title>
      </Head>

      <main>
        <Flex flexDirection={'row'} justifyContent={'center'} height={'100vh'} width={'100vw'}>
          <Heading fontWeight={700} variant={'h1'}>This is a NextJS + Styled Components Template!</Heading>
        </Flex>
      </main>
   </div>
  )
}

export default Home;
