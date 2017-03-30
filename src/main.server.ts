import 'zone.js/dist/zone-node';
import { renderModuleFactory } from '@angular/platform-server'
import { enableProdMode } from '@angular/core'
import { AppServerModuleNgFactory } from './app.server.module.ngfactory'

enableProdMode();

const args = process.argv.slice(2);
if (args.length != 1) {
    process.stdout.write("Usage: node dist/main.js <url>\n");
    process.exit();
}

renderModuleFactory(AppServerModuleNgFactory, {
    document: `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>NgUniversalFromScratch</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root>Loading...</app-root>
</body>
</html>`,
    url: args[0]
}).then(string => process.stdout.write(string));
