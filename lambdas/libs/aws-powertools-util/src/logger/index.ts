import { Logger } from '@aws-lambda-powertools/logger';
import { Context } from 'aws-lambda';
import * as fs from 'fs';
import * as path from 'path';

const childLoggers: Logger[] = [];

const defaultValues = {
  region: process.env.AWS_REGION,
  environment: process.env.ENVIRONMENT || 'N/A',
};

function getReleaseVersion(): string {
  const versionFilePath = path.resolve(__dirname, 'version.json');
  if (fs.existsSync(versionFilePath)) {
    const versionData = fs.readFileSync(versionFilePath, 'utf-8');
    return JSON.parse(versionData).version || 'unknown';
  }
  return 'unknown';
}

function setContext(context: Context, module?: string) {
  logger.addPersistentLogAttributes({
    'aws-request-id': context.awsRequestId,
    'function-name': context.functionName,
    version: getReleaseVersion(),
    module: module,
  });

  // Add the context to all child loggers
  childLoggers.forEach((childLogger) => {
    childLogger.addPersistentLogAttributes({
      'aws-request-id': context.awsRequestId,
      'function-name': context.functionName,
      version: getReleaseVersion(),
    });
  });
}

const logger = new Logger({
  persistentLogAttributes: {
    ...defaultValues,
  },
});

function createChildLogger(module: string): Logger {
  const childLogger = logger.createChild({
    persistentLogAttributes: {
      module: module,
    },
  });

  childLoggers.push(childLogger);
  return childLogger;
}

type LogAttributes = {
  [key: string]: unknown;
};

function addPersistentContextToChildLogger(attributes: LogAttributes) {
  childLoggers.forEach((childLogger) => {
    childLogger.addPersistentLogAttributes(attributes);
  });
}

export { addPersistentContextToChildLogger, createChildLogger, logger, setContext };
