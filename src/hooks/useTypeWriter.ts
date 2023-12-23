import TypeWriter from "@/utils/typeWriter";
import React, { useState, useEffect, useRef } from "react";

const writer = new TypeWriter();

export default function useTypeWriter(str: string) {
  const [word, setWord] = useState<null | string>(null);

  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    setWord(writer.startTypeWord(str));
  }, [str]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setWord(writer.typing());
    }, writer.rd());

    return function clear() {
      clearInterval(intervalRef.current);
    };
  }, [word]);

  return word;
}
