
import "./globals.css";



export const metadata = {
  title: "Todo App",
  description: "You can add your daily task here",
};

export default function ({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-800  ">{children}</body>
    </html>
  );
}
