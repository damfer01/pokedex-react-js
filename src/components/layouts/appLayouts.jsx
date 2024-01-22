
import { AppSection, Main } from "./style"
import { Header } from "../Header";

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