# Diff 组件

一个用于展示文本差异比较的 React 组件，支持多种对比粒度和显示模式。

## 基础用法

```tsx
function Example() {
  return (
    <Diff
      currentContent="这是新的内容"
      historyContent="这是旧的内容"
      diffType="char"
      diffMode="compare"
    />
  );
}
```

## Props 说明

### diffType
对比粒度类型，可选值：
- `char`: 字符级别对比（默认）
- `word`: 单词级别对比
- `line`: 行级别对比
- `sentence`: 句子级别对比
- `array`: 数组对比模式

### diffMode
显示模式，可选值：
- `history`: 仅显示历史内容
- `current`: 仅显示当前内容（默认）
- `compare`: 显示差异对比
- `abridge`: 简略模式，长文本将被缩略显示

### historyContent
历史版本内容（字符串）

### currentContent
当前版本内容（字符串）

### toArray
自定义转换函数，用于将字符串转换为数组（仅在 diffType="array" 时使用）

## 高级用法示例

### 数组对比模式

```tsx
function ArrayDiffExample() {
  const toArray = (str: string) => str.split(',');
  
  return (
    <Diff
      currentContent="apple,banana,orange"
      historyContent="apple,grape,orange"
      diffType="array"
      diffMode="compare"
      toArray={toArray}
    />
  );
}
```

### 简略模式

```tsx
function AbridgeExample() {
  return (
    <Diff
      currentContent="这是一段非常长的内容...中间省略...最后的内容"
      historyContent="这是一段较短的内容"
      diffMode="abridge"
    />
  );
}
```

## 样式定制

组件使用以下 CSS 类名，可通过覆盖相应的样式来自定义外观：

- `.diff-container`: 容器样式
- `.diff-content`: 内容区域样式
- `.diff-added`: 新增内容样式
- `.diff-removed`: 删除内容样式
- `.diff-normal`: 普通内容样式
- `.diff-abridge`: 简略内容样式