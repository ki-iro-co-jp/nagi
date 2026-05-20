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
      sx={{
        background:
          'linear-gradient(180deg,#eef5ef 0%,#f8f7f2 100%)',
        py: 12,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Typography
            sx={{
              color: 'primary.main',
              letterSpacing: 3,
            }}
          >
            暮らしの支援、未来を護る
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              lineHeight: 1.3,
            }}
          >
            NPO法人
            <br />
            生活・就労支援サービス凪
          </Typography>

          <Typography
            color="text.secondary"
            sx={{ maxWidth: 650 }}
          >
            地域に寄り添い、
            生活・就労・制度利用を
            包括的にサポートします。
          </Typography>

          {/* <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              size="large"
            >
              ご相談はこちら
            </Button>

            <Button
              variant="outlined"
              size="large"
            >
              活動内容を見る
            </Button>
          </Stack> */}
        </Stack>
      </Container>
    </Box>
  );
}
