import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-dvh flex items-center justify-center bg-accent/40">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-3">404</h1>
        <p className="text-lg text-muted-foreground mb-4">
          عذراً، الصفحة غير موجودة
        </p>
        <a href="/" className="text-primary underline-offset-4 hover:underline">
          الرجوع إلى الرئيسية
        </a>
      </div>
    </div>
  );
};

export default NotFound;
