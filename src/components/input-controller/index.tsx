import {TextField} from "@mui/material";
import {CustomInput, ErrorText} from "./style";
import {Controller} from "react-hook-form";


const Input = ({label, control, name, rules, ...props}: any) => {
    return (
        <CustomInput>
            <label>{label}</label>
            <Controller
                control={control}
                name={name}
                defaultValue=''
                rules={rules}
                render={({field, fieldState}) => (
                    <>
                        <TextField
                            {...field}
                            {...props}
                            fullWidth
                            error={fieldState.invalid}
                        />
                        {
                            fieldState.invalid && (
                                <ErrorText>
                                    {fieldState?.error?.message}
                                </ErrorText>
                            )
                        }
                    </>

                )}
            />

        </CustomInput>

    );
};

export default Input;
