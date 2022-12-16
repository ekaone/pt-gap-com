import Feature from "../components/Feature";
import Customer from "../components/Customer";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title="PT GITA AGUNG PRATAMA" />
      <Layout>
        <Hero />
        <Feature />
        <Customer />
      </Layout>
    </>
  );
}
