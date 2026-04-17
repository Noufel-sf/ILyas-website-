import type { Metadata } from "next";
import { Amiri , Readex_Pro } from "next/font/google";
import "./globals.css";
import Footer from "./components/ui/Footer";
import NavBar from "./components/ui/NavBar";

const AmiriFont = Amiri({
  subsets: ["latin"],
  variable: "--font-amiri",
  weight: ["400", "700"],
});

const RubikSans = Readex_Pro({
  subsets: ["latin"],
  variable: "--font-rubik-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "مشروع البوصلة - تأهيل وتمكين الشباب في المجال السياسي",
  description: "مشروع البوصلة هو مبادرة شبابية تهدف إلى تأهيل وتمكين الشباب في المجال السياسي من خلال مسارات مهارية، قانونية، إدارية وسياسية. يهدف المشروع إلى إعداد جيل واعٍ يفهم آليات العمل المؤسساتي ويشارك بفعالية في الحياة العامة، من خلال تكوينات تطبيقية تعزز الكفاءة والقيادة والمسؤولية.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${AmiriFont.variable} ${RubikSans.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-white">
        <NavBar />
        <div className="relative isolate min-h-screen w-full overflow-x-hidden bg-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-20 "
          />

          <div className="relative z-10 flex min-h-screen flex-col">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
