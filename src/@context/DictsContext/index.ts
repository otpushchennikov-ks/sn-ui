import { createContext } from 'react';
import { IDictsContext } from './interface';

const DictsContext = createContext<IDictsContext>({
  defaultDict: [
    { id: '1', name: 'John' },
    { id: '2', name: 'Smith' },
  ],
});

export default DictsContext;
