import { logger, type AsyncIter } from './utils';
const value2: AsyncIter<string> = ['abc', 'def'];
logger({ type: 'warn', message: `This is function2 ${value2}` });
