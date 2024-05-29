import {TextField, type TextFieldProps} from "@mui/material";
import {CustomInput} from "./style";


const Input = ({label, ...props}: TextFieldProps) => {
    return (
        <CustomInput>
            <label>{label}</label>
            <TextField
                fullWidth
                {...props}
            />
        </CustomInput>

    );
};

export default Input;
