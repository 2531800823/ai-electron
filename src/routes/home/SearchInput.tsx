import React, { FC, useRef, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { StringUtils } from "@/utils";

interface SearchInputProps {}

const SearchInput: FC<SearchInputProps> = (props) => {
  const {} = props;

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      return;
    }
    if (event.shiftKey) {
      event.preventDefault();
    }
  };

  return (
    <div className={styles.inputMain}>
      <textarea
        ref={textareaRef}
        value={value}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        maxLength={2000}
        placeholder="有什么问题尽管问我"
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect="off"
        className={styles.textInput}
      />
      <i className={classNames(styles.icon, StringUtils.isBlank(value) && styles.iconDisabled)}>
        <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M42 6L4 20.1383L24 24.0083L29.0052 44L42 6Z" stroke="#333" strokeWidth="3" strokeLinejoin="bevel" />
          <path
            d="M24.0083 24.0084L29.6651 18.3516"
            stroke="#333"
            strokeWidth="3"
            strokeLinecap="square"
            strokeLinejoin="bevel"
          />
        </svg>
      </i>
    </div>
  );
};

export default SearchInput;
