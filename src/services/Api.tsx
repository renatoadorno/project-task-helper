import axios from 'axios';

type ParamPostUser = {
  name: string,
  email: string,
  password: string
}

export async function PostUser(newUser: ParamPostUser) {
  try {
    const url = 'http://localhost:8000/user/create';
    const resp = await axios.post(url, newUser)
    return resp.data;
  } catch(err) {
    console.log(err);
    return err;
  }
}
