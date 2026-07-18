"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white px-4 text-center gap-4">
      <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
        <AlertTriangle className="w-8 h-8 text-red-500" />
      </div>
      <h1 className="font-heading text-2xl font-bold text-gray-900">Something went wrong</h1>
      <p className="text-gray-600 max-w-md">
        We&apos;re sorry for the inconvenience. Please try again, or contact us
        directly if the problem continues.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 mt-2">
        <Button onClick={reset} className="bg-medBlue text-white hover:bg-brand-700 rounded-full">
          Try again
        </Button>
        <a href={contactInfo.phoneHref}>
          <Button variant="outline" className="rounded-full border-medBlue text-medBlue">
            Call {contactInfo.phone}
          </Button>
        </a>
      </div>
    </div>
  );
}
