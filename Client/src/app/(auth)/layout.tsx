import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <Header />
        <section className="max-container p-5 flex justify-center items-center gap-3 md:block">
          <div className="flex items-center gap-3">
            <div className="hidden md:block px-10">
              <Image 
                src={"/authCover.png"}
                alt="authCover"
                width={500}
                height={500}
              />
            </div>
            {children}
          </div>
        </section>
        <Footer />
      </body>
    </html>
  );
}
