import React from 'react';
import HeaderNav from './HeaderNav';

interface IndieHeaderProps {
   actions?: React.ReactNode;
   showSearch?: boolean;
   filterOptions?: React.ReactNode;
}

export default function IndieHeader({
   actions,
   showSearch = false,
   filterOptions,
}: IndieHeaderProps): React.JSX.Element {
   return (
      <div className="w-full flex flex-col items-center">
         <HeaderNav showSearch={showSearch} actions={actions} />
         {filterOptions && (
            <div className="w-full flex justify-between items-center border-b py-1.5 px-6 h-10">
               {filterOptions}
            </div>
         )}
      </div>
   );
}
