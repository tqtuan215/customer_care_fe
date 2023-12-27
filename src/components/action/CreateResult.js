import { Button, Input } from "antd"
import { useState } from "react"
import InputTextSelect from "./InputTextSelect"
import MyToggleComponent from "./MyToggleComponent"

const CreateResult = ({ index, onDelete }) => {
    const [results, setResults] = useState([])
    const options = ['Option 1', 'Option 2', 'Option 3']

    const handleAddResultClick = () => {
        setResults(prevResults => [...prevResults, <MyToggleComponent options={options} index={results.length} key={results.length}/>])
    }

    return (
        <div>
            <Button onClick={handleAddResultClick}>Them ket qua</Button>
            
            {results.map((result, index)=>(
                <div key={index}>{result}</div>
            ))}
        </div>
    )
}

export default CreateResult