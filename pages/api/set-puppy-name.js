import axios from "axios";

const handler = async (req, res) => {
  const { puppyId, tempPuppyName } = req.body;
  const SHEETDB_URL = "https://sheetdb.io/api/v1/wix9608oycsl9/id/" + puppyId;

  axios.patch(SHEETDB_URL, { name: tempPuppyName }).then((response) => {
    res.status(200).json(puppyId);
  });
};

export default handler;
