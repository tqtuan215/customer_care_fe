import { useEffect, useState } from "react";

const CustomerDetail = ({ id }) => {
    const [data, setData] = useState(null);
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

        <ul>
            {data.map(x => (
                <li key={x.log_id}>
                    {x.condition.map(fa => (
                        <span>{ fa.attribute.attributeName }</span>
                    ))}
                </li>
            ))}
        </ul>

    )
}

export default CustomerDetail