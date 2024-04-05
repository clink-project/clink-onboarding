import React, { useRef } from "react";
import { useDrag } from "react-dnd";

const CodeBlock = ({
  id,
  left,
  top,
  isOriginal,
}: {
  id: string;
  left: number;
  top: number;
  isOriginal?: boolean;
}) => {
  const ref = useRef(null);

  const [, drag] = useDrag(() => ({
    type: "block",
    item: { id },
  }));

  drag(ref);

  return (
    <div
      ref={ref}
      style={{
        position: isOriginal ? "absolute" : "relative",
        left: `${left}px`,
        top: `${top}px`,
        backgroundColor: "lightgray",
        padding: "10px",
        cursor: "move",
        width: "200px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      EC2 인스턴스 {id}
    </div>
  );
};

export default CodeBlock;
