import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Save, Download, FileEdit } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const scripts = [
  { title: "Opening Scene", version: "v3", lastEdit: "2 hours ago", status: "In Progress" },
  { title: "Interview Segment 1", version: "v2", lastEdit: "1 day ago", status: "Complete" },
  { title: "Closing Narration", version: "v1", lastEdit: "3 days ago", status: "Draft" },
];

export default function Scripts() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Scripts</h1>
          <p className="text-muted-foreground mt-1">Write and edit your scripts with AI assistance</p>
        </div>
        <Button className="bg-gradient-accent hover:opacity-90 shadow-glow">
          <FileEdit className="w-4 h-4 mr-2" />
          New Script
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-4">
          <h2 className="font-semibold text-lg">Your Scripts</h2>
          {scripts.map((script, index) => (
            <Card 
              key={index} 
              className="shadow-md hover:shadow-lg transition-all cursor-pointer hover:border-primary"
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold">{script.title}</h3>
                  <Badge variant="outline" className="text-xs">{script.version}</Badge>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Last edited {script.lastEdit}</p>
                  <Badge 
                    variant="secondary" 
                    className={script.status === "Complete" ? "bg-gradient-primary text-primary-foreground" : ""}
                  >
                    {script.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="lg:col-span-2">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Script Editor</span>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="gap-2">
                    <Sparkles className="w-4 h-4 text-accent" />
                    AI Suggest
                  </Button>
                  <Button size="sm" variant="outline">
                    <Save className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-2 mb-4">
                  <Button size="sm" variant="ghost" className="text-xs">Bold</Button>
                  <Button size="sm" variant="ghost" className="text-xs">Italic</Button>
                  <Button size="sm" variant="ghost" className="text-xs">Heading</Button>
                  <Button size="sm" variant="ghost" className="text-xs">Quote</Button>
                </div>
                
                <Textarea 
                  placeholder="Start writing your script here... Use AI Suggest for creative assistance!"
                  className="min-h-[500px] font-mono text-sm"
                  defaultValue={`FADE IN:

INT. DOCUMENTARY STUDIO - DAY

The camera pans across a modern pre-production workspace. Monitors glow with storyboard sketches and script drafts.

NARRATOR (V.O.)
Every great film begins with a vision. But vision alone isn't enough. It takes planning, organization, and the right tools to bring that vision to life.

The shot reveals a filmmaker reviewing notes, surrounded by reference materials and creative tools.

NARRATOR (V.O.) (CONT'D)
This is where the magic truly begins - in the details, the preparation, the pre-production.`}
                />

                <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span>AI suggestions are ready. Click "AI Suggest" to enhance your script.</span>
                  </div>
                  <Button size="sm" className="bg-gradient-accent hover:opacity-90">
                    Try AI Suggest
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
