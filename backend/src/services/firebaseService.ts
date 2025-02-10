import admin from "firebase-admin";
import dotenv from "dotenv";
import fs from "fs";
import { Buffer } from 'buffer';

dotenv.config();


type ServiceAccount = {
    projectId: string;
    clientEmail: string;
    privateKey: string;
};

let serviceAccount: ServiceAccount;

if (process.env.NODE_ENV === 'production') {

    const encoded = process.env.FIREBASE_CREDENTIALS_ENCODED!;
    const decoded = Buffer.from(encoded, 'base64').toString('utf-8');
    serviceAccount = JSON.parse(decoded) as ServiceAccount;
} else {

    serviceAccount = JSON.parse(
        fs.readFileSync('./new-firebase-key.json', 'utf-8')
    ) as ServiceAccount;
}


const db: admin.firestore.Firestore = admin.firestore();

export { db };