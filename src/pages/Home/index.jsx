import { Rows, SquaresFour } from "@phosphor-icons/react";
import { SelectButton } from "../../components/SelectButton";
import { GridView, Section, SelectGridView } from "./styles";
import { useEffect, useState } from "react";
import { PokemonCard } from "../../components/PokemonCard";
import { useStore } from "../../store";
import { getAllPokemon } from "../../services/pokemonServices";

export default function Home() {
  const {
    user,
  } = useStore();

  const [selectedTypeList, setSelectedTypeList] = useState('grid');

  const [page, setPage] = useState(1);

  const [pokemonList, setPokemonList] = useState([]);

  const loadPokemon = async () => {
    const {
      success,
      results
    } = await getAllPokemon(user.token, page, 10);

    if(success) setPokemonList((value) => [...value, ...results]);
  };

  useEffect(() => {
    const gridViewList = document.getElementById('grid-view-list');

    if( gridViewList ) {
      gridViewList.addEventListener('scroll', () => {
        if (gridViewList.scrollTop + gridViewList.clientHeight >= gridViewList.scrollHeight) {
          setPage(( value ) => value + 1 );
        }
      });
    }

    return () => gridViewList?.removeEventListener('scroll', () => {});
  }, []);

  useEffect(() => {
    loadPokemon();
  }, [page]);

  return (
    <Section>
      <SelectGridView>
        <SelectButton
          $selected={selectedTypeList === 'grid'}
          onClick={() => setSelectedTypeList('grid')}
        >
          <SquaresFour weight="fill"/>
        </SelectButton>

        <SelectButton
          $selected={selectedTypeList === 'list'}
          onClick={() => setSelectedTypeList('list')}
        >
          <Rows weight="fill"/>
        </SelectButton>
      </SelectGridView>

      <GridView id="grid-view-list" $isGrid={selectedTypeList === 'grid'}>
        {
          pokemonList.map((pokemon) => (
            <PokemonCard isGrid={selectedTypeList === 'grid'} key={pokemon.id} pokemon={pokemon} />
          ))
        }
      </GridView>
    </Section>
  );
};
