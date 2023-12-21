import { useState } from "react";

const Tree = () => {
    const [nodes, setNodes] = useState([
        {
            type: "root",
            name: "Cây",
            children: [],
        },
    ]);

    const onAdd = (type, name) => {
        // Thêm một nút logic con
        setNodes([
            ...nodes,
            {
                type: type,
                name: name,
            },
        ]);
    };

    // const onDelete = (node) => {
    //     // Xóa một nút duy nhất
    //     setNodes(nodes.filter((n) => n.id !== node.id));
    // };

    return (
        <div>
            {nodes.map((node, index) => {
                return (
                    <div key={node.id}>
                        {node.type === "root" && (
                            <>
                                <h3>{node.name}</h3>
                                <button onClick={() => {
                                    onAdd("condition", "Điều kiện mới");
                                }}>Thêm điều kiện</button>
                            </>
                        )}
                        {node.type === "condition" && (
                            <div>
                                <h4>{node.name}</h4>
                                {node.children && (
                                    <Tree data={node.children} />
                                )}
                                <button onClick={() => {
                                    // Thêm một nút điều kiện con
                                    onAdd("condition", "Điều kiện mới");
                                }}>Thêm điều kiện</button>
                                <button onClick={() => {
                                    // Thêm một nút logic con
                                    onAdd("logic", "Logic mới");
                                }}>Thêm logic</button>
                                <button onClick={() => {
                                    // Xóa nút hiện tại
                                    setNodes(nodes.filter((n) => n.id !== node.id));
                                }}>Xóa</button>
                            </div>
                        )}
                        {node.type === "logic" && (
                            <div>
                                <h4>{node.name}</h4>
                                {node.children && (
                                    <Tree data={node.children} />
                                )}
                                <button onClick={() => {
                                    // Thêm một nút điều kiện con
                                    onAdd("condition", "Điều kiện mới");
                                }}>Thêm điều kiện</button>
                                <button onClick={() => {
                                    // Thêm một nút logic con
                                    onAdd("logic", "Logic mới");
                                }}>Thêm logic</button>
                                <button onClick={() => {
                                    // Xóa nút hiện tại
                                    setNodes(nodes.filter((n) => n.id !== node));
                                }}>Xóa</button>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Tree;
