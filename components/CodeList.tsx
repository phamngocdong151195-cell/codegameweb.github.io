import { Code } from '@/types';
import CodeCard from './CodeCard';

type CodeListProps = {
  codes: Code[];
};

const CodeList = ({ codes }: CodeListProps) => {
  return (
    <>
      {codes.map((code) => (
        <CodeCard key={code.id} code={code} />
      ))}
    </>
  );
};

export default CodeList;
