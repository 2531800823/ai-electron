import { MemoizedReactMarkdown } from "@/components/markdown/MemoizedReactMarkdown";
import { FC } from "react";

import rehypeMathjax from "rehype-mathjax";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { CodeBlock } from "@/components/markdown/Codeblock";
import _ from "lodash";

interface ReactMarkdownRenderProps {
  content: string;
}

const ReactMarkdownRender: FC<ReactMarkdownRenderProps> = (props) => {
  const { content } = props;

  return (
    <MemoizedReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeMathjax as any]}
      components={{
        code(codeProps) {
          const { children, className, node, ...rest } = codeProps;
          const match = /language-(\w+)/.exec(className || "");

          return match ? (
            <CodeBlock
              rest={rest}
              key={Math.random()}
              language={(match && match[1]) || ""}
              value={String(children).replace(/\n$/, "")}
            />
          ) : (
            <code {..._.omit(rest, ["inline"])} className={className}>
              {children}
            </code>
          );
        },
        table({ children }) {
          return (
            <table
              style={{
                borderCollapse: "collapse",
                border: "1px solid black",
                paddingLeft: "0.75rem",
                paddingRight: "0.75rem",
                paddingTop: "0.25rem",
                paddingBottom: "0.25rem",
                borderColor: "#000",
                backgroundColor: "#fff",
              }}
            >
              {children}
            </table>
          );
        },
        th({ children }) {
          return (
            <th
              style={{
                wordBreak: "break-word",
                border: "1px solid #000",
                backgroundColor: "#808080",
                paddingLeft: "0.75rem",
                paddingRight: "0.75rem",
                paddingTop: "0.25rem",
                paddingBottom: "0.25rem",
                color: "#fff",
              }}
            >
              {children}
            </th>
          );
        },
        td({ children }) {
          return (
            <td
              style={{
                wordBreak: "break-word",
                border: "1px solid #000",
                paddingLeft: "0.75rem",
                paddingRight: "0.75rem",
                paddingTop: "0.25rem",
                paddingBottom: "0.25rem",
                borderColor: "#000",
              }}
            >
              {children}
            </td>
          );
        },
      }}
    >
      {/* 是否是 streaming  长度是否达到, 当前的内容是否是最后一个 */}
      {`${content}${true ? "▍" : ""}`}
    </MemoizedReactMarkdown>
  );
};

export default ReactMarkdownRender;
