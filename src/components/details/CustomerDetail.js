import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../header/Header";

const CustomerDetail = () => {
    const { id } = useParams()
    const [data, setData] = useState([]);
    console.log(id)
    const url = "http://localhost:8080"
    useEffect(() => {
        // Get product data
        console.log("get data")
        const getProduct = async () => {
            const response = await fetch(`${url}/log/${id}`);
            const rs = await response.json();
            setData(rs);
            console.log(rs)
        };
        getProduct();
    }, [id]);
    return (
        <div>
            <Header />
            
            <ul>
                {data.map(x => (
                    <div>
                        <span> {x.finalAction.customer.name}</span>
                        <li key={x.log_id}>

                            {x.condition.attribute.attributeName}{' '}{x.condition.operator.symbol}{' '}{x.condition.value === '' ? 'null' : x.condition.value}{'. Lúc xét có giá trị '}{x.customerValue}
                        </li>
                    </div>
                ))}
            </ul>
        </div>

    )
}

export default CustomerDetail