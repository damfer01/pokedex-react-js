
import { AppSection, Main } from "./style"
import { Header } from "../Header";

export const AppLayout = ({
    Children,
}) => {

    return (
        <AppSection>
            <Header />

            <Main>{Children}</Main>
        </AppSection>

    );
};