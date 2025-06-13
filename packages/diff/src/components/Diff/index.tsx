import { useCallback, useEffect, useState } from "react";
import type { FC } from "react";
import {
  diffChars,
  diffLines,
  diffSentences,
  diffWords,
  diffArrays,
  type ChangeObject,
} from "diff";
import {
  DiffSpan,
  DiffAbridgeSpan,
  DiffAddSpan,
  DiffRemoveSpan,
} from "./DiffSpan";

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
  
  /** Threshold for filtering differences, default is 0.85. */
  threshold?: number;

  /** Function to convert a string into an array, default splits by lines. */
  toArray?: (string: string) => string[];
}

/**
 * Diff component responsible for rendering the differences between two pieces of content.
 *
 * @param props - The props for the Diff component.
 * @param props.diffType - The type of diff to perform. Can be "char", "word", "line", "sentence", or "array". Defaults to "char".
 * @param props.diffMode - The mode in which the diff should be displayed. Can be "current", "history", or "abridge". Defaults to "current".
 * @param props.historyContent - The original or historical content to compare.
 * @param props.currentContent - The new or current content to compare against the historical content.
 * @param props.threshold - A threshold value for filtering differences. Defaults to 0.85.
 * @param props.toArray - A custom function to convert a string into an array. Defaults to splitting the string by newline.
 *
 * The component uses the provided diffType to determine the appropriate diff algorithm to compute the differences
 * between historyContent and currentContent. When diffMode is set to "history" or "current", it displays the respective
 * content without diffing. Otherwise, for non-array diff types, it performs the comparison.
 *
 * The computed differences are stored in the component's state (diffArray) and then rendered as a series of styled spans.
 *
 * @returns A JSX element containing the visual representation of the diff.
 */
export const Diff: FC<DiffProps> = (props: DiffProps) => {
  const {
    diffType = "char",
    diffMode = "current",
    historyContent = "",
    currentContent,
    threshold = 0.85,
    toArray = (string: string) => string.split("\n"), // 默认将字符串按行分割成数组
  } = props;
  const [diffArray, setDiffArray] = useState<
    ChangeObject<string | string[]>[]
  >([]);

  // 处理阈值方法
  const thresholdFunc =  useCallback((
    value: ChangeObject<string | string[]>[],
    threshold: number = 0.85
  ) => {
    const result: ChangeObject<string | string[]>[] = [];
    let totalCount = 0;
    let addedCount = 0;
    let removedCount = 0;
    let originalCount = 0;
    let originalValue = "";
    let currentValue = "";

    if (value.length === 0) {
      return result;
    }
    
    for (const item of value) {
      if (item.added) {
        addedCount += item.count || 0;
        currentValue += Array.isArray(item.value) ? item.value.join("") : item.value || "";
      } else if (item.removed) {
        removedCount += item.count || 0;
        originalValue += Array.isArray(item.value) ? item.value.join("") : item.value || "";
      } else {
        originalCount += item.count || 0;
        originalValue += Array.isArray(item.value) ? item.value.join("") : item.value || "";
        currentValue += Array.isArray(item.value) ? item.value.join("") : item.value || "";
      }

      totalCount += item.count || 0;
    }

    if (
      originalCount === 0 ||
      (addedCount + removedCount) / totalCount >= threshold ||
      originalCount / totalCount <= (1 - threshold)
    ) {
      result.push({
        value: Array.isArray(originalValue) ? originalValue.join("") : originalValue,
        added: false,
        removed: true,
        count: originalValue.length,
      });
      result.push({
        value: Array.isArray(currentValue) ? currentValue.join("") : currentValue,
        added: true,
        removed: false,
        count: currentValue.length,
      });

      return result;
    }
    return value;
  }, []);

  useEffect(() => {
    let diff = diffChars;
    let diffs: ChangeObject<string | string[]>[] = [];

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
    }  else if (diffType === "word") {
      diffs = diffWords(historyContent, currentContent, {
        intlSegmenter: Intl.Segmenter ? new Intl.Segmenter(undefined, { granularity: "word" }) : undefined,
      });
    } else if (diffType !== "array") {
      diffs = diff(historyContent, currentContent);
    }

    diffs = thresholdFunc(diffs, threshold);
    setDiffArray(diffs || []);
  }, [historyContent, currentContent, diffType, diffMode, toArray, threshold]);

  return (
    <div className="diff-container">
      <div className="diff-content">
        {diffArray?.map((item, index) => {
          let Span = DiffSpan;
          let value = item.value || "";
          let className = "diff-normal";
          if (item.added) {
            Span = DiffAddSpan;
            className = "diff-added";
          } else if (item.removed) {
            Span = DiffRemoveSpan;
            className = "diff-removed";
          } else if (
            diffMode === "abridge" &&
            !item.added &&
            !item.removed &&
            value.length > 20
          ) {
            Span = DiffAbridgeSpan;
            const startValue = value.slice(0, 10);
            const endValue = value.slice(-10);
            value = `${startValue} ... ${endValue}`;
            className = "diff-abridge";
          }

          return <Span className={className} key={`${item.value}-${index}`}>{value}</Span>;
        })}
      </div>
    </div>
  );
};

export default Diff;
