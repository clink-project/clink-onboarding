import React, { useRef, useState } from "react";
import { useDrop } from "react-dnd";
import CodeBlock from "./CodeBlock"; // 임포트 경로는 실제 구조에 맞게 조정해주세요.

const DropArea = () => {
  const [blocks, setBlocks] = useState<
    { id: string; left: number; top: number }[]
  >([]);
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop(() => ({
    accept: "block",
    drop: (item: { id: string; type: string }, monitor) => {
      const delta = monitor.getClientOffset();
      if (!delta) {
        return;
      }
      const left = Math.round(delta.x - 100);
      const top = Math.round(delta.y - 25);
      setBlocks((prevBlocks) => {
        const existingBlockIndex = prevBlocks.findIndex(
          (block) => block.id === item.id,
        );
        if (existingBlockIndex >= 0) {
          return prevBlocks.map((block, index) =>
            index === existingBlockIndex ? { ...block, left, top } : block,
          );
        } else {
          return [...prevBlocks, { id: item.id, left, top }];
        }
      });
    },
  }));

  drop(ref);

  return (
    <div
      ref={ref}
      style={{
        border: "1px dashed gray",
        padding: "20px",
        minHeight: "300px",
        position: "relative",
        backgroundColor: "white",
      }}
    >
      {blocks.map((block) => (
        <CodeBlock
          key={block.id}
          id={block.id}
          left={block.left}
          top={block.top}
          isOriginal={false}
        />
      ))}
    </div>
  );
};

export default DropArea;
