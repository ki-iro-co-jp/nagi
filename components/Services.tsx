'use client';

import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
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
    <Box>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            mb: 6,
            textAlign: 'center',
          }}
        >
          活動内容
        </Typography>

        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid
              key={service.title}
              size={{ xs: 12, md: 6 }}
            >
              <Card
                sx={{
                  height: '100%',
                  boxShadow:
                    '0 10px 30px rgba(0,0,0,.06)',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      color: 'primary.main',
                      mb: 2,
                    }}
                  >
                    {service.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    gutterBottom
                  >
                    {service.title}
                  </Typography>

                  <Typography color="text.secondary">
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
