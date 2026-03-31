import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Constellation Explained",
  description:
    "A visual, engineer-friendly explainer for Solana Constellation: concurrent proposers, attesters, censorship resistance, and replay-safe leader assembly.",
};

export default function ConstellationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
