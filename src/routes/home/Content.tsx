import { FC, Fragment } from "react";
import styles from "./content.module.scss";
import ReactMarkdownRender from "@/components/markdown/ReactMarkdownRender";

const data = [
  {
    role: "user",
    content:
      "很抱歉，如果您无法提供更多的信息或上下文，以便我更好的为您解答。很抱歉，如果您无法提供更多的信息或上下文，我可能无法理解您的请求。请提供更多的细节或澄清您的问题，以便我更好的为您解答。",
  },
  {
    role: "assistant",
    content: `当然，我可以帮你写一个 JavaScript 数组的例子。下面是一个简单的数组示例：
  \`\`\`javascript
  // 创建一个包含数字和字符串的数组
  var myArray = [1, 2, 3, "Hello", "World"];
  // 打印数组的长度
  console.log("数组长度：" + myArray.length);
  // 遍历并打印数组的每个元素
  myArray.forEach(function(element) {
  console.log(element);
  });
  // 在数组末尾添加元素
  myArray.push("ChatGPT");
  // 在数组的特定位置插入元素
  myArray.splice(2, 0, "OpenAI");
  // 通过索引访问数组元素
  console.log("第一个元素：" + myArray[0]);
  console.log("第二个元素：" + myArray[1]);
  // 从数组中删除元素
  myArray.pop();
  // 判断元素是否存在于数组中
  var elementExists = myArray.includes("Hello");
  console.log("元素 'Hello' 是否存在：" + elementExists);
  \`\`\`
  这只是一个简单的示例，JavaScript 数组还有许多其他有用的方法可以使用。如果你有其他问题，请随时提问！`,
  },
  {
    role: "assistant",
    content: `当然，我可以帮你写一个 JavaScript 数组的例子。下面是一个简单的数组示例：
\`\`\`javascript
// 创建一个包含数字和字符串的数组
var myArray = [1, 2, 3, "Hello", "World"];
// 打印数组的长度
console.log("数组长度：" + myArray.length);
// 遍历并打印数组的每个元素
myArray.forEach(function(element) {
console.log(element);
});
// 在数组末尾添加元素
myArray.push("ChatGPT");
// 在数组的特定位置插入元素
myArray.splice(2, 0, "OpenAI");
// 通过索引访问数组元素
console.log("第一个元素：" + myArray[0]);
console.log("第二个元素：" + myArray[1]);
// 从数组中删除元素
myArray.pop();
// 判断元素是否存在于数组中
var elementExists = myArray.includes("Hello");
console.log("元素 'Hello' 是否存在：" + elementExists);
\`\`\`
这只是一个简单的示例，JavaScript 数组还有许多其他有用的方法可以使用。如果你有其他问题，请随时提问！`,
  },
  {
    role: "user",
    content:
      "很抱歉，如果您无法提供更多的信息或上下文，以便我更好的为您解答。很抱歉，如果您无法提供更多的信息或上下文，我可能无法理解您的请求。请提供更多的细节或澄清您的问题，以便我更好的为您解答。",
  },
  {
    role: "user",
    content:
      "很抱歉，如果您无法提供更多的信息或上下文，以便我更好的为您解答。很抱歉，如果您无法提供更多的信息或上下文，我可能无法理解您的请求。请提供更多的细节或澄清您的问题，以便我更好的为您解答。",
  },
  {
    role: "assistant",
    content: `要使用jQuery，您需要先在您的网页中引入jQuery库文件。您可以通过在HTML文件中添加以下代码来引入jQuery库：
\`\`\`html
script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>        
或者，您也可以将jQuery库文件下载到本地，并在HTML文件中使用以下代码引入：        
html
script src="path/to/jquery.min.js"></script>        
引入jQuery库后，您可以使用jQuery选择器来选择HTML元素，并使用jQuery方法对选定的元素进行操作。以下是一个简单的示例，演示如何使用jQuery选择一个元素并修改其内容：        
html
<!DOCTYPE html>
html>
head>
script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
body>
h1>Hello World!</h1>
script>
$(document).ready(function() {
$('h1').text('Hello jQuery!'); // 修改标题文本为 "Hello jQuery!"
});
</script>
</body>
</html>
\`\`\`        
在上面的示例中，\`$(document).ready()\` 函数确保在执行jQuery代码之前文档已经完全加载。$('h1') 选择器用于选择第一个 <h1> 元素，然后使用 .text() 方法将其文本内容修改为 "Hello jQuery!"。        
这只是jQuery的入门示例，您可以根据需要学习和使用更多的jQuery方法和选择器。`,
  },
];

enum Role {
  user = "user",
  assistant = "assistant",
}

interface ContentProps {}
const Content: FC<ContentProps> = (props) => {
  const {} = props;

  const loading = true;

  return (
    <div className={styles.main}>
      {data.map((item, index) => {
        return (
          <Fragment key={index}>
            {item.role === Role.user ? (
              <div className={styles.user}>
                <div className={styles.timer}>23:12</div>
                <div className={styles.content}>
                  <div></div>
                  <div className={styles.text}>{item.content}</div>
                </div>
              </div>
            ) : (
              <div className={styles.assistant}>
                {loading ? <ReactMarkdownRender content={item.content} /> : <div className={styles.loader}></div>}
              </div>
            )}
          </Fragment>
        );
      })}
      <div className={styles.stop}>
        <div className={styles.stopContainer}>
          <div className={styles.stopIcon}></div>
          <div className={styles.stopText}>停止回答</div>
        </div>
      </div>
    </div>
  );
};

export default Content;
