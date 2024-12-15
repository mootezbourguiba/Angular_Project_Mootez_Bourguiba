import { ServerRoute, RenderMode } from '@angular/ssr';
import { ServerComponent } from './server/server.component';

export const serverRoutes: ServerRoute[] = [
  { path: 'server', renderMode: RenderMode.Server }
];
