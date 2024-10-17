'use client'
import styles from "./page.module.css";
import Header from "@/comps/header";
import Image from "next/image";


export default function Home() {

  return (
    <div className={styles.page}>
        <div className={styles.left}></div>
        <div className={styles.center}>
        <Header/>

          <div className={styles.centerTop}>
            <div className={styles.eachCenterTop}>
              <Image
                className={styles.centerTopImg}
                src='https://imgs.search.brave.com/2pZtduQQ4EBfv9XVQ0gRljJESacj-TIO3wsQ-pOYLLU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/b3J0cmFpdC1hZG9y/YWJsZS1uZXdib3Ju/LWJhYnktYmVhY2hf/MjMtMjE1MDc2MzI2/Ni5qcGc_c2VtdD1h/aXNfaHlicmlkLXJy/LXNpbWlsYXI'
                alt="profile"
                width={60}
                height={60}
              />
              <p>Vivek</p>
            </div>
            <div className={styles.eachCenterTop}>
              <Image
                className={styles.centerTopImg}
                src='https://imgs.search.brave.com/2pZtduQQ4EBfv9XVQ0gRljJESacj-TIO3wsQ-pOYLLU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/b3J0cmFpdC1hZG9y/YWJsZS1uZXdib3Ju/LWJhYnktYmVhY2hf/MjMtMjE1MDc2MzI2/Ni5qcGc_c2VtdD1h/aXNfaHlicmlkLXJy/LXNpbWlsYXI'
                alt="profile"
                width={60}
                height={60}
              />
              <p>Vivek</p>
            </div>
          </div>
        </div>
        <div className={styles.right}></div>
    </div>
  );
}

