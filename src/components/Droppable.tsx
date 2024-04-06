import React, { ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";

interface DroppableProps {
  id: string;
  children: ReactNode;
}

export function Droppable(props: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    backgroundColor: "blue",
    color: isOver ? "white" : "black",
    height: "200px",
    width: "500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
