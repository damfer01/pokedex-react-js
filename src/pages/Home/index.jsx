import { Rows, SquaresFour } from "@phosphor-icons/react";
import { SelectionButton } from "../../components/SelectButton";
import { GridView, Section, SelectGridView } from "./style";
import { useEffect, useState } from "react";
import { PokemonCard } from "../../components/PokemonCard";
import { useStore } from '../../store'
import { getAllPokemon } from "../../service/PokemonService";


export default function Home() {
    const {
        user,
    } = useStore();

    const [selectedTypeList, setSelectedTypeList] = useState('grid');

    const [pokemonList, setPokemonList] = useState([]);
    const loadPokemon = async () => {
        const {
            success,
            results,
        } = await getAllPokemon(user.token, 1, 100);

        if (success) setPokemonList(results);
    }
    useEffect(() => {
        loadPokemon();
    }, []);

    return (
        <Section>
            <SelectGridView>
                <SelectionButton $selected={selectedTypeList === 'grid'}
                    onClick={() => setSelectedTypeList('grid')}
                >

                    <SquaresFour weight="fill" />
                </SelectionButton>


                <SelectionButton $selected={selectedTypeList === 'list'}
                    onClick={() => setSelectedTypeList('list')}
                >
                    <Rows weight="fill" />
                </SelectionButton>
            </SelectGridView>
            <GridView $isGrid={selectedTypeList === 'grid'} >
                {
                    pokemonList.map((pokemon) => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    ))
                }

            </GridView>
        </Section>
    )
}