import { getPages } from "@/sanity/sanity-utils";
import "../globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Movie Blog",
  description: "Created by Nextjs + Sanity app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Pages
  const pages = await getPages();
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"
          >
            {" "}
            Home
          </Link>

          <div className="flex items-center gap-5 text-sm">
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`}>
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
