/**
 * 生成Image
 */
import { Ai } from '@cloudflare/ai';
export default async (request: Request, env: Env) => {
	const ai = new Ai(env.AI);
	const formData = await request.formData();
	const userQuestion = (formData.get('question') as string) || '';
	const input = { prompt: userQuestion };
	const response = await ai.run('@cf/stabilityai/stable-diffusion-xl-base-1.0', input);
	//const response = new Uint8Array(15);
	return new Response(response, {
		headers: {
			'content-type': 'image/png',
		},
	});
};
