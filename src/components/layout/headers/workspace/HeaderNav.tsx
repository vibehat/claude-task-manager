'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SidebarTrigger } from '@/components/ui/SidebarProvider';
import { useSearchStore } from '@/store/searchStore';
import { SearchIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface HeaderNavProps {
  showSearch?: boolean;
  actions?: React.ReactNode;
}

export default function HeaderNav({
  showSearch = false,
  actions,
}: HeaderNavProps): React.JSX.Element {
  const pathname = usePathname();
  const { isSearchOpen, toggleSearch, closeSearch, setSearchQuery, searchQuery } = useSearchStore();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const previousValueRef = useRef<string>('');

  // Get page title based on current route
  const getPageTitle = (): string => {
    if (pathname.includes('/workspace/dashboard')) return 'Dashboard';
    if (pathname.includes('/workspace/tasks')) return 'Tasks';
    if (pathname.includes('/workspace/working-on')) return 'Working On';
    if (pathname.includes('/workspace/terminal')) return 'Terminal';
    if (pathname.includes('/workspace/settings')) return 'Settings';
    return 'Workspace';
  };

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node) &&
        isSearchOpen
      ) {
        if (searchQuery.trim() === '') {
          closeSearch();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return (): void => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen, closeSearch, searchQuery]);

  return (
    <div className="w-full flex justify-between items-center border-b py-1.5 px-6 h-10">
      <div className="flex items-center gap-3">
        <SidebarTrigger />
        <h2 className="text-sm font-medium">{getPageTitle()}</h2>
      </div>

      <div className="flex items-center gap-2">
        {showSearch && (
          <>
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
                    previousValueRef.current = searchQuery;
                    const newValue = e.target.value;
                    setSearchQuery(newValue);

                    if (previousValueRef.current && newValue === '') {
                      const inputEvent = e.nativeEvent as InputEvent;
                      if (
                        inputEvent.inputType !== 'deleteContentBackward' &&
                        inputEvent.inputType !== 'deleteByCut'
                      ) {
                        closeSearch();
                      }
                    }
                  }}
                  placeholder="Search tasks..."
                  className="pl-8 h-7 text-sm"
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                      if (searchQuery.trim() === '') {
                        closeSearch();
                      } else {
                        setSearchQuery('');
                      }
                    }
                  }}
                />
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSearch}
                className="h-8 w-8"
                aria-label="Search"
              >
                <SearchIcon className="h-4 w-4" />
              </Button>
            )}
          </>
        )}
        {actions}
      </div>
    </div>
  );
}
