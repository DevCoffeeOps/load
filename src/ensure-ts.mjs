// es module that ensures typescript is installed prior to running ts-patch
// this is only required if running "npm pack" and "npm install" from a local project repo
import { execSync } from 'child_process';
import { resolve } from 'path';

try {
  console.log('Ensuring TypeScript is accessible...');
  await import(resolve('node_modules/typescript'));
  console.log('TypeScript is accessible.');
} catch (error) {
  console.error('TypeScript not found, installing...');
  execSync('npm install typescript', { stdio: 'inherit' });
}

try {
  console.log('Ensuring ts-patch is accessible...');
  await import(resolve('node_modules/ts-patch'));
  console.log('ts-patch is accessible.');
} catch (error) {
  console.error('ts-patch not found, installing...');
  execSync('npm install ts-patch', { stdio: 'inherit' });
}
