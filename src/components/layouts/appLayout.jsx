import { Header } from "../Header";
import { AppSection, Main } from "./styles";

export const AppLayout = ({
  children,
}) => {
  return (
    <AppSection>
      <Header />

      <Main>{children}</Main>
    </AppSection>
  );
};
