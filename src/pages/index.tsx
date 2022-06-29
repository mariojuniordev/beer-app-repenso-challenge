import Head from "../../node_modules/next/head";
import { Flex } from '../components/UI/Flex/index';
import { Heading } from '../components/UI/Heading/index';
import Main from "../screens/Main";

const Home: React.FC = () =>  {
  return (
   <div>
      <Head>
        <title>HomePage</title>
      </Head>

      <Main/>
   </div>
  )
}

export default Home;
