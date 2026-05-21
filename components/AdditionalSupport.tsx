'use client';

import {
  Box,
  Chip,
  Container,
  Typography,
  Stack,
  alpha,
} from '@mui/material';

const items = [
  '成年後見制度・任意後見契約の支援',
  '終活支援（遺言作成・遺言執行）',
  '施設入所時の身元保証人・緊急連絡先の引き受け',
  '死後事務のご支援',
];

export default function AdditionalSupport() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={4} sx={{ alignItems: 'center' }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              textAlign: 'center',
              fontSize: { xs: '1.5rem', md: '2rem' },
            }}
          >
            司法書士だからこそ、人生のもしもにも丁寧に寄り添います。
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ textAlign: 'center', maxWidth: 500 }}
          >
            専門的な知見を活かし、将来への不安を解消するための様々なサポートを行っています。
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            useFlexGap
            sx={{
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {items.map((item) => (
              <Chip
                key={item}
                label={item}
                variant="outlined"
                sx={{
                  px: 3,
                  py: 3.5,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  fontWeight: 600,
                  color: 'primary.main',
                  borderColor: (theme) => alpha(theme.palette.primary.main, 0.3),
                  backgroundColor: 'background.paper',
                  '&:hover': {
                    backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.05),
                    borderColor: 'primary.main',
                  },
                }}
              />
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
