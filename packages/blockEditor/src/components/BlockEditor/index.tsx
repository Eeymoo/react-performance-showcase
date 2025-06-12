import { diffArrays } from "diff";
import { Form } from "antd";
import ParagraphBlock from "./blocks/ParagraphBlock";
import TitleBlock from "./blocks/TitleBlock";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DeleteOutlined, DragOutlined } from "@ant-design/icons";
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import TableBlock from "./blocks/TableBlock";

export interface BlockEditorRef {
  registerBlockType: (block: BlockType) => void;
  getContent: () => BlockContentType[];
  setContent: (content: BlockContentType[]) => void;
  getDiff: () => any;
  getBlockTypes: () => BlockType[];
  addContent: (blockType: string) => void;
  validate: () => Promise<any>; // 修正类型声明
  getFormValues: () => Promise<any>;
}

export interface BlockEditorProps {
  content?: BlockContentType[];
  onChange?: (content: string) => void;
  readOnly?: boolean;
  height?: number;
  width?: number;
}

export interface BlockContentType {
  id: string; // 新增唯一标识
  order: number;
  type: string;
  content: string;
  required?: boolean;
}

export type BlockType = {
  id: string; // 新增唯一标识
  type: string;
  component: React.FC<BlockPropsType>;
  defaultContent: BlockContentType;
  label: string;
  icon: React.ReactNode;
  draggable?: boolean;
  canDelete?: boolean;
};

export interface BlockPropsType {
  id: string;
  content: BlockContentType;
  required?: boolean;
  readOnly?: boolean;
  onChange?: (content: BlockContentType) => void;
  onDelete?: () => void;
  canDelete?: boolean;
}

const defaultContent: BlockContentType[] = [
  {
    id: `title_${Date.now()}_${Math.random()}`,
    order: 0,
    type: "title",
    content: "默认标题",
    required: true,
  },
];

const BLOCK_TYPE = "BLOCK";

// 拖拽区块组件参数类型
interface DraggableBlockProps {
  id: string;
  index: number;
  moveBlock: (from: number, to: number) => void;
  children: React.ReactNode;
  canDrag: boolean;
  canDelete: boolean;
  onDelete: () => void;
}

const DraggableBlock: React.FC<DraggableBlockProps> = ({
  id,
  index,
  moveBlock,
  children,
  canDrag,
  canDelete,
  onDelete,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const dragHandleRef = React.useRef<HTMLSpanElement>(null);
  const [hovered, setHovered] = React.useState(false);

  const [{ isOver }, drop] = useDrop({
    accept: BLOCK_TYPE,
    hover(item: any, monitor) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const clientOffset = monitor.getClientOffset();
      if (!clientOffset) return;
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;
      moveBlock(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }),
    }),
  });

  const [{ isDragging }, drag] = useDrag({
    type: BLOCK_TYPE,
    item: { id, index },
    canDrag,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(dragHandleRef);
  drop(ref);

  const showActive = hovered || isOver || isDragging;

  return (
    <div
      ref={ref}
      className={[
        "flex items-center mb-2 rounded px-2 py-2 transition-all",
        showActive ? "bg-gray-100" : "",
        isOver ? "border border-blue-400" : "border border-transparent",
        isDragging ? "opacity-50" : "opacity-100",
      ].join(" ")}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* 拖拽手柄 */}
      <span
        ref={dragHandleRef}
        className="mr-2 text-gray-400 text-lg flex items-center justify-center"
        style={{
          width: 24,
          height: 24,
          cursor: canDrag && showActive ? "grab" : "default",
          opacity: showActive && canDrag ? 1 : 0,
          transition: "opacity 0.2s",
        }}
        title="拖拽排序"
      >
        {showActive && canDrag ? <DragOutlined /> : null}
      </span>
      <div className="flex-1 flex justify-center py-2">
        <div className="max-w-[800px] w-full">{children}</div>
      </div>
      {/* 删除按钮 */}
      <span
        className="ml-2 text-red-500 cursor-pointer flex items-center justify-center"
        style={{
          width: 24,
          height: 24,
          opacity: showActive && canDelete ? 1 : 0,
          transition: "opacity 0.2s",
          pointerEvents: showActive && canDelete ? "auto" : "none",
        }}
        onClick={showActive && canDelete ? onDelete : undefined}
        title="删除"
      >
        {showActive && canDelete ? <DeleteOutlined /> : null}
      </span>
    </div>
  );
};

const BlockEditor = forwardRef<BlockEditorRef, BlockEditorProps>((props, ref) => {
  const [form] = Form.useForm();
  const [readOnly, setReadOnly] = useState<boolean>(props.readOnly || false);
  const [initialContent] = useState<BlockContentType[]>(
    (props.content || defaultContent).map(block => ({
      ...block,
      id: block.id || `${block.type}_${Date.now()}_${Math.random()}`
    }))
  );
  const [content, setContent] = useState<BlockContentType[]>(
    (props.content || defaultContent).map(block => ({
      ...block,
      id: block.id || `${block.type}_${Date.now()}_${Math.random()}`
    }))
  );
  const [blockTypes, setBlockTypes] = useState<BlockType[]>([]);
  const [blockTypeMap, setBlockTypeMap] = useState<Map<string, BlockType>>(new Map());

  // 区块内容变更回调
  const handleChange = useCallback(
    (id: string, changedBlock: BlockContentType) => {
      setContent((prevContent) =>
        prevContent.map((block) =>
          block.id === id ? { ...block, ...changedBlock } : block
        )
      );
      if (props.onChange) {
        props.onChange(JSON.stringify(content));
      }
    },
    [props, content]
  );

  // 删除区块
  const handleDelete = useCallback(
    (id: string) => () => {
      setContent((prevContent) =>
        prevContent.filter((block) => block.id !== id)
      );
    },
    []
  );

  // 注册区块类型
  const registerBlockType = useCallback((block: BlockType) => {
    setBlockTypes((prevBlocks) => {
      if (prevBlocks.some((b) => b.type === block.type)) {
        console.warn(`Block type ${block.type} is already registered.`);
        return prevBlocks;
      }
      return [...prevBlocks, block];
    });
    setBlockTypeMap((prevMap) => {
      const resultMap = new Map(prevMap).set(block.type, block);
      return resultMap;
    });
  }, []);

  // 获取当前内容
  const getContent = useCallback(() => {
    return content || [];
  }, [content]);

  // diff 相关类型修正
  const getDiff = useCallback(() => {
    const originalContentString = initialContent?.map((item) =>
      JSON.stringify(item)
    );
    const contentString = content?.map((item) => JSON.stringify(item));
    const diff = diffArrays(originalContentString, contentString);
    const diffResult = diff
      .map((value) => ({
        ...value,
        value: (value.value as string[]).map((item) => JSON.parse(item)) || [],
      }))
      .filter((part) => part.added || part.removed)
      .map((part) => {
        // 只取第一个 order 作为代表
        const order = Array.isArray(part.value) && part.value.length > 0 ? part.value[0].order : undefined;
        return {
          added: part.added || false,
          removed: part.removed || false,
          originalContent: initialContent.find(
            (item) => item.order === order
          ),
          newContent: part.value,
        };
      });
    return diffResult;
  }, [content, initialContent]);

  // 获取所有区块类型
  const getBlockTypes = useCallback(() => {
    return blockTypes || [];
  }, [blockTypes]);

  const handleBlockChange = useCallback(
    (id: string) => (changedBlock: BlockContentType) => {
      form.setFieldsValue({ [`block-${changedBlock.order}`]: changedBlock.content });
      handleChange(id, changedBlock);
    },
    [form, handleChange]
  );

  // 新增区块内容
  const addContent = useCallback(
    (blockType: string) => {
      const block = blockTypeMap.get(blockType);
      if (!block) {
        console.warn(`Block type ${blockType} is not registered.`);
        return;
      }
      setContent((prevContent) => {
        const newOrder = prevContent.length || 0;
        const newBlock: BlockContentType = {
          ...block.defaultContent,
          order: newOrder,
          type: block.type,
          content: block.defaultContent.content || "",
          id: `${block.type}_${Date.now()}_${Math.random()}`,
        };
        const result = [...prevContent, newBlock];
        const fields: Record<string, any> = {};
        result.forEach((b) => {
          fields[`block-${b.order}`] = b.content;
        });
        form.setFieldsValue(fields);
        return result;
      });
    },
    [blockTypeMap, form]
  );

  // validate 不要直接暴露 form.validateFields
  const validate = useCallback(() => form.validateFields(), [form]);

  // 更新区块类型映射表
  useEffect(() => {
    setBlockTypeMap(new Map(blockTypes?.map((block) => [block.type, block]) || []));
  }, [blockTypes]);

  // 默认注册区块类型
  useEffect(() => {
    // 保证 defaultContent 有 id 字段
    registerBlockType({
      ...ParagraphBlock,
      defaultContent: {
        ...ParagraphBlock.defaultContent,
        id: ParagraphBlock.defaultContent.id || `paragraph_${Date.now()}_${Math.random()}`
      }
    });
    registerBlockType({
      ...TitleBlock,
      draggable: false,
      defaultContent: {
        ...TitleBlock.defaultContent,
        id: TitleBlock.defaultContent.id || `title_${Date.now()}_${Math.random()}`
      }
    });
    registerBlockType({
      ...TableBlock,
      defaultContent: {
        ...TableBlock.defaultContent,
        id: TableBlock.defaultContent.id || `table_${Date.now()}_${Math.random()}`
      }
    });
  }, []);

  useEffect(() => {
    setReadOnly(props.readOnly || false);
  }, [props.readOnly]);

  useImperativeHandle(ref, () => ({
    registerBlockType,
    getContent,
    setContent: (blocks: BlockContentType[]) => setContent(
      blocks.map(block => ({
        ...block,
        id: block.id || `${block.type}_${Date.now()}_${Math.random()}`
      }))
    ),
    getDiff,
    getBlockTypes,
    addContent,
    validate,
    getFormValues: () => {
      return form?.validateFields().catch((err) => {
        form?.scrollToField(`block-${err.blockId}`);
      });
    },
  }));

  useEffect(() => {
    const fields: Record<string, any> = {};
    (props.content || defaultContent).forEach((block) => {
      fields[`block-${block.order}`] = block.content;
    });
    form.setFieldsValue(fields);
  }, [form, props.content]);

  // 拖拽排序逻辑
  const moveBlock = useCallback(
    (fromIndex: number, toIndex: number) => {
      setContent((prevContent) => {
        const updated = [...prevContent];
        const [removed] = updated.splice(fromIndex, 1);
        updated.splice(toIndex, 0, removed);
        const newContent = updated.map((block, idx) => ({ ...block, order: idx }));
        const fields: Record<string, any> = {};
        newContent.forEach((block) => {
          fields[`block-${block.order}`] = block.content;
        });
        form.setFieldsValue(fields);
        return newContent;
      });
    },
    [form]
  );

  return (
    <div className="block-editor">
      {JSON.stringify(content, null, 2)}
      <DndProvider backend={HTML5Backend}>
        <Form form={form} scrollToFirstError>
          {content?.map((block, idx) => {
            if (!blockTypeMap.has(block.type)) {
              console.warn(`Block type ${block.type} not registered`);
              return null;
            }
            const thisBlock = blockTypeMap.get(block.type);
            const Component = thisBlock?.component || (() => <></>);
            const canDrag = !readOnly && (thisBlock?.draggable !== false);
            const canDelete =
              !readOnly &&
              (thisBlock?.canDelete !== false) &&
              content.length > 1;

            return (
              <DraggableBlock
                key={block.id}
                id={block.id}
                index={idx}
                moveBlock={moveBlock}
                canDrag={canDrag}
                canDelete={canDelete}
                onDelete={handleDelete(block.id)}
              >
                <Form.Item
                  name={`block-${block.order}`}
                  rules={[
                    {
                      required: block.required,
                      message: `${thisBlock?.label || "该块"}内容不能为空`,
                    },
                  ]}
                  noStyle
                >
                  <Component
                    id={block.id}
                    content={block}
                    required={block.required}
                    readOnly={readOnly}
                    onDelete={() => handleDelete(block.id)}
                    canDelete={canDelete}
                    onChange={handleBlockChange(block.id)}
                  />
                </Form.Item>
              </DraggableBlock>
            );
          })}
        </Form>
      </DndProvider>
    </div>
  );
});

export default BlockEditor;
