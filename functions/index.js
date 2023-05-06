const functions = require("firebase-functions");
const fetch = require("node-fetch");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.plaidInit = functions.https.onRequest(async (request, response) => {
    const token_return_json = await plaidInit();
    response.set('Access-Control-Allow-Origin', '*');
    response.json({...token_return_json});
})

const plaidInit = async () => {
    const token_return = await fetch(
      "https://sandbox.plaid.com/link/token/create",
      {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          client_id: "6456a2a051760600127bc88d",
          secret: "6cda274b8dab393f8f760f01e48299",
          products: ['auth', 'transactions'],
          client_name: "EcoNomics",
          language: "en",
          country_codes: ["US"],
          user: {
            client_user_id: "abcdefghijklmnopqrstuvwxyz",
          },
        }),
      }
    );
    const token_return_json = await token_return.json();
    return token_return_json;
};
