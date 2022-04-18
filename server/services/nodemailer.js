import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import dotenv from 'dotenv';
dotenv.config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refreshToken: REFRESH_TOKEN });

async function sendMail(email) {
  try {
    // TO DO, fix fetching accessToken, for some reason i cannot get the access token,
    // but everything works if i hard code it in?
    // The below method is meant to fetch a new accessToken using the refreshToken i was given, however it doesn't seem to work.
    // Which means i have to manually put in the accessToken every hour..
    // I know i should've opted for something else than gmail, but i wanted to try because i am foolish
    // const access = await oAuth2Client.getAccessToken();

    const access = 'ya29.A0ARrdaM-WiWADSchOjbmZoSM9niiLpH14fywmEsY0wr-QYxvP84Ha9oPHWuKc1aP5XeY1ti_x4QzoMuerl-KXC9cdF-fui408Jgo2gsB-BdyDyMt3kftvNxHzd_widgSqr-6ouYrSlH9EDiJ7sbsSeaoM3A6m'
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
      to: email,
      subject: 'Signup Success!',
      text: 'Welcome to KeaShop',
      html: '<h1>Welcome to KeaShop. Whatever your heart desires</h1>',
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}
// Test

// sendMail('niko.lenander@gmail.com').then(result => {
//   console.log(result)          
// })
// .catch(error => {
//     console.log(error.message)
// })

export default sendMail;