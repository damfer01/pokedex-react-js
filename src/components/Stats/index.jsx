import { StatsLabel, StatsValue, StatsView } from "./styles";

export const Stats = ({
  type,
  label,
  value,
}) => {
  return (
    <StatsView>
      <StatsLabel>{label}</StatsLabel>

      <StatsValue $type={type}>{value}</StatsValue>
    </StatsView>
  );
};
