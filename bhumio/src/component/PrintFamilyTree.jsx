import * as React from "react";
import { Tree, TreeNode } from "react-organizational-chart";

const PrintFamilyTree = React.forwardRef(({ family }, ref) => {
  const renderTree = (children) => {
    if (children) {
      return children?.map((child) => {
        return(<TreeNode label={<div>{child.name}</div>}>
            {child.children && child.children.length > 0 && (
                renderTree(child.children)
            )}
        </TreeNode>);
      });
    } else {
      return null;
    }
  };
  return (
    <div ref={ref}>
      <Tree 
          lineWidth={'2px'}
          lineColor={'green'}
          lineBorderRadius={'10px'}
      label={<div >{family.name}</div>}>
        {renderTree(family.children)}
      </Tree>
    </div>
  );
});
export default PrintFamilyTree;
