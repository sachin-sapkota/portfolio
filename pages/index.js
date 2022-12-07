import Layout from '../components/Layout';
import Image from 'next/image';
import Herosection from '../components/homepage/herosection';
export default function Home() {
  return (
    <Layout>
      <div className="scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
        <Herosection />
      </div>
    </Layout>
  );
}
