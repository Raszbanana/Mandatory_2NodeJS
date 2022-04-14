import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const CLIENT_ID =
  '163317577937-is6f9om56to5rqmgoma82ip4u08i1h3m.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN =
'1//04zrO4hgnPU5VCgYIARAAGAQSNwF-L9Ir7-DscwIjtnir8xzl7RZbNLcYrXpjzAtZQYLdZ4KEy0h2xJb5t3fzyJjoRU_TcAv9Bpc';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refreshToken: REFRESH_TOKEN });
// console.log(oAuth2Client);
// console.log(oAuth2Client.getAccessToken())

async function sendMail() {
  try {
    // const access = await oAuth2Client.getAccessToken();
    const access = 'ya29.A0ARrdaM_WWktuO20WEhcOIXl_2N5t6Sl51E5339qg7aSHX9BTi0P8Yx-dm7sCgD7VVnBE8NLUBAikJzCuRD0HUyjXy0ZM0uGbnedN5WkHkTwWU9Kf5Ng_DrpMCsWu3XqMAzrSTZTnGzOiwUZBzP81GokLGlMn'
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'bigboimailman@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: access,
      },
    });
    const mailOptions = {
      from: 'TEST<3 <bigboimailman@gmail.com>',
      to: 'niko.hochloff@gmail.com',
      subject: 'hello from api',
      text: 'Hello from api <3',
      html: '<h1>Boi</h1>',
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

sendMail().then(result => {
  console.log(result)          
})
.catch(error => {
    console.log(error.message)
})
