import { FC, useLayoutEffect } from "react";
import styles from "./styles.module.scss";
import Content from "./Content";
import Input from "./SearchInput";
import { useHotkeys } from "react-hotkeys-hook";
import { useNavigate } from "react-router-dom";

interface PageProps {}

const Page: FC<PageProps> = (props) => {
  const {} = props;
  const navigate = useNavigate();

  useLayoutEffect(() => {
    window.ipcRenderer.invoke("window-resize", { width: 800, height: 880 });
  }, []);

  useHotkeys(
    "esc",
    () => {
      navigate("/search");
      console.log("123");
    },
    []
  );

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div
          onClick={() => {
            navigate("/search");
          }}
        >
          logo
        </div>
        <div>utils</div>
      </div>
      <div className={styles.content}>
        <Content />
      </div>
      <div className={styles.footer}>
        {/* <div className={styles.fUtils}>utils</div> */}
        <div className={styles.input}>
          <Input />
        </div>
      </div>
    </div>
  );
};

export default Page;
