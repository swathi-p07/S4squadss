import { Search, Bell, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Header() {
  return (
    <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6 sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search projects, files, notes..."
            className="pl-10 bg-muted border-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button size="sm" className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow">
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </Button>
        
        <ThemeToggle />
        
        <Button variant="ghost" size="icon" className="relative rounded-full">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
        </Button>

        <Avatar className="w-9 h-9 cursor-pointer ring-2 ring-primary/20 hover:ring-primary/40 transition-all">
          <AvatarFallback className="bg-gradient-secondary text-secondary-foreground font-semibold">
            SW
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
