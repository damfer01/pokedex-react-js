
import { Controller } from "react-hook-form";
import { ErrorMessage, IconButton, InputRow, InputView, Label } from "./styles";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { useState } from "react";

export const Input = ({
  label,
  control,
  name,
  placeholder,
  type = 'text',
}) => {
  const [show, setShow] = useState(false);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: {error}}) => (
        <InputView >
          <Label>{label}</Label>

          <InputRow $error={!!error}>
            <input
              placeholder={placeholder ?? label}
              type={!show ? type : 'text'}
              {...field}
            />

            {
              type === 'password' && (
                <IconButton onClick={() => setShow((value) => !value)} type="button" $error={!!error}>
                  {
                    !show
                      ? (<Eye />)
                      : (<EyeSlash />)
                  }
                </IconButton>
              )
            }
          </InputRow>

          {
            error && (
              <ErrorMessage>{error.message}</ErrorMessage>
            )
          }
        </InputView>
      )}
    />
  );
};
