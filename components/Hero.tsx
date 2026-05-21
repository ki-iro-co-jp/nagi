'use client';

import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from '@mui/material';

export default function Hero() {
  return (
    <Box
      id="hero"
      component="section"
      sx={{
        background: 'linear-gradient(180deg, #eef5ef 0%, #f8f7f2 100%)',
        pt: { xs: 8, md: 12 },
        pb: { xs: 10, md: 15 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={{ xs: 4, md: 5 }}>
          <Box>
            <Typography
              component="span"
              sx={{
                color: 'primary.main',
                letterSpacing: 4,
                fontWeight: 700,
                fontSize: { xs: '0.875rem', md: '1rem' },
                display: 'block',
                mb: 2,
              }}
            >
              暮らしの支援、未来を護る
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                fontWeight: 800,
                lineHeight: { xs: 1.2, md: 1.3 },
                mb: 3,
                wordBreak: 'keep-all',
              }}
            >
              NPO法人
              <br />
              生活・就労支援サービス
              <Typography
                component="span"
                variant="inherit"
                sx={{ color: 'primary.main' }}
              >
                凪
              </Typography>
            </Typography>

            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: 640,
                fontWeight: 400,
                lineHeight: 1.6,
                fontSize: { xs: '1rem', md: '1.25rem' },
              }}
            >
              地域に寄り添い、生活・就労・制度利用を
              包括的にサポートします。
            </Typography>
          </Box>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
          >
            <Button
              variant="contained"
              size="large"
              disableElevation
              component="a"
              href="https://oyanakiato-familiar.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.1rem',
              }}
            >
              ご相談はこちら
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
