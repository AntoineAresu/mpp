import React from 'react';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import HotelIcon from "@mui/icons-material/Hotel";
import {Typography} from "@mui/material";
import HomeWorkIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import Box from "@mui/material/Box";
import Link from "../../../Components/Link";

interface Props {
  center: any;
}

const CenterCard: React.FC<Props> = ({center}) => (
  <Box mb={1} mt={1}>
    <Paper elevation={4} key={center.id}>
      <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
        <Grid item xs={4}>
          <Stack direction="column" justifyContent="center"
                 alignItems="center" spacing={2}>
            <HotelIcon/>
            <Typography textAlign="center">{center.name}</Typography>
          </Stack>
        </Grid>
        <Grid container  xs={8} direction="column" alignItems="end" justifyContent="center">
          {!center.permanence ? null :
            <Link
              href={`/centers/${center.id}/notes`}
              text="Permanences CFN"
              Icon={PeopleIcon}/>
          }
          {!center.workshop ? null :
            <Link
              href={`/centers/${center.id}/workshops`}
              text="Acc. numérique (individuel ou collectif)"
              Icon={HomeWorkIcon}/>
          }
        </Grid>
      </Grid>
    </Paper>
  </Box>
);

export default CenterCard