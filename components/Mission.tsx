'use client';

import {
  Box,
  Container,
  Typography,
  Stack,
  Grid,
} from '@mui/material';

export default function Mission() {
  return (
    <Box
      id="mission"
      component="section"
      sx={{
        py: { xs: 8, md: 15 },
        backgroundColor: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                color: 'primary.main',
                fontWeight: 800,
                fontSize: { xs: '2rem', md: '2.5rem' },
                lineHeight: 1.4,
              }}
            >
              私たちの
              <br />
              ミッション
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Stack spacing={3}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  color: 'text.primary',
                  lineHeight: 2,
                }}
              >
                私たちは、誰もが安心して暮らせる地域社会を目指し、生活・就労・制度利用に関する支援を行っています。
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  color: 'text.primary',
                  lineHeight: 2,
                }}
              >
                多様な課題を抱える一人ひとりに寄り添い、自立と尊厳を大切にした包括的なサポートを提供することで、共に歩むパートナーでありたいと考えています。
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
