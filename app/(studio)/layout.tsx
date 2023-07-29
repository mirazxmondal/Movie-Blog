import "../globals.css";

export const metadata = {
  title: "My Movie Blog",
  description: "Created by Nextjs + Sanity app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
