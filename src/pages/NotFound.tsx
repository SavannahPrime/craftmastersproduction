
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-9xl font-oswald font-bold text-metal-gold mb-4">404</h1>
        <h2 className="text-4xl font-oswald font-bold text-metal-black mb-6">Page Not Found</h2>
        <p className="text-xl text-metal-gray mb-8 max-w-lg mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button className="bg-metal-black text-white hover:bg-metal-darkgray" asChild>
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Return to Homepage
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
