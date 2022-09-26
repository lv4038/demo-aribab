import { useEffect, useState } from "react";
import { throttle } from "underscore";

export default function useScrollPosition() {
  const [scrollX, setScrollX] = useState();
  const [scrollY, setScrollY] = useState();

  useEffect(() => {
    // 节流
    const handleScroll = throttle(() => {
      // 滚动页面时保存滚动的值
      setScrollX(window.scrollX);
      setScrollY(window.scrollY);
    }, 100);
    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, []);

  return { scrollX, scrollY };
}
