// eslint-disable-next-line prettier/prettier
import type { Serverless } from 'serverless/aws';

// Functions
import functions from './resources/functions';
import documentation from './resources/documentation';

const serverlessConfiguration: Serverless = {
  frameworkVersion: '2',
  org: 'finnauto',
  app: 'customer-self-service-api',
  service: 'customer-self-service-api',
  custom: {
    'serverless-offline': {
      httpPort: 8000,
      lambdaPort: 8002,
    },
    bundle: {
      // To include openapi.json in lambda package
      copyFiles: [
        {
          from: './openapi.json',
          to: './openapi.json',
        },
      ],
      esbuild: true,
      disableForkTsChecker: true,
      excludeFiles: '**/*.test.ts',
      packager: 'yarn',
    },
    prune: {
      automatic: true,
      number: 3,
    },
    domains: {
      production: 'customer-self-service.finn.auto',
      development: 'dev-customer-self-service.finn.auto',
      staging: 'stg-customer-self-service.finn.auto',
    },
    customDomain: {
      domainName: '${self:custom.domains.${self:provider.stage}}',
      basePath: '',
      stage: '${self:provider.stage}',
      createRoute53Record: true,
    },
    documentation,
  },
  plugins: [
    'serverless-bundle',
    'serverless-domain-manager',
    'serverless-offline',
    '../../build',
    'serverless-prune-plugin',
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    lambdaHashingVersion: 20201221,
    apiGateway: {
      shouldStartNameWithService: true,
      minimumCompressionSize: 1024,
    },
    region: '${opt:region, "eu-central-1"}',
    endpointType: 'regional',
    stage: '${opt:stage, "development"}',
    environment: {},
  },
  package: {
    individually: true,
  },
  functions,
  useDotenv: true,
};

module.exports = serverlessConfiguration;
