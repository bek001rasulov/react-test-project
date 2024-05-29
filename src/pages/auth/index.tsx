import {AuthContainer, AuthPaper, Title, TopTitle} from "./style";
import Input from "../../components/input-controller";
import {Box, Grid} from "@mui/material";

const Auth = () => {
    return (
        <AuthContainer>

            <AuthPaper>
                <TopTitle>Welcome back!</TopTitle>
                <Title>Login to your account</Title>
                <Box my='20px'>
                    <Grid container spacing={'15px'}>
                        <Grid item xs={12}>
                            <Input
                                label='Username'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Input
                                label='Password'
                            />
                        </Grid>
                    </Grid>
                </Box>
            </AuthPaper>
        </AuthContainer>
    );
};

export default Auth;
