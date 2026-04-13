import { Code } from '@/types';
import CodeCard from './CodeCard';

type CodeListProps = {
  codes: Code[];
};

const CodeList = ({ codes }: CodeListProps) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-0 sm:px-4">
        {codes.map((code) => (
          <CodeCard key={code.id} code={code} />
        ))}
      </div>
    </div>
  );
};

export default CodeList;
