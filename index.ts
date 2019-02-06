/// <reference path="typings/jest/index.d.ts" />
import { runCLI } from 'jest';
import * as path from 'path';

const projectRoot = path.resolve(__dirname, 'reactTsProject');
process.chdir(projectRoot);
const jestConfig = require('react-scripts-ts/scripts/utils/createJestConfig')(
    (relativePath: string): string => {
        return path.join(path.join(require.resolve('react-scripts-ts/package.json'), '..'), relativePath);
    }, projectRoot, false);
jestConfig.testEnvironment = 'jsdom'
const config = JSON.stringify(jestConfig);
runCLI({
    config,
    runInBand: true,
    silent: true
}, [projectRoot]).then((result: any) => console.log(`result: ${result}`)).catch((err: Error) => console.error(err));
