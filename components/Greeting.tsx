'use client';

import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  Stack,
  Divider,
} from '@mui/material';
import Image from 'next/image';

export default function Greeting() {
  return (
    <Box
      id="greeting"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #d8c6b5 0%, #efe7df 100%)',
      }}
    >
      <Container maxWidth="md">
        <Card
          sx={{
            borderRadius: { xs: 1, md: 2 },
            boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
            overflow: 'visible',
            position: 'relative',
          }}
        >
          <CardContent sx={{ p: { xs: 4, md: 8 } }}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
              <Box sx={{ flexShrink: 0, width: { xs: '100%', md: 280 }, textAlign: 'center' }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '1 / 1',
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  }}
                >
                  <Image
                    src="/images/leader.jpg"
                    alt="代表理事 渡邉 護"
                    fill
                    sizes="(max-width: 768px) 100vw, 280px"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
                <Box sx={{ mt: 3, textAlign: 'center', display: { xs: 'block', md: 'none' } }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    代表理事 渡邉 護
                  </Typography>
                </Box>
              </Box>

              <Stack spacing={4} sx={{ flexGrow: 1 }}>
                <Box>
                  <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: '1.75rem', md: '2.25rem' },
                    }}
                  >
                    代表挨拶
                  </Typography>
                  <Divider
                    sx={{
                      width: 60,
                      height: 4,
                      bgcolor: 'primary.main',
                      borderRadius: 2,
                      border: 'none',
                    }}
                  />
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.primary',
                    whiteSpace: 'pre-wrap',
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    lineHeight: 2,
                  }}
                >
                  私たちNPO法人「生活・就労支援サービス凪」は、「暮らしの支援、未来を護る」という理念のもと、皆さまが自分らしく、安心して暮らせる社会づくりのお手伝いをしています。
                  {'\n\n'}
                  私は司法書士として、また「親なきあと問題相談室ファミリア」の運営を通じて、障がいのある方々や高齢者のご家族が抱えるさまざまな課題に真摯に向き合ってきました。
                  {'\n\n'}
                  これからも、その経験を活かし、一人ひとりの生活がより良いものとなるよう、温かく寄り添う支援を提供してまいります。
                  {'\n\n'}
                  当法人は、支援を必要とする方々が、どんな小さなことでも気軽に相談できる場所でありたいと考えています。
                  {'\n\n'}
                  困ったときには、どうか遠慮なく私たちに声をかけてください。
                  共に課題を解決し、あなたらしい未来を守るため、私たちは全力でサポートします。
                  {'\n\n'}
                  どうぞお気軽にお問い合わせください。
                  私たちと一緒に、安心して過ごせる暮らしを築いていきましょう。
                </Typography>

                <Box sx={{ pt: 2, textAlign: 'right', display: { xs: 'none', md: 'block' } }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    特定非営利活動法人 生活・就労支援サービス凪
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    代表理事 渡邉 護
                  </Typography>
                </Box>
                <Box sx={{ pt: 2, textAlign: 'right', display: { xs: 'block', md: 'none' } }}>
                   <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    特定非営利活動法人 生活・就労支援サービス凪
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
