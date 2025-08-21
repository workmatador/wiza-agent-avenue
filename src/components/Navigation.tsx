import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="bg-background shadow-professional-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/85666f82-b58d-442a-b3e7-4f0b912d34ca.png" 
            alt="WIZA Logo" 
            className="h-8 w-auto"
          />
          <span className="text-2xl font-bold text-primary">WIZA</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/about') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/contact') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Contact
          </Link>
        </nav>
        
        <Link to="/contact">
          <Button variant="default" size="sm">
            Get Started
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Navigation;