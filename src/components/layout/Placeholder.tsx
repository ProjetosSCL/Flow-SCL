import { createFileRoute } from "@tanstack/react-router";
import { Construction } from "lucide-react";

export function PlaceholderRoute({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-[28px] bg-white border border-[#DFE7E4] shadow-none p-6 sm:p-12 text-center max-w-2xl mx-auto mt-4 sm:mt-10 animate-fade-in">
      <div className="h-14 w-14 mx-auto rounded-full bg-[#DDFFE3] grid place-items-center text-[#103024] mb-4">
        <Construction className="h-6 w-6" />
      </div>
      <h1 className="text-2xl font-display font-bold text-[#103024] tracking-tight">{title}</h1>
      <p className="mt-2 text-sm font-sans text-[#666D6A]">{description}</p>
      <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4F7F6] border border-[#DFE7E4] text-xs font-sans text-[#666D6A]">
        <span className="h-2 w-2 rounded-full bg-[#41D600] animate-pulse" />
        StoneCo DS Operacional · Em desenvolvimento
      </div>
    </div>
  );
}

// Placeholder export to satisfy any direct import (not used by router)
export const _Route = createFileRoute;
