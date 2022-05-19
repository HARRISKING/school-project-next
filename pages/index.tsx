import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import Header from "./components/Header/index";
import Section from "./components/Section";
import Image from "next/image";
const Home: NextPage<any> = ({ dataSource }) => {
  return (
    <div className={styles.indexBox}>
      <div
        className={styles.logoBox}
        style={{ background: dataSource?.top_screen?.background_color }}
      >
        <Image src={dataSource.logo} width={300} height={100} alt="" />
      </div>
      <Header dataSource={dataSource} />
      {(dataSource?.module_List || []).map((item: any, index: number) => (
        <Section sectionData={item} key={index} />
      ))}
      <div className={styles.footer}>
        <div>{dataSource?.footer}</div>
      </div>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const dataSource = require("/public/config.json");
  return {
    props: {
      dataSource,
    },
  };
}
