import { Typography } from "@mui/material";
import Stack from '@mui/material/Stack';

function ItemListContainer(props) {
    return (
        <Stack justifyContent={"center"} alignItems={"center"} >
            <Typography sx={{ fontSize: "10vh", padding:"5%"}}>
                Prueba
            </Typography>
        </Stack>
    );
}
export default ItemListContainer;