import { AppBar, Toolbar, Typography } from "@mui/material";
import stackline from '../stackline_logo.svg'


export const Heading = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: 'navy', marginBottom: 30 }}>
            <Toolbar>
                <Typography component="div" sx={{ flexGrow: 1 }} align="left">
                    <img src={stackline} alt="" style={{height:'20px'}}/>
                </Typography>
            </Toolbar>
        </AppBar>
    )
};