import { FC, memo, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import styles from "./styles.module.scss";

// import { generateRandomString, programmingLanguages } from "@/utils/app/codeblock";
import { CheckOutlined, CopyOutlined } from "@ant-design/icons";
import _ from "lodash";

interface Props {
  language?: string;
  value: string;
  rest?: any;
}

export const CodeBlock: FC<Props> = memo(({ language = "js", value, rest }) => {
  const [isCopied, setIsCopied] = useState<Boolean>(false);

  const copyToClipboard = () => {
    if (!navigator.clipboard || !navigator.clipboard.writeText) {
      return;
    }

    navigator.clipboard.writeText(value).then(() => {
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  };

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <span className={styles.lag}>{language}</span>
        <div className={styles.copy} onClick={copyToClipboard}>
          {isCopied ? <CheckOutlined /> : <CopyOutlined />}
          {isCopied ? "已复制 !" : "复制代码"}
        </div>
      </div>

      <SyntaxHighlighter
        {..._.omit(rest, ["inline"])}
        language={language}
        PreTag="div"
        style={oneDark}
        customStyle={{ margin: 0 }}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  );
});
CodeBlock.displayName = "CodeBlock";
