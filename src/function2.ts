import { logger, type Iter } from './utils';
const value2: Iter<string> = ['abc', 'def'];
logger({ type: 'warn', message: `This is function2 ${value2}` });
