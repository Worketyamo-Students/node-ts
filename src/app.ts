// src/app.ts

import { envs } from './core/config/env';
import app from './server';

app.get('/', (_req, res) => {
	res.send({
		message: `Test done well !`
	});
});

app.listen(envs.PORT, () => {
	console.log(`Server running on port http://localhost:${envs.PORT}/`);
});
