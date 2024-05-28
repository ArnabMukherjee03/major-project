import Navbar from "@/components/landing-nav";

const LandingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="h-full overflow-auto">
      <div className="mx-auto max-w-screen-xl h-full w-full">
        <Navbar/>
        {children}
      </div>
    </main>
   );
}
 
export default LandingLayout;