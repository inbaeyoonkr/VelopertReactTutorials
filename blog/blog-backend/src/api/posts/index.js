import Router from 'koa-router';
import * as postCtrl from './posts.ctrl';

const posts = new Router();

posts.get('/', postCtrl.list);
posts.post('/', postCtrl.write);
posts.get('/:id', postCtrl.read);
posts.delete('/:id', postCtrl.remove);
posts.patch('/:id', postCtrl.update);

export default posts;
