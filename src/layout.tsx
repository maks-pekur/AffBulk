import { Navbar } from "./components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen antialiased bg-[#050505] text-white overflow-hidden flex flex-col">
      <Navbar />
      <main color="flex-1">{children}</main>
    </div>
  );
}
