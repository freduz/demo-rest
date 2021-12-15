import { APP_PORT } from './config/env';
import server from './config/server';

server.listen(APP_PORT, () => {
  console.log(`Listening on port ${APP_PORT}`);
});
