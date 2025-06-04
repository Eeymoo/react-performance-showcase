import React, { useEffect } from "react";
import {
  diffChars,
  diffLines,
  diffSentences,
  diffWords,
  diffArrays,
  type ChangeObject,
} from "diff";
import styled from "@emotion/styled";
const DiffSpan = styled.span`
  color: #333;
  border-radius: 4px;
  padding: 0 2px;
  font-size: 14px;
  line-height: 1.5;
  display: inline;
  white-space: pre-wrap;
`;
const DiffAbridgeSpan = styled.span`
  // 前灰色
  color: #999;
  background-color: #f0f0f0;
  padding: 0 2px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1.5;
  display: inline;
  white-space: pre-wrap;`;
const DiffAddSpan = styled.span`
  color: green;
  background-color: #e6ffed;
  padding: 0 2px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1.5;
  display: inline;
  white-space: pre-wrap;
`;
const DiffRemoveSpan = styled.span`
  color: red;
  background-color: #fff1f0;
  padding: 0 2px;
  font-size: 14px;
  line-height: 1.5;
  display: inline;
  white-space: pre-wrap;
  text-decoration: line-through;
`;

interface DiffProps {
  /**
   * Specifies the granularity of the comparison:
   * "word" - Compares content at the word level.
   * "line" - Compares content at the line level.
   * "sentence" - Compares content at the sentence level.
   * "char" - Compares content at the character level (default).
   * "array" - Compares content as arrays, useful for structured data.
   */
  diffType?: "word" | "line" | "sentence" | "char" | "array";

  /**
   * Specifies the comparison mode:
   * "history" - Compares against historical content.
   * "current" - Compares against current content.
   * "compare" - Compares two provided contents.
   *  "abridge" - A mode that might be used for a more compact view (not implemented).
   */
  diffMode?: "history" | "current" | "compare" | "abridge";

  /** Historical content for comparison. */
  historyContent?: string;

  /** Current content for comparison. */
  currentContent: string;

  /** Function to convert a string into an array, default splits by lines. */
  toArray?: (string: string) => string[];
}

export const Diff: React.FC<DiffProps> = (props: DiffProps) => {
  const {
    diffType = "char",
    diffMode = "current",
    historyContent = "",
    currentContent,
    toArray = (string: string) => string.split("\n"), // 默认将字符串按行分割成数组
  } = props;
  const [diffArray, setDiffArray] = React.useState<ChangeObject<string|string[]>[]>([]);
  useEffect(() => {
    let diff = diffChars;
    let diffs: ChangeObject<string|string[]>[] = [];

    if (diffType === "array") {
      const historyContents = toArray(historyContent || "");
      const currentContents = toArray(currentContent || "");
      diffs = diffArrays(historyContents, currentContents);
    }

    if (diffType === "word") {
      diff = diffWords; // 可以替换为 diffWords
    } else if (diffType === "line") {
      diff = diffLines; // 可以替换为 diffLines
    } else if (diffType === "sentence") {
      diff = diffSentences; // 可以替换为 diffSentences
    } else if (diffType === "char") {
      diff = diffChars; // 默认使用 diffChars
    }

    if (diffMode === "history") {
      diffs = [
        {
          value: historyContent,
          added: false,
          removed: false,
          count: historyContent.length,
        },
      ];
    } else if (diffMode === "current") {
      diffs = [
        {
          value: currentContent,
          added: false,
          removed: false,
          count: currentContent.length,
        },
      ];
    } else if (diffType !== "array") {
      diffs = diff(historyContent, currentContent);
    }
    setDiffArray(diffs || []);
  }, [historyContent, currentContent, diffType, diffMode]);

  return (
    <div className="diff-container">
      <div className="diff-content">
        {diffArray?.map((item, index) => {
          let Span = DiffSpan;
          let value = item.value || "";
          if (item.added) {
            Span = DiffAddSpan;
          } else if (item.removed) {
            Span = DiffRemoveSpan;
          } else if (diffMode === 'abridge' && !item.added && !item.removed && value.length > 20) {
            Span = DiffAbridgeSpan
            const startValue = value.slice(0, 10);
            const endValue = value.slice(-10);
            value = `${startValue} ... ${endValue}`;
          }

          return <Span key={`${item.value}-${index}`}>{value}</Span>;
        })}
      </div>
    </div>
  );
};

export default Diff;
