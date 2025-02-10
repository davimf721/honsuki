import admin from "firebase-admin";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

let serviceAccount;

if (process.env.FIREBASE_CREDENTIALS) {
    // Quando a variável de ambiente estiver definida (no deploy)
    serviceAccount = JSON.parse(process.env.FIREBASE_CREDENTIALS);
} else {
    // Para ambiente de desenvolvimento local, se o arquivo existir
    serviceAccount = JSON.parse(fs.readFileSync('./new-firebase-key.json', 'utf-8'));
}
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
export { db };