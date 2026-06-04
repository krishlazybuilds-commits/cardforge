import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CardForge AI - Terms of Service",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
