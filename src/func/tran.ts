/**
 * 翻译
 */
import { Ai } from '@cloudflare/ai';
import { marked } from 'marked';
export default async (request: Request, env: Env) => {
	const ai = new Ai(env.AI);
	const formData = await request.formData();
	const userQuestion = (formData.get('question') as string) || '';
	const inputs2 = {
		text: userQuestion,
		source_lang: 'en',
		target_lang: 'zh',
	};
	const response2: AiTranslationOutput = await ai.run('@cf/meta/m2m100-1.2b', inputs2);
	const htmlResponse = marked.parse(response2.translated_text as string);
	return new Response(htmlResponse as string /**JSON.stringify(response)*/, {
		headers: { 'Content-Type': 'text/html' },
	});
};
