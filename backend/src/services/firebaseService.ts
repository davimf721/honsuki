import admin from "firebase-admin";
import { Buffer } from 'buffer';

// Função para inicializar o Firebase
const initializeFirebase = () => {
    try {
        if (process.env.NODE_ENV === 'production') {
            if (!process.env.FIREBASE_CREDENTIALS_ENCODED) {
                throw new Error('Variável FIREBASE_CREDENTIALS_ENCODED não definida!');
            }
            
            const encoded = process.env.FIREBASE_CREDENTIALS_ENCODED;
            const decoded = Buffer.from(encoded, 'base64').toString('utf-8');
            const serviceAccount = JSON.parse(decoded);
            
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount)
            });
        } else {
            // Modo desenvolvimento
            const serviceAccount = require('../new-firebase-key.json');
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount)
            });
        }
        
        console.log("Firebase inicializado com sucesso!");
        return admin.firestore();
    } catch (error) {
        console.error("Erro ao inicializar Firebase:", error);
        throw error;
    }
};

// Exportar instância do banco de dados
export const db = initializeFirebase();