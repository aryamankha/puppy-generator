import axios from "axios";

const handler = async (req, res) => {
  const SHEETDB_URL = "https://sheetdb.io/api/v1/wix9608oycsl9";

  axios.get(SHEETDB_URL).then((response) => {
    const urls = response.data;
    const index = Math.floor(Math.random() * urls.length);
    res.status(200).json(urls[index]);
  }).catch((error) => {
    res.status(500).json(error);
  });
};

export default handler;
