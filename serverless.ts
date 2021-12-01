import { functions } from '@functions/index';

import { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'NotionAPI',
  frameworkVersion: '>=1.83',
  plugins: ['serverless-esbuild'],
  configValidationMode: 'error',
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    region: 'eu-west-3',
    stage: 'dev',
    profile: 'NotionAPI',
    logs: {
      restApi: true,
    },
    lambdaHashingVersion: '20201221',
    environment: {
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
  },
  functions,
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;