import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Mic, FileEdit, Layout, TrendingUp, Clock } from "lucide-react";
import heroImage from "@/assets/hero-production.jpg";

const stats = [
  { name: "Research Files", value: "24", icon: FileText, change: "+12%", color: "text-primary" },
  { name: "Transcripts", value: "8", icon: Mic, change: "+5%", color: "text-secondary" },
  { name: "Scripts", value: "3", icon: FileEdit, change: "+2", color: "text-accent" },
  { name: "Storyboards", value: "12", icon: Layout, change: "+8", color: "text-primary" },
];

const recentActivity = [
  { title: "Documentary Script v3", type: "Script", time: "2 hours ago" },
  { title: "Interview Transcript - John Doe", type: "Transcript", time: "5 hours ago" },
  { title: "Opening Scene Storyboard", type: "Storyboard", time: "1 day ago" },
  { title: "Research Notes - Historical Context", type: "Research", time: "2 days ago" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
        <img 
          src={heroImage} 
          alt="Film production workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary-foreground mb-2">
              Welcome to Your Studio
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Manage your entire pre-production workflow in one place
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name} className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.name}
              </CardTitle>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3 text-secondary" />
                <span className="text-secondary font-medium">{stat.change}</span> from last week
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest updates and changes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors">
                  <div className="w-2 h-2 rounded-full bg-gradient-primary"></div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.type}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Jump into your workflow</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <button className="w-full p-4 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity shadow-glow">
              Upload New Research Material
            </button>
            <button className="w-full p-4 rounded-lg bg-gradient-secondary text-secondary-foreground font-medium hover:opacity-90 transition-opacity">
              Create New Script
            </button>
            <button className="w-full p-4 rounded-lg bg-gradient-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity">
              Design Storyboard
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
