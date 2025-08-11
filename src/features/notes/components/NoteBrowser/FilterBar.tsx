import React from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

interface FilterBarProps {
  query: string;
  onQuery: (v: string) => void;
  sources: string[];
  categories: string[];
  locations: string[];
  value: { source: string; category: string; location: string };
  onChange: (v: { source: string; category: string; location: string }) => void;
  onScan?: () => void;
}

export function FilterBar({
  query,
  onQuery,
  sources,
  categories,
  locations,
  value,
  onChange,
  onScan,
}: FilterBarProps): React.JSX.Element {
  return (
    <div className="space-y-3 mb-4">
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">🔍</span>
          <Input
            className="pl-9"
            placeholder="Search across all markdown files..."
            value={query}
            onChange={(e) => onQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" onClick={onScan}>
          <span className="mr-1.5">🔍</span>
          Search
        </Button>
        <Button variant="outline" onClick={onScan}>
          <span className="mr-1.5">⚙️</span>
          Scan
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Select value={value.source} onValueChange={(v) => onChange({ ...value, source: v })}>
          <SelectTrigger className="w-[180px]">
            <span className="mr-1.5">📁</span>
            <SelectValue placeholder="All Sources" />
          </SelectTrigger>
          <SelectContent>
            {sources.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={value.category} onValueChange={(v) => onChange({ ...value, category: v })}>
          <SelectTrigger className="w-[200px]">
            <span className="mr-1.5">🏷️</span>
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={value.location} onValueChange={(v) => onChange({ ...value, location: v })}>
          <SelectTrigger className="w-[200px]">
            <span className="mr-1.5">📍</span>
            <SelectValue placeholder="All Locations" />
          </SelectTrigger>
          <SelectContent>
            {locations.map((l) => (
              <SelectItem key={l} value={l}>
                {l}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
