import Layout from "./components/Layout/Layout";
import data from "./data/data";

export default function App() {
  return (
    <Layout
      sidebar={data.sidebar}
      main={data.main}
    />
  );
}