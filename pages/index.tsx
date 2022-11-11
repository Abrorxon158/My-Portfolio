import Navbar from "../component/Navbar";
import 'antd/dist/antd.css';
import styles from "../component/Navbar/index.module.scss";
import React from "react";

export default function Home() {
  return (
    <div className='container mx-auto'>
      <Navbar/>
    </div>
  );
}
