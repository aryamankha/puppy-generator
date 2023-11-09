import axios from "axios";

const handler = async (req, res) => {
  const { streak, id } = req.body;
  const SHEETDB_URL = "https://sheetdb.io/api/v1/wix9608oycsl9/id/" + id;

  axios.patch(SHEETDB_URL, { name: streak }).then((response) => {
    res.status(200).json(id);
  });
};

export default handler;
