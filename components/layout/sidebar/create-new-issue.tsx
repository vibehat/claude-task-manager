import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Heart } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { RiEditLine } from '@remixicon/react';

export function CreateNewIssue() {
   return (
      <Dialog>
         <DialogTrigger asChild>
            <Button className="size-8 shrink-0" variant="secondary" size="icon">
               <RiEditLine />
            </Button>
         </DialogTrigger>
         <DialogContent className="w-full sm:max-w-[750px] p-0 shadow-xl">
            <div className="flex items-center px-4 pt-4 gap-2">
               <Button size="sm" variant="outline" className="gap-1.5">
                  <Heart className="size-4 text-orange-500 fill-orange-500" />
                  <span className="font-medium">CORE</span>
               </Button>
            </div>

            <div className="px-4 pb-6 space-y-3 w-full">
               <Input
                  className="border-none w-full shadow-none outline-none text-2xl font-medium px-0 h-auto focus-visible:ring-0 overflow-hidden text-ellipsis whitespace-normal break-words"
                  placeholder="Issue title"
               />

               <Textarea
                  className="border-none w-full shadow-none outline-none resize-none px-0 min-h-24 focus-visible:ring-0 break-words whitespace-normal overflow-wrap"
                  placeholder="Add description..."
               />
            </div>

            <div className="flex items-center justify-between py-2.5 px-4 w-full border-t">
               <div className="flex items-center gap-2">
                  <div className="flex items-center space-x-2">
                     <Switch id="create-more" />
                     <Label htmlFor="create-more">Create more</Label>
                  </div>
               </div>
               <Button size="sm">Create issue</Button>
            </div>
         </DialogContent>
      </Dialog>
   );
}
