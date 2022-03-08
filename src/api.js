import axios from 'axios';

const baseURL = 'http://localhost:5000';

const getShorten = async ( originURL ) => {
  try {
    const { data: postURL } = await axios.post(
      `${baseURL}/shorten`,
       originURL ,
      );
      return postURL;
  } catch (e) {
    console.log(`erro no axios: ${e}`)
  }
};

export default getShorten
