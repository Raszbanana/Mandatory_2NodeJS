
import nodemailer from 'nodemailer';
import { google } from 'googleapis';


const CLIENT_ID =
  '163317577937-is6f9om56to5rqmgoma82ip4u08i1h3m.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN =
'1//04lEaPJLf1DF0CgYIARAAGAQSNwF-L9Ir8C22TM8hN-fOi20kbdNbH9JHCuH-P-fep7NStStoMF-5Mt8-637WrT8n0x8u1JousTw';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refreshToken: REFRESH_TOKEN });

async function sendMail() {
  try {
    // TO DO, fix fetching accessToken, for some reason i cannot get the access token,
    // but everything works if i hard code it in?
    // const access = await oAuth2Client.getAccessToken();

    const access = 'ya29.A0ARrdaM-4RL0yNjEwP4ocXOmXPIJeU_Gud5DAxCGs975jMmBLEetqomfbYEM36VjfQKYs04-2BVTwhNPp7Es-96nQU5-6LYFWT0uknoUf3rMXKRstMrpzJQ1bgyPGwitEn9vt4w_YnLh7VfMWoJnSNj5T6E49'
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
