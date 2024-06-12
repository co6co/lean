/**
 * 问答
 */
import { Ai } from '@cloudflare/ai';
import { marked } from 'marked';
export default async (request: Request, env: Env) => {
	const ai = new Ai(env.AI);
	const formData = await request.formData();
	const userQuestion = (formData.get('question') as string) || '';
	const input: AiTextGenerationInput = { prompt: userQuestion };
	const response: AiTextGenerationOutput = await ai.run('@cf/meta/llama-3-8b-instruct', input);

	if (response instanceof ReadableStream) {
	} else {
		const htmlResponse = marked.parse(response.response as string);
		return new Response(htmlResponse as string /**JSON.stringify(response)*/, {
			headers: { 'Content-Type': 'text/html' },
		});
	}
};
