import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen w-full bg-gradient-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 p-6">
          {children}
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
