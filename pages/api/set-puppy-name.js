import axios from "axios";

const handler = async (req, res) => {
  const { puppyId, tempPuppyName } = req.body;
  const SHEETDB_URL = "https://sheetdb.io/api/v1/3e3r9myfaceno/id/" + puppyId;

  axios.patch(SHEETDB_URL, { name: tempPuppyName }).then((response) => {
    res.status(200).json(puppyId);
  });
};

export default handler;
