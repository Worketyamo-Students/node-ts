// src/app.ts
// Lancement du serveur
import { envs, CONNECTION_STRING } from './core/config/env';
import app from './server';
import mongoose from 'mongoose';
app.listen(envs.PORT, () => {
	console.log(`Server running on port http://localhost:${envs.PORT}/`);
	console.log(`Documentation  : http://localhost:${envs.PORT}/api-docs`);
});

const Connection = async () => {
	try {
		await mongoose.connect(CONNECTION_STRING);
		console.log('Connecté avec Succes');
	} catch (error) {
		console.error(error);
	}
};

Connection()
