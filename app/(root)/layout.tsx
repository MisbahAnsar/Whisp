import LeftSidebar from "@/components/LeftSidebar";
import MobileNav from "@/components/ui/MobileNav";
import Image from 'next/image';
import RightSidebar from '@/components/RightSidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
        <main className="relative flex bg-black-3">
            <LeftSidebar />

            <section className="flex min-h-screen flex-1 flex-col p-4 sm:p-14">
                <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
                    <div className="flex h-16 items-center justify-between md:hidden">
                        <Image
                            src='/icons/logo.svg' 
                            width={30}
                            height={30}
                            alt="menu icon"
                            />
                            <MobileNav />
                    </div>
                    <div className="flex flex-col md:pb-15 text-white-1">
                        Toaster ( notification popups )
                        {children}
                    </div>
                </div>
            </section>

            <RightSidebar />
        </main>
    </div>
  );
}
