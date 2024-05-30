import {AuthContainer, AuthPaper, Title, TopTitle} from "./style";
import Input from "../../components/input-controller";
import {Box, Button, Grid} from "@mui/material";
import {useForm} from "react-hook-form";
import axios from "axios";

const Auth = () => {
    const form = useForm()

    async function onSubmit(data: any) {
        try {
            const response = await axios.post('https://fakestoreapi.com/auth/login', data);
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <AuthContainer>

            <AuthPaper>
                <TopTitle>Welcome back!</TopTitle>
                <Title>Login to your account</Title>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <Box my='20px'>
                        <Grid container spacing={'15px'}>
                            <Grid item xs={12}>
                                <Input
                                    name='username'
                                    control={form.control}
                                    label='Username'
                                    placeholder='Enter username'
                                    rules={{
                                        required: 'Username is required',
                                        minLength: {value: 3, message: 'Username must be at least 3 characters long'}
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Input
                                    name='password'
                                    control={form.control}
                                    label='Password'
                                    placeholder='Enter password'
                                    rules={{
                                        required: 'Password is required',
                                        minLength: {value: 3, message: 'Username must be at least 3 characters long'}
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                    <Button type='submit' fullWidth variant='contained'>Login</Button>
                </form>
            </AuthPaper>
        </AuthContainer>
    );
};

export default Auth;
