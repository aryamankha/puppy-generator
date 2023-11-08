import axios from "axios";

const handler = async (req, res) => {
  const SHEETDB_URL = "https://sheetdb.io/api/v1/wix9608oycsl9";

  axios.get(SHEETDB_URL).then((response) => {
    const puppyData = response.data;
    res.status(200).json(puppyData);
  }).catch((error) => {
    res.status(500).json(error);
  });
};

export default handler;
