import axios from 'axios';

const url = 'https://bca.ltlabs.co/msv/global-admin/api/v1/company/userlogin';

const data = {
  companyCode: 'BCA',
  username: '007902',
  password: 'manozaga0',
};

const headers = {
  Accept: 'application/json, text/plain, /',
  'Content-Type': 'application/json;charset=utf-8',
};

axios.post(url, data, { headers })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });