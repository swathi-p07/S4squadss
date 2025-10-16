import { NavLink } from "react-router-dom";
import { Home, FileText, Mic, FileEdit, Layout, Film } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Research", href: "/research", icon: FileText },
  { name: "Transcripts", href: "/transcripts", icon: Mic },
  { name: "Scripts", href: "/scripts", icon: FileEdit },
  { name: "Storyboards", href: "/storyboards", icon: Layout },
];

export function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
            <Film className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-sidebar-foreground">PrePro Studio</h1>
            <p className="text-xs text-muted-foreground">2025</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            end={item.href === "/"}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all",
                isActive
                  ? "bg-sidebar-accent text-sidebar-primary shadow-sm"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50"
              )
            }
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className="px-4 py-3 rounded-lg bg-muted">
          <p className="text-xs font-medium text-foreground mb-1">Project Progress</p>
          <div className="w-full h-2 bg-background rounded-full overflow-hidden">
            <div className="h-full w-3/5 bg-gradient-primary rounded-full"></div>
          </div>
          <p className="text-xs text-muted-foreground mt-1">60% Complete</p>
        </div>
      </div>
    </aside>
  );
}
