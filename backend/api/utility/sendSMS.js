import axios from 'axios';

// registration confirmation OTP

export const sendOTP = async (cell,sms) => {
  try {
    await axios
      .get(
        ` https://bulksmsbd.net/api/smsapi?api_key=${process.env.SMS_API_KEY}&type=${process.send.SMS_TYPE}&number=${cell}&senderid=${process.env.SMS_SENDER_ID}&message=${sms}`
      )
      .then( res => console.log(res.data))
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};
