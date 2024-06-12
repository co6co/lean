import { HTML } from './html';
import * as func from './func';

export default {
	async fetch(request: Request, env: Env) {
		console.info(request.headers);
		if (request.method === 'POST') {
			if (request.url.includes('/img')) return await func.img.default(request, env);
			else if (request.url.includes('/chat')) return await func.chat.default(request, env);
			else return await func.tran.default(request, env);
		} else {
			const h = new HTML();
			return new Response(h.ChatHtml, { headers: { 'Content-Type': 'text/html' } });
		}
	},
};
