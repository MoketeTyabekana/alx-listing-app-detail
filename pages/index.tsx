
import Header from "../components/common/layout/Header";
import Footer from "@/components/common/layout/Footer";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen"></main>
      <Footer />
    </>
  );
}

export default Layout;