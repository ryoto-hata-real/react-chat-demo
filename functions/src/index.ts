import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

// 定数かしてメモリを確保
const db = admin.firestore();

const sendReponse = (response: functions.Response,
    statusCode: number,
    body: any) => {
  response.send({
    statusCode,
    body: JSON.stringify(body),
  });
};


// 外部からFunctionを叩きたいときはexportをつける
export const add = functions.https.onRequest(async (request:any,
    response:any) => {
  if (request.method !== "POST") {
    sendReponse(response, 405, {error: "Invalid Request"});
  } else {
    const dataset = request.body;
    for (const key of Object.keys(dataset)) {
      const data = dataset[key];
      await db.collection("questions").doc(key).set(data);
    }
    sendReponse(response, 200, {message: "Success adding dataset!!"});
  }
});
