import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, GripVertical, Edit, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const storyboardScenes = [
  { 
    id: 1, 
    title: "Opening Shot", 
    description: "Wide establishing shot of the city at dawn",
    notes: "Golden hour lighting, sweeping camera movement",
    duration: "5 sec"
  },
  { 
    id: 2, 
    title: "Main Character Introduction", 
    description: "Close-up of protagonist waking up",
    notes: "Soft focus, intimate framing",
    duration: "8 sec"
  },
  { 
    id: 3, 
    title: "Transition to Workspace", 
    description: "Medium shot following character through hallway",
    notes: "Steady cam, natural lighting",
    duration: "6 sec"
  },
  { 
    id: 4, 
    title: "Interview Setup", 
    description: "Two-shot of interviewer and subject",
    notes: "3-point lighting, neutral background",
    duration: "12 sec"
  },
  { 
    id: 5, 
    title: "B-Roll Montage", 
    description: "Series of quick cuts showing research materials",
    notes: "Dynamic editing, upbeat music",
    duration: "10 sec"
  },
  { 
    id: 6, 
    title: "Closing Scene", 
    description: "Fade out on finished project",
    notes: "Slow zoom out, inspirational score",
    duration: "7 sec"
  },
];

export default function Storyboards() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Storyboards</h1>
          <p className="text-muted-foreground mt-1">Visualize your scenes and plan shot sequences</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 shadow-glow">
          <Plus className="w-4 h-4 mr-2" />
          Add Scene
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {storyboardScenes.map((scene) => (
          <Card 
            key={scene.id} 
            className="shadow-md hover:shadow-lg transition-all group cursor-move"
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="cursor-move opacity-50 group-hover:opacity-100 transition-opacity">
                  <GripVertical className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-sm">{scene.title}</h3>
                    <Badge variant="outline" className="text-xs">{scene.duration}</Badge>
                  </div>
                  
                  <div className="aspect-video rounded-lg bg-gradient-to-br from-muted to-muted/50 mb-3 flex items-center justify-center border border-border">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-2 flex items-center justify-center shadow-glow">
                        <span className="text-2xl font-bold text-primary-foreground">{scene.id}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Scene {scene.id}</p>
                    </div>
                  </div>

                  <p className="text-sm mb-2">{scene.description}</p>
                  <p className="text-xs text-muted-foreground italic mb-3">{scene.notes}</p>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Edit className="w-3 h-3 mr-1" />
                      Edit
                    </Button>
                    <Button size="sm" variant="outline" className="text-destructive hover:bg-destructive/10">
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="shadow-md border-dashed border-2 border-primary/30 bg-primary/5">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center shadow-glow">
            <Plus className="w-8 h-8 text-primary-foreground" />
          </div>
          <h3 className="font-semibold mb-2">Add New Scene</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Create a new storyboard frame to plan your next shot
          </p>
          <Button className="bg-gradient-primary hover:opacity-90">
            Create Scene
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
