import { Box, Chip, Divider, Paper, Typography } from "@mui/material"
import { fetchApiData } from "../states/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../states/store";


export const SideBar = () => {
    const dispatch = useDispatch();
    const apiData = useSelector((state: RootState) => state.api.data);

    useEffect(() => {
        dispatch(fetchApiData() as any);
    }, [dispatch]);

    return (
        <Paper sx={{ width: '20%', bgcolor: 'background.paper' }} style={{ marginLeft: 30, marginBottom: 20 }}> 
            <Box>
                <Typography component="div" sx={{ flexGrow: 0 }} align="center">
                    <img src={apiData?.[0].image} alt="" style={{height:'auto', width: '50%', marginTop: 30, marginBottom: 30}}/>
                </Typography>
                <Typography>{apiData?.[0].title}</Typography>
                <Typography variant="caption" style={{ color: 'grey'}} align="center">{apiData?.[0].subtitle}</Typography>
                <Divider style={{marginTop: 20, marginBottom: 10}}/>
                {
                    apiData?.[0].tags.map(tag => {
                        return (
                            <Chip key={tag} label={tag} variant="outlined" sx={{borderRadius: 2, margin: 0.4, color: 'grey'}} />
                        )
                    })
                }
                <Divider style={{marginTop: 10}}/>
            </Box>
        </Paper>
    )   
}