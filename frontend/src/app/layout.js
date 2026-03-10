import "./globals.css";

export const metadata = {
  title: "Food App-Swiggy Clone",
  description: "Food App-Swiggy Clone built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`app-layout`}>{children}</body>
    </html>
  );
}
