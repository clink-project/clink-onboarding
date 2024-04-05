import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CodeBlock from "./CodeBlock";
import DropArea from "./DropArea";

export default function Home() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <DropArea />
        <CodeBlock id="1" left={0} top={0} isOriginal={true} />
      </div>
    </DndProvider>
  );
}
