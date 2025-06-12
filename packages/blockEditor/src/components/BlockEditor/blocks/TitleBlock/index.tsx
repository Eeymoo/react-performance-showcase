import type { BlockType } from "../..";
import { TitleBlock } from "./TitleBlock";

const titleBlockInfo: BlockType = {
  id: "title-block",
  type: "title",
  component: TitleBlock,
  defaultContent: {
    id: `title_${Date.now()}_${Math.random()}`,
    order: 0,
    type: "title",
    content: "默认标题",
    required: true,
  },
  label: "标题",
  icon: <>标题图标</>
};

export default titleBlockInfo;
