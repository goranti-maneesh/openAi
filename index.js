const { google } = require("googleapis");
const sheets = google.sheets("v4");

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

async function getAuthToken() {
  const auth = new google.auth.GoogleAuth({
    scopes: SCOPES,
  });
  // console.log(auth, "auth");
  const authToken = await auth.getClient();
  // console.log(authToken, "authToken");
  return authToken;
}

async function getSpreadSheet({ spreadsheetId, auth }) {
  const res = await sheets.spreadsheets.get({
    spreadsheetId,
    auth,
  });
  // console.log(spreadsheetId, auth, res, "getSpreadSheet");
  return res;
}

async function getSpreadSheetValues({ spreadsheetId, auth, sheetName }) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    auth,
    range: sheetName,
  });
  // console.log(spreadsheetId, auth, sheetName, res, "getSpreadSheetValues");
  return res;
}

module.exports = {
  getAuthToken,
  getSpreadSheet,
  getSpreadSheetValues,
};
