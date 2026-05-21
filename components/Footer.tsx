'use client';

import {
  Box,
  Container,
  Typography,
  Stack,
  alpha,
} from '@mui/material';

export default function Footer() {
  return (
    <Box
      id="footer"
      component="footer"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: '#1f3f24',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={6}
          sx={{ justifyContent: 'space-between' }}
        >
          <Box sx={{ maxWidth: 400 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 2,
                letterSpacing: 1,
              }}
            >
              特定非営利活動法人
              <br />
              生活・就労支援サービス凪
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: (theme) => alpha(theme.palette.common.white, 0.7) }}
            >
              「暮らしの支援、未来を護る」を理念に、地域に根ざした包括的なサポートを提供します。
            </Typography>
          </Box>

          <Stack spacing={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              お問い合わせ
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: (theme) => alpha(theme.palette.common.white, 0.7) }}
            >
              北海道札幌市北区北25条西15丁目1-22
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: (theme) => alpha(theme.palette.common.white, 0.7) }}
            >
              TEL: 011-826-6065
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: (theme) => alpha(theme.palette.common.white, 0.7) }}
            >
              MAIL: info@oyanakiato-familar.com
            </Typography>
          </Stack>
        </Stack>

        <Box
          sx={{
            mt: 8,
            pt: 4,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: (theme) => alpha(theme.palette.common.white, 0.4) }}
          >
            © {new Date().getFullYear()} 特定非営利活動法人 生活・就労支援サービス凪. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
