import { useEffect, useState } from "react";
import type { BlockPropsType } from "../..";
import { Input } from "antd";

export const TitleBlock: React.FC<BlockPropsType> = ({
  content,
  onChange,
  readOnly,
  id,
}) => {
  const [value, setValue] = useState(content.content);

  // 当 content.content 变化时同步 value
  useEffect(() => {
    setValue(content.content);
  }, [content.content]);

  // 节流更新，仅依赖 value 和 onChange
  useEffect(() => {
    const handler = setTimeout(() => {
      if (content.content === value) {
        return; // 如果内容没有变化，则不更新
      }
      onChange?.({ ...content, content: value });
    }, 300);

    return () => clearTimeout(handler);
  }, [value, onChange, content]);

  return (
    <div className="title-block" id={id}>
      {readOnly ? (
        <h1>{content.content}</h1>
      ) : (
        <Input
          type="text"
          className="title-input"
          value={value}
          variant="filled"
          onChange={(e) => setValue(e.target.value)}
          placeholder="输入标题内容..."
        />
      )}
    </div>
  );
};
