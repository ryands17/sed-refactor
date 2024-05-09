import { logger, type Iter } from './utils';
const value1: Iter<string> = ['abc', 'def'];
logger({ type: 'error', message: `This is function1 ${value1}` });
