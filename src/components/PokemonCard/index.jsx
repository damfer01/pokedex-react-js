import { Spacing } from "../Spacing";
import { Stats } from "../Stats";
import { Type } from "../Type";
import { Card, Column, Image, Name, Row } from "./styles";

export const PokemonCard = ({
  isGrid,
  pokemon,
}) => {
  return isGrid
    ? (
      <Card $isGrid={isGrid} $type={pokemon?.types[0].name}>
        <Row>
          <Column>
            <Image $isGrid={isGrid} src={pokemon.imageUrl} />
          </Column>

          <Column>
            {
              pokemon?.types.map((type) => (
                <Type key={type.name} $type={type.name}>{type.name}</Type>
              ))
            }
          </Column>
        </Row>

        <Name>{pokemon.name}</Name>
      </Card>
    ) : (
      <Card $isGrid={isGrid} $type={pokemon?.types[0].name}>
        <Spacing $right={8}>
          <Image $isGrid={isGrid} src={pokemon.imageUrl} />
        </Spacing>

        <Column>
          <Spacing $bottom={8}>
            <Name>{pokemon.name}</Name>
          </Spacing>

          <Row>
            <Column>
              {
                pokemon?.types.map((type) => (
                  <Type key={type.name} $type={type.name}>{type.name}</Type>
                ))
              }
            </Column>

            <Column $justify="flex-end">
              {
                pokemon.stats
                  .filter((stats) => ['HP', 'ATTACK', 'DEFENSE'].includes(stats.name))
                  .map((stats) => (
                    <Stats
                      key={stats.name}
                      type={pokemon?.types[0].name}
                      label={stats.name}
                      value={stats.value}
                    />
                  ))
              }
            </Column>
          </Row>
        </Column>
      </Card>
    );
};
