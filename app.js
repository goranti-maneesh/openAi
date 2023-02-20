const { OpenAIApi, Configuration } = require("openai");
const fs = require("fs");
const parse = require("csv-parse");
// const csv = require("fast-csv");

const sheetLink =
  "https://nkb-backend-ccbp-media-static.s3-ap-south-1.amazonaws.com/ccbp_prod/media/content_loading/uploads/d593c64b-61dd-4cee-880e-f96c08dfdee1_New%20sheet%20-%20Sheet1.csv";

const prompt = "This is a text";

const data = {
  model: "text-davinci-003",
  prompt: "Provide code that displays hello world in c",
  max_tokens: 1000,
  temperature: 1,
};

const fetchResponse = async () => {
  const configuration = new Configuration({
    organization: "org-TXayRDW6bsJhIXIA0EKupu1v",
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  try {
    response = await openai.createCompletion(data);
    console.log(response.data.choices[0].text);
    return response;
  } catch (err) {
    console.log(err);
  }
};

console.log(fetchResponse());

fs.readFile(
  "/home/ib-developer/Downloads/newSheet-Sheet1.csv",
  "utf8",
  function (err, data) {
    /* parse data */
    console.log(data);
  }
);

// fs.createReadStream(__dirname + "/newSheet-Sheet1.csv").pipe(parser);

// fs.createReadStream("/home/ib-developer/Downloads/newSheet-Sheet1.csv")
//   .pipe(parse({ delimiter: ",", from_line: 2 }))
//   .on("data", function (row) {
//     console.log(row);
//   })
//   .on("end", function () {
//     console.log("finished");
//   })
//   .on("error", function (error) {
//     console.log(error.message);
//   });
