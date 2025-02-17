import { useState } from "react";
import "../../src/styles.css";
import { NodeProps } from "../App";

export const List = ({
  list,
  handleAddNode,
}: {
  list: NodeProps[];
  handleAddNode: (name: string) => void;
}) => {
  const [isExpanded, setIsExpanded] = useState<Record<string, boolean>>({});

  return (
    <div className="container">
      {list.map((node, index) => {
        return (
          <div key={`${node.name}-${index}`}>
            {node.children && (
              <span
                onClick={() =>
                  setIsExpanded((prev) => {
                    return { ...prev, [node.name]: !prev[node.name] };
                  })
                }
              >
                {isExpanded[node.name] ? "-" : "+"}
              </span>
            )}
            <span>{node.name}</span>
            {node.children && (
              <span onClick={() => handleAddNode(node.name)}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfMt43f5llkF5OgPwtIozkZk38jQu2r-3XCg&s"
                  alt="icon"
                  className="icon"
                />
              </span>
            )}
            {isExpanded[node.name] && node.children && (
              <List list={node.children} handleAddNode={handleAddNode} />
            )}
          </div>
        );
      })}
    </div>
  );
};
