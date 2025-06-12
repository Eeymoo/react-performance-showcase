import type { BlockType } from "../..";
import { ParagraphBlock } from "./ParagraphBlock";

const paragraphBlockInfo: BlockType = {
  id: "paragraph-block",
  type: "paragraph",
  component: ParagraphBlock,
  defaultContent: {
    id: `paragraph_${Date.now()}_${Math.random()}`,
    order: 0,
    type: "paragraph",
    content: "",
    required: false,
  },
  label: "输入框",
  icon: <>输入框图标</>
};

export default paragraphBlockInfo;
