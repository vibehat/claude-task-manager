'use client';

import { ThemeToggle } from '@/components/layout/theme-toggle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useSearchStore } from '@/store/search-store';
import { SearchIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';
import Notifications from './notifications';

export default function HeaderNav() {
   const { isSearchOpen, toggleSearch, closeSearch, setSearchQuery, searchQuery } =
      useSearchStore();
   const searchInputRef = useRef<HTMLInputElement>(null);
   const searchContainerRef = useRef<HTMLDivElement>(null);
   const previousValueRef = useRef<string>('');

   useEffect(() => {
      if (isSearchOpen && searchInputRef.current) {
         searchInputRef.current.focus();
      }
   }, [isSearchOpen]);

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (
            searchContainerRef.current &&
            !searchContainerRef.current.contains(event.target as Node) &&
            isSearchOpen
         ) {
            closeSearch();
         }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [isSearchOpen, closeSearch]);

   return (
      <div className="w-full flex justify-between items-center border-b py-1.5 px-6 h-10">
         <SidebarTrigger className="" />

         <div className="flex items-center gap-2">
            {isSearchOpen ? (
               <div
                  ref={searchContainerRef}
                  className="relative flex items-center justify-center w-64 transition-all duration-200 ease-in-out"
               >
                  <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                     type="search"
                     ref={searchInputRef}
                     value={searchQuery}
                     onChange={(e) => {
                        // Store the previous value before updating
                        previousValueRef.current = searchQuery;

                        // Update the value
                        const newValue = e.target.value;
                        setSearchQuery(newValue);

                        // If the value goes from non-empty to empty, it's probably a click on the cross
                        if (previousValueRef.current && newValue === '') {
                           closeSearch();
                        }
                     }}
                     placeholder="Search issues..."
                     className="pl-8 h-7 text-sm"
                     onKeyDown={(e) => {
                        if (e.key === 'Escape') {
                           closeSearch();
                        }
                     }}
                  />
               </div>
            ) : (
               <>
                  <Button
                     variant="ghost"
                     size="icon"
                     onClick={toggleSearch}
                     className="h-8 w-8"
                     aria-label="Search"
                  >
                     <SearchIcon className="h-4 w-4" />
                  </Button>
                  <ThemeToggle />
                  <Notifications />
               </>
            )}
         </div>
      </div>
   );
}
