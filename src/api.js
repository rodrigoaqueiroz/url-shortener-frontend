import axios from 'axios';

const baseURL = 'http://localhost:5000';

const getShorten = async ( originURL ) => {
  try {
    const { data: postURL } = await axios.post(
      `${baseURL}/shorten`,
       originURL ,
      );
      return postURL;
  } catch (error) {
    console.log(`erro no axios: ${error}`)
  }
};

export default getShorten;
