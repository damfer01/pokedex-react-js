import { Controller } from "react-hook-form";
import { ErrorMassage, InputView, Label } from "./styles"

export const Input = ({
    label,
    name,
    control
}) => {
    return (

        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (

                <InputView isError={Boolean (error)}>
                    <Label>{label}</Label>


                    <input placeholder={label}
                        {...field}
                    />

                    {
                        error && (
                            <ErrorMassage>{error.message}</ErrorMassage>
                        )

                    }
                </InputView>
            )}

        />


    );



};