import InputTextSelect from "./InputTextSelect"

const Criteria = () => {
    const options = [{id:1, value:"mot"},{id:2, value:"hai"}]
    return(
        <div>
            <InputTextSelect options={options} name={'tieu chi'}/>
        </div>
    )
}

export default Criteria