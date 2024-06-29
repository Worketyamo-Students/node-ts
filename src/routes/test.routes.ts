import { Router, Request, Response } from 'express';

const router = Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: John Doe
 */
router.get('/users', (req: Request, res: Response) => {
	res.json([
		{ id: 1, name: 'John Doe' },
		{ id: 2, name: 'Jane Doe' }
	]);
});

export default router;
