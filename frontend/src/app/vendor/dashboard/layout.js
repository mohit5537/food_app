import VendorSideBar from "@/components/sections/Dashboard";
import VendorNavBar from "@/components/sections/Vendor/VendorNavBar/VendorNavBar";
export default function RootLayout({ children }) {
  return (
    <>
      <VendorNavBar />
      <section className="h-screen grid grid-cols-5 grid-rows-5 gap-2">
        <div className="md:col-span-1 shadow-2xl xs:col-span-0">
          <VendorSideBar />
        </div>
        <div className="col-span-4 h-screen w-full shadow-2xl bg-white p-3 rounded-md">
          {children}
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}
