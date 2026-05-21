'use client';

import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  Stack,
  alpha,
  Grid,
} from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import ComputerIcon from '@mui/icons-material/Computer';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';

const services = [
  {
    title: '定期的な面談・相談',
    icon: <GroupsIcon fontSize="large" />,
    text: '日常生活や就労に関する悩みを継続的にサポートします。',
  },
  {
    title: 'デジタル支援',
    icon: <ComputerIcon fontSize="large" />,
    text: 'スマホ・PC・オンライン手続き等を支援します。',
  },
  {
    title: '生活支援',
    icon: <HomeIcon fontSize="large" />,
    text: '買い物代行や、財産管理に関するご相談も承ります。',
  },
  {
    title: '行政手続きの同行',
    icon: <AssignmentIcon fontSize="large" />,
    text: '生活保護の申請など、必要な手続きをご一緒に行います。',
  },
];

export default function Services() {
  return (
    <Box
      id="services"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            活動内容
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto' }}
          >
            一人ひとりの状況に合わせ、多角的なサポートを提供しています。
          </Typography>
        </Stack>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {services.map((service) => (
            <Grid
              key={service.title}
              size={{ xs: 12, sm: 6 }}
            >
              <Card
                sx={{
                  height: '100%',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 48px rgba(0,0,0,0.08)',
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 4, md: 5 } }}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: 4,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
                      color: 'primary.main',
                      mb: 3,
                    }}
                  >
                    {service.icon}
                  </Box>

                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ mb: 2 }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ lineHeight: 1.7 }}
                  >
                    {service.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
