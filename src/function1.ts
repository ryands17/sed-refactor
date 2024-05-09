import { logger, type AsyncIter } from './utils';
const value1: AsyncIter<string> = ['abc', 'def'];
logger({ type: 'error', message: `This is function1 ${value1}` });
