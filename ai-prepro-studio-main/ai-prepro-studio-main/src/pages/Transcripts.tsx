import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Play, Download, Edit } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";

const transcripts = [
  { 
    title: "Interview - Documentary Subject 1",
    duration: "45:32",
    date: "Mar 15, 2025",
    status: "Completed",
    preview: "So, I grew up in a small town where filmmaking was just a dream..."
  },
  { 
    title: "Voiceover Recording - Intro",
    duration: "3:24",
    date: "Mar 14, 2025",
    status: "Completed",
    preview: "In the beginning, there was only darkness. Then came the light of cinema..."
  },
  { 
    title: "Expert Interview - Dr. Jane Smith",
    duration: "1:12:45",
    date: "Mar 13, 2025",
    status: "Processing",
    preview: "The history of documentary filmmaking dates back to the early 1900s..."
  },
];

export default function Transcripts() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Transcripts</h1>
          <p className="text-muted-foreground mt-1">Upload audio/video files and manage transcriptions</p>
        </div>
        <Button className="bg-gradient-secondary hover:opacity-90 shadow-glow">
          <Upload className="w-4 h-4 mr-2" />
          Upload Media
        </Button>
      </div>

      <div className="grid gap-6">
        {transcripts.map((transcript, index) => (
          <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg mb-1">{transcript.title}</CardTitle>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{transcript.duration}</span>
                    <span>•</span>
                    <span>{transcript.date}</span>
                    <Badge 
                      variant={transcript.status === "Completed" ? "default" : "secondary"}
                      className={transcript.status === "Completed" ? "bg-gradient-primary" : ""}
                    >
                      {transcript.status}
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="icon" variant="ghost">
                    <Play className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <Edit className="w-3 h-3" />
                  <span>Transcript Preview (Editable)</span>
                </div>
                <Textarea 
                  defaultValue={transcript.preview}
                  className="min-h-[100px] font-mono text-sm"
                  placeholder="Transcript text will appear here..."
                />
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Edit className="w-3 h-3 mr-2" />
                    Edit Transcript
                  </Button>
                  <Button size="sm" variant="outline">
                    Export
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
