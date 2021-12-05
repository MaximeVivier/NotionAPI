import axios from 'axios';

const headers = {
  Authorization: `Bearer ${process.env.APP_TOKEN_SLACK}`,
  'Content-type': 'application/json;charset=UTF-8'
}

export const postNotifToMyReminders = async (message: string) => {
  const data = {
    channel: 'C02PKNKGV8A',
    text: message
  }
  return await axios.post('https://slack.com/api/chat.postMessage', data, { headers });
}