export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/generic_e710ad22.mjs').then(n => n.g);

export { page };
