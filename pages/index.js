import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Pricing2 from "../components/Pricing2";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title="PT GITA AGUNG PRATAMA" />
      <Layout>
        <Hero />
        <Feature />
        <Pricing2 />
      </Layout>
    </>
  );
}
