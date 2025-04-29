import admin from "firebase-admin";
import { Buffer } from 'buffer';

type ServiceAccount = {
    projectId: string;
    clientEmail: string;
    privateKey: string;
};

// Verificação obrigatória em produção
if (process.env.NODE_ENV === 'production' && !process.env.FIREBASE_CREDENTIALS_ENCODED) {
    throw new Error('Variável FIREBASE_CREDENTIALS_ENCODED não definida!');
}

const getFirebaseConfig = (): ServiceAccount => {
    if (process.env.NODE_ENV === 'production') {
        const encoded = process.env.FIREBASE_CREDENTIALS_ENCODED!;
        const decoded = Buffer.from(encoded, 'base64').toString('utf-8');

        // Validação extra do JSON
        try {
            return JSON.parse(decoded) as ServiceAccount;
        } catch (error) {
            // Verifica se é uma instância de Error
            if (error instanceof Error) {
                throw new Error(`Erro ao parsear credenciais: ${error.message}`);
            }

            // Caso seja outro tipo de erro (ex: string)
            throw new Error(`Erro desconhecido ao parsear credenciais: ${String(error)}`);
        }
    }

    // Modo desenvolvimento
    return require('../new-firebase-key.json');
};

// Inicialização garantida
const serviceAccount = getFirebaseConfig();
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

export const db = admin.firestore();