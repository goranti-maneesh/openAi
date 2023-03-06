const {
  getAuthToken,
  getSpreadSheet,
  getSpreadSheetValues,
} = require("./index.js");

const spreadsheetId = process.argv[2];
const sheetName = process.argv[3];

// async function testGetSpreadSheet() {
//   try {
//     const auth = await getAuthToken();
//     // console.log(auth);

//     const response = await getSpreadSheet({
//       spreadsheetId,
//       auth,
//     });
//     console.log(
//       "output for getSpreadSheet",
//       JSON.stringify(response.data, null, 2).values
//     );
//   } catch (error) {
//     console.log(error.message, error.stack);
//   }
// }

async function testGetSpreadSheetValues() {
  try {
    const auth = await getAuthToken();
    const response = await getSpreadSheetValues({
      spreadsheetId,
      sheetName,
      auth,
    });
    console.log(JSON.stringify(response.data["values"], null, 2));
  } catch (error) {
    console.log(error.message, error.stack);
  }
}

function main() {
  //   testGetSpreadSheet();
  testGetSpreadSheetValues();
}

main();
