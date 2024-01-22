import { Type } from "../Type"
import { Card, Column, Row, Image , Name } from "./style"


export const PokemonCard = ({
    pokemon,
 }) =>{
    
    return (
        <Card $type={pokemon?.types[0].name}>
            <Row>
                <Column>
                <Image src={pokemon.imageUrl}/>
                </Column>

                <Column>
                {
                    pokemon?.types.map((type) =>(
                        <Type key={type.name} $type={type.name}>{type.name}</Type>
                    ))
                }
                </Column>
            </Row>

            <Row>
                <Name>{pokemon.name}</Name>
            </Row>
        </Card>
    )

}