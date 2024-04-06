import React, { useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { Draggable } from "../../components/Draggable";
import { Droppable } from "../../components/Droppable";
import Image from "next/image";
import ec2 from "@images/ec2.png";

export default function Home() {
  const [parent, setParent] = useState<string | null>(null);
  const draggable = (
    <Draggable id="draggable">
      <Image src={ec2} alt="ec2" />
    </Draggable>
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!parent ? draggable : null}
      <Droppable id="droppable">
        {parent === "droppable" ? draggable : "VPC"}
      </Droppable>
    </DndContext>
  );

  function handleDragEnd(event: DragEndEvent) {
    const overId = event.over?.id;
    setParent(typeof overId === "string" ? overId : null);
  }
}
