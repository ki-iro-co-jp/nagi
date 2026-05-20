'use client';

import {
  Box,
  Container,
  Divider,
  Typography,
} from '@mui/material';

export default function Footer() {
  return (
    <Box >
      <Container maxWidth="lg">
        <Typography
          variant="h6"
          sx={{
            mb: 3,
          }}
        >
          NPO法人 生活・就労支援サービス凪
        </Typography>

        <Divider
          sx={{
            borderColor:
              'rgba(255,255,255,.2)',
            mb: 3,
          }}
        />

        <Typography>
          北海道札幌市○○
        </Typography>

        <Typography>
          TEL / FAX / MAIL
        </Typography>
      </Container>
    </Box>
  );
}
