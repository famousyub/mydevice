const userStackRouter = express.Router();
const axios = require("axios");

userStackRouter.get("", async (req, res) => {
  try {
    const userAgent = await axios.get(
      `https://api.userstack.com/api/detect?access_key=91047efbebc9527f4039a090768a6159&ua=Mozilla/5.0%20(Macintosh;%20Intel%20Mac%20OS%20X%2010_14_0)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/71.0.3578.98%20Safari/537.36`
    );
res.writeHead(200, { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" });

    res.json( { info: userAgent.data });
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
  }
});

module.exports = userStackRouter;
