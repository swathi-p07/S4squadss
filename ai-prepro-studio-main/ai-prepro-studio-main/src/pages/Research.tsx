import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Upload, FileText, Link, File, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const researchFiles = [
  { title: "Historical Context Document", type: "PDF", size: "2.4 MB", date: "Mar 15, 2025", tags: ["History", "Context"] },
  { title: "Interview Notes - Expert 1", type: "TXT", size: "124 KB", date: "Mar 14, 2025", tags: ["Interview", "Notes"] },
  { title: "Reference Article Link", type: "Link", size: "-", date: "Mar 13, 2025", tags: ["Reference", "Online"] },
  { title: "Location Scouting Photos", type: "ZIP", size: "15.8 MB", date: "Mar 12, 2025", tags: ["Photos", "Location"] },
  { title: "Budget Planning Sheet", type: "PDF", size: "856 KB", date: "Mar 10, 2025", tags: ["Budget", "Planning"] },
  { title: "Character Profiles", type: "DOCX", size: "1.2 MB", date: "Mar 9, 2025", tags: ["Characters", "Research"] },
];

const getFileIcon = (type: string) => {
  if (type === "Link") return Link;
  return File;
};

export default function Research() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Research Materials</h1>
          <p className="text-muted-foreground mt-1">Upload and organize your reference materials</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 shadow-glow">
          <Upload className="w-4 h-4 mr-2" />
          Upload Files
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search files, notes, and links..."
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" />
          Filter
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {researchFiles.map((file, index) => {
          const FileIcon = getFileIcon(file.type);
          return (
            <Card key={index} className="shadow-md hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shadow-sm group-hover:shadow-glow transition-shadow">
                    <FileIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm mb-1 truncate">{file.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2">
                      {file.type} • {file.size} • {file.date}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {file.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
