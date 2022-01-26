import styled from 'styled-components';
import CharacterCard from '../../components/CharacterCard';

function Character({ character }) {
  return (
    <CharacterContainer>
      <StarfieldLeft />
      <CharacterCard character={character} />
      <StarfieldRight />
    </CharacterContainer>
  );
}

// EXECUTED ON SERVER
export async function getStaticProps(context) {
  const { id } = context.params;

  const url = `https://akabab.github.io/starwars-api/api/id/${id}`;
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      character: data,
    },
  };
}

export async function getStaticPaths() {
  const url = 'https://akabab.github.io/starwars-api/api/all.json';
  const response = await fetch(url);
  const data = await response.json();

  const paths = data.map((character) => `/character/${character.id}.json`);
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export default Character;

const CharacterContainer = styled.div`
  padding: 40px;
  margin-top: 200px;
`;

const StarfieldLeft = styled.div`
  position: fixed;
  width: 100px;
  top: 0;
  background-repeat: repeat-y;
  left: 0;
  height: 1700px;
  background-position: left center;
  background-size: 100% auto;
  background-image: url(https://static-mh.content.disney.io/starwars/assets/background/bg_starsL-fd4661a3ccea.jpg);
`;

const StarfieldRight = styled.div`
  position: fixed;
  width: 100px;
  top: 0;
  background-repeat: repeat-y;
  right: 0;
  height: 1700px;
  background-position: right center;
  background-size: auto 100%;
  background-image: url(https://static-mh.content.disney.io/starwars/assets/background/bg_starsR-655c85e404d4.jpg);
`;
