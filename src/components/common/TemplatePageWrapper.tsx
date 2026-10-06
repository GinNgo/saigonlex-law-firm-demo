"use client";

import React from "react";
import { useDemoTheme } from "@/context/DemoThemeContext";

interface TemplatePageWrapperProps {
  templateId: "mau-a" | "mau-b";
  children: React.ReactNode;
  className?: string;
}

export function TemplatePageWrapper({
  templateId,
  children,
  className = ""
}: TemplatePageWrapperProps) {
  const { animationKey } = useDemoTheme();

  return (
    <div key={`${templateId}-${animationKey}`} className={`w-full ${className}`}>
      {children}
    </div>
  );
}
