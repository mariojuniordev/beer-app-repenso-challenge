import { useEffect, useMemo, useState } from "react"
import styled from "styled-components";
import Card from "../components/Card/index";
import SortButton from "../components/SortButton/index";
import { Flex } from "../components/UI/Flex/index";
import { Heading } from "../components/UI/Heading/index";
import { Input } from "../components/UI/Input/index";
import { Text } from "../components/UI/Text/index";
import { beerData } from "../dtos/beerData";
import { api } from "../services/api"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
`

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media(max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`

const SortButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 32px;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`

export default function Main() {
  const [beerData, setBeerData] = useState<beerData[] | null>(null);
  const [value, setValue] = useState('');
  const [alphabeticalSortActive, setAlphabeticalSortActive] = useState(false);
  const [abvSortActive, setAbvSortActive] = useState(false);

  const aplhabeticalSortText = alphabeticalSortActive ? "undo alphabetical sorting" : "sort in aplhabetical order";
  const abvSortText = abvSortActive ? "undo abv sorting" : "sort from smaller to bigger abv";

  useEffect(() => {
    api.get('/random/50')
    .then(response => setBeerData(response.data))
  }, []);

  function filterData(data: beerData[] | null, filter: string) {
    return data?.filter((it) => it.name?.toLowerCase().includes(filter.toLowerCase()));
  }

  const filteredData = useMemo(() => {
    let newData = filterData(beerData, value);

    if (alphabeticalSortActive) {
      newData.sort((a, b) => {
        const nameA = a.name;
        const nameB = b.name;

        if (nameA < nameB) {
          return -1;
        }

        if (nameA > nameB) {
          return 1;
        }

        return 0;
      })
    }

    if (abvSortActive) {
      newData.sort((a, b) => {
        return a.abv - b.abv
      })
    }

    return newData;
  }, [beerData, value, alphabeticalSortActive, abvSortActive]);

  console.log(filteredData);

  if (!beerData) {
    return (
      <Flex alignItems="center" justifyContent="center" height="100vh">
        <Heading color="var(--gray-white)" textAlign="center">Loading...</Heading>
      </Flex>
    )
  }

  return (
    <Container>
      <Heading color="var(--gray-white)" textTransform="uppercase" variant="h1" size="50px">
        beer app
      </Heading>
      <Text mt="48px" color="var(--gray-white)" textTransform="capitalize">
        powered by beer of my dreams
      </Text>

        <Input
          mt="48px"
          mb="16px"
          height="64px"
          width="100%"
          maxWidth="400px"
          borderRadius="50px"
          p="16px"
          placeholder="Search by beer name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <SortButtonContainer>
          <SortButton
              label={aplhabeticalSortText}
              onClick={() => setAlphabeticalSortActive(!alphabeticalSortActive)}
              active={alphabeticalSortActive}
           />

          <SortButton
            label={abvSortText}
            onClick={() => setAbvSortActive(!abvSortActive)}
            active={abvSortActive}
          />
        </SortButtonContainer>

      <CardsContainer>
        {filteredData?.map((item, index) =>
          <Card
            key={index}
            name={item.name}
            description={item.description}
            abv={item.abv}
            category={item.category}
            country={item.country}
            website={item.website}
          />
        )}
      </CardsContainer>
    </Container>
  )
}
