import styled from "styled-components"
import { abvFormatter, textShortener } from "../../utils/beer";
import { Anchor } from "../UI/Card/index";
import { Flex } from "../UI/Flex/index"
import { Img } from "../UI/Img/index"
import { Text } from "../UI/Text/index"

interface CardProps {
  name: string;
  description: string;
  abv: number;
  category?: string;
  country?: string;
  website?: string;
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--secondary);
  border-radius: 10px;
  padding: 24px;
  width: 100%;
  max-width: 600px;

  p {
    color: var(--gray-white);
  }

  @media(max-width: 768px) {
    img {
      height: 150px;
    }
  }
`

export default function Card(props: CardProps) {
  return (
    <CardContainer>
      <Flex flexDirection="column" alignItems="center">

        <Text mb="16px" variant="h1" textAlign="center">{ props.name }</Text>

        <Flex>
          <Img
            height="180px"
            src="images/beer.png"
            mr="32px"
          />

          <Flex flexDirection="column" alignItems="center">
            <Flex
              justifyContent="center"
              backgroundColor="var(--red)"
              width="200px"
              borderRadius="50px"
              p="8px"
              mt="16px"
            >
              <Text>ABV: { abvFormatter(props.abv) }</Text>
            </Flex>

            <Flex
              justifyContent="center"
              backgroundColor="var(--blue)"
              width="200px"
              borderRadius="50px"
              p="8px"
              mt="16px"
            >
            <Text textAlign="center">Category: { props.category ?? 'Unavailable' }</Text>
            </Flex>

            <Flex
              justifyContent="center"
              backgroundColor="var(--green)"
              width="200px"
              borderRadius="50px"
              p="8px"
              mt="16px"
            >
              <Text>{ props.country }</Text>
            </Flex>
          </Flex>
        </Flex>

      </Flex>

      { props.website &&
        <Anchor target="_blank" textDecoration="none" href={props.website} mt="8px">
         <Text color="var(--gray-white)" mt="16px" variant="h4">Website: { props.website }</Text>
        </Anchor>
      }

      { props.description &&
        <Text textAlign="center" variant="h5" mt="8px" >
          DESCRIPTION: { textShortener(props.description) }
        </Text>
      }
    </CardContainer>
  )
}
