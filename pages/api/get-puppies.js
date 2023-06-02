import axios from "axios";

const handler = async (req, res) => {
  const SHEETDB_URL = "https://sheetdb.io/api/v1/3e3r9myfaceno";

  axios.get(SHEETDB_URL).then((response) => {
    const urls = response.data;
    const index = Math.floor(Math.random() * urls.length);
    console.log(urls[index]);
    res.status(200).json(urls[index]);
  });
};

export default handler;
