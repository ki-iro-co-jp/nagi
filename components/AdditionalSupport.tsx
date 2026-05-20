'use client';

import {
  Box,
  Chip,
  Container,
  Stack,
  Typography,
} from '@mui/material';

const items = [
  '成年後見',
  '終活支援',
  '身元保証',
  '死後事務',
];

export default function AdditionalSupport() {
  return (
    <Box>
      <Container maxWidth="md">
        <Typography
          variant="h5"
          sx={{
            mb: 4,
            textAlign: 'center',
          }}
        >
          追加支援
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
              color="primary"
              variant="outlined"
              sx={{
                px: 2,
                py: 3,
                fontSize: 16,
              }}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
