import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';

import common from './common';
import local from './local';
import dev from './dev';
import prod from './prod';

// dev.ts 등 디비연결 관련된 데이터 저장 하고 common 과 dev, local, prod 등과 연결

const phase = process.env.NODE_ENV;

let conf = {};
if (phase === 'local') {
  conf = local;
} else if (phase === 'dev') {
  conf = dev;
} else if (phase === 'prod') {
  conf = prod;
}

const yamlConfig: Record<string, any> = yaml.load(
  readFileSync(`${process.cwd()}/envs/config.yaml`, 'utf8'),
) as Record<string, any>;

export default () => ({
  ...common,
  ...conf,
  ...yamlConfig,
});
