'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material';

export default function Mission() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="h4"
              color="primary"
            >
              私たちの
              <br />
              ミッション
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 9 }}>
            <Typography variant="body1">
              私たちは、誰もが安心して暮らせる地域社会を目指し、生活・就労・制度利用に関する支援を行っています。<br />
              一人ひとりに寄り添い、自立と尊厳を大切にした支援を提供します。<br />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
