import type { BlockType } from "../..";
import { TableBlock } from "./TableBlock";

const tableBlockInfo: BlockType = {
  id: "table-block",
  type: "table",
  component: TableBlock,
  defaultContent: {
    id: `table_${Date.now()}_${Math.random()}`,
    order: 0,
    type: "table",
    content: "",
    required: false,
  },
  label: "表格",
  icon: <>表格图标</>
};

export default tableBlockInfo;
