import axios from "axios"
import { useEffect, useState } from "react"


export default function Overview() {

    const [data, setData] = useState([])

    useEffect(() => {

        function get() {

            axios.get('/api/v1/transaction/get')
            .then((res) => {
                console.log(res.data.data);
                setData(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
        }

        get();

    },[])
    
    return (
        <div className="mt-4">
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">item</th>
                        <th scope="col">type</th>
                        <th scope="col">quanity</th>
                        <th scope="col">amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((items, index) => (
                            <tr key={index}>
                                <td>{items.item}</td>
                                <td>{items.type}</td>
                                <td>{items.quantity}</td>
                                <td>{items.amount}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )


}



