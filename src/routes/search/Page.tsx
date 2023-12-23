import { FC, useEffect, useLayoutEffect } from "react";
import styles from "./styles.module.scss";
import { Link, useNavigate } from "react-router-dom";
import SearchInput from "../home/SearchInput";
import { useHotkeys } from "react-hotkeys-hook";

interface PageProps {}

const Page: FC<PageProps> = (props) => {
  const {} = props;
  const navigate = useNavigate();

  useLayoutEffect(() => {
    window.ipcRenderer.invoke("window-resize", { width: 800, height: 175 });
  }, []);

  useHotkeys(
    "esc",
    () => {
      console.log("123");
      window.ipcRenderer.invoke("window-close");
    },
    []
  );

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className={styles.main} onClick={() => {}}>
      <div style={{ padding: "0 8px" }}>
        <SearchInput />
      </div>
      <div className={styles.header}>
        <div className={styles.hItem} onClick={handleClick}>
          <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M44 6H4V36H13V41L23 36H44V6Z"
              fill="#2F88FF"
              stroke="#333"
              strokeWidth="3"
              strokeLinecap="square"
              strokeLinejoin="bevel"
            />
            <path d="M14 19.5V22.5" stroke="#FFF" strokeWidth="3" strokeLinecap="square" strokeLinejoin="bevel" />
            <path d="M24 19.5V22.5" stroke="#FFF" strokeWidth="3" strokeLinecap="square" strokeLinejoin="bevel" />
            <path d="M34 19.5V22.5" stroke="#FFF" strokeWidth="3" strokeLinecap="square" strokeLinejoin="bevel" />
          </svg>
          <div>ai 聊天</div>
        </div>
        <div className={styles.hItem} onClick={handleClick}>
          <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 32C40.4183 32 44 28.4183 44 24C44 19.5817 40.4183 16 36 16" fill="#2F88FF" />
            <path
              d="M36 32V32C40.4183 32 44 28.4183 44 24C44 19.5817 40.4183 16 36 16"
              stroke="#333"
              strokeWidth="3"
              strokeLinejoin="bevel"
            />
            <path d="M12 16C7.58172 16 4 19.5817 4 24C4 28.4183 7.58172 32 12 32" fill="#2F88FF" />
            <path
              d="M12 16C7.58172 16 4 19.5817 4 24C4 28.4183 7.58172 32 12 32V32"
              stroke="#333"
              strokeWidth="3"
              strokeLinejoin="bevel"
            />
            <path
              d="M12 32V31.5V29V24V16C12 9.37258 17.3726 4 24 4C30.6274 4 36 9.37258 36 16V32C36 38.6274 30.6274 44 24 44"
              stroke="#333"
              strokeWidth="3"
              strokeLinecap="square"
              strokeLinejoin="bevel"
            />
          </svg>
          <div>听音乐</div>
        </div>
        <div className={styles.hItem} onClick={handleClick}>
          <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.5 10.5372C20.5 6.5143 22.8333 4.50286 24 4C25.1667 4.50286 27.5 6.5143 27.5 10.5372V18.0801L43 31V35L27 27V36L32 44L24 41L16 44L21 36V27L5 35V31L20.5 18.0801V10.5372Z"
              fill="#2F88FF"
              stroke="#333"
              strokeWidth="3"
              strokeLinecap="square"
              strokeLinejoin="bevel"
            />
          </svg>
          <div>旅游攻略</div>
        </div>
        <div className={styles.hItem} onClick={handleClick}>
          <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44 5H3.99998V17H44V5Z" fill="#2F88FF" stroke="#333" strokeWidth="3" strokeLinejoin="bevel" />
            <path
              d="M3.99998 41.0301L16.1756 28.7293L22.7549 35.0301L30.7982 27L35.2786 31.368"
              stroke="#333"
              strokeWidth="3"
              strokeLinecap="square"
              strokeLinejoin="bevel"
            />
            <path d="M44 16.1719V42.1719" stroke="#333" strokeWidth="3" strokeLinecap="square" />
            <path d="M3.99998 16.1719V30.1719" stroke="#333" strokeWidth="3" strokeLinecap="square" />
            <path d="M13.0155 43H44" stroke="#333" strokeWidth="3" strokeLinecap="square" />
            <path d="M17 11H38" stroke="#FFF" strokeWidth="3" strokeLinecap="square" />
            <path d="M9.99998 10.9966H11" stroke="#FFF" strokeWidth="3" strokeLinecap="square" />
          </svg>
          <div>数据分析</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
