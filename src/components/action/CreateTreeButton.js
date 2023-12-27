import { useState } from "react"
import App2 from "../tree1/App2"

const CreateTreeButton = ({ index, onDelete }) => {
    const [trees, setTrees] = useState([])
    const handleAddTreeClick = () => {
        setTrees((prevTrees) => [...prevTrees, <App2 key={trees.length} index={trees.length} onDelete={handleDeleteComponent} />])
    }

    const handleDeleteComponent = (index) => {
        setTrees((prevComponents) => prevComponents.filter((_,i) => i !== index));
    };

    return (
        <div>
            <button onClick={handleAddTreeClick}>Add tree</button>

            {trees.map((tree, index) => (
                <div key={index}>{tree}</div>
                
            ))}
        </div>
    )
}

export default CreateTreeButton