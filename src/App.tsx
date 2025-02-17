import { useState } from "react";
import "./styles.css";
import { data as json } from "./data";
import { List } from "./components/List";

export interface NodeProps {
  name: string;
  children?: NodeProps[];
}

export default function App() {
  const [data, setData] = useState(json);

  const handleAddNode = (nodeName: string) => {
    const name = prompt("Enter Name");
    const updatedData = (list: NodeProps[]) => {
      console.log(nodeName);
      return list.map((node: NodeProps) => {
        if (node.name === nodeName) {
          console.log("inside parent node " + nodeName);
          if (node.children) {
            return {
              ...node,
              children: [...node.children, { name: name, children: [] }],
            };
          }
        }
        if (node.children) {
          console.log("inside child node " + nodeName);
          return { ...node, children: updatedData(node.children) };
        }
        return node;
      });
    };
    setData((prev) => updatedData(prev));
  };

  return (
    <div className="App">
      <h1>File/Folder explorer</h1>
      <List list={data} handleAddNode={handleAddNode} />
    </div>
  );
}
