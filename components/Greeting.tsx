'use client';

import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
} from '@mui/material';

export default function Greeting() {
  return (
    <Box
      sx={{
        background:
          'linear-gradient(180deg,#d8c6b5 0%,#efe7df 100%)',
      }}
    >
      <Container maxWidth="md">
        <Card
          sx={{
            borderRadius: 4,
            boxShadow:
              '0 10px 40px rgba(0,0,0,.08)',
          }}
        >
          <CardContent sx={{ p: 5 }}>
            <Typography
              variant="h5"
              sx={{
                mb: 3,
              }}
            >
              代表挨拶
            </Typography>

            <Typography>
              私たちNPO法人「生活・就労支援サービス凪」は、「暮らしの支援、未来を護る」という理念のもと、皆さまが自分らしく、安心して暮らせる社会づくりのお手伝いをしています。<br />
              私は司法書士として、また「親なきあと問題相談室ファミリア」の運営を通じて、障がいのある方々や高齢者のご家族が抱えるさまざまな課題に真摯に向き合ってきました。<br />
              これからも、その経験を活かし、一人ひとりの生活がより良いものとなるよう、温かく寄り添う支援を提供してまいります。<br />
              当法人は、支援を必要とする方々が、どんな小さなことでも気軽に相談できる場所でありたいと考えています。<br />
              困ったときには、どうか遠慮なく私たちに声をかけてください。<br />
              共に課題を解決し、あなたらしい未来を守るため、私たちは全力でサポートします。<br />
              どうぞお気軽にお問い合わせください。<br />
              私たちと一緒に、安心して過ごせる暮らしを築いていきましょう。
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
