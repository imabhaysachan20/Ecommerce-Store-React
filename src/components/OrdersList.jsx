import { useLoaderData } from "react-router-dom"
import SectionTitle from "./SectionTitle";
import day from "dayjs";
import advanceFormat from "dayjs/plugin/advancedFormat"

const OrderList = () => {
    const {orders,meta} = useLoaderData();

 return (
    <div className="mt-8">
        <div className="mb-4 capitalize">
            <h4 className="mb-4 capitalize">
            total orders: {meta.pagination.total}
            </h4> 
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Products</th>
                        <th>Cost</th>
                        <th className="hidden sm:block">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order)=>{
                            const id = order.id;
                            const {name,address,numItemsInCart,orderTotal,createdAt} = order.attributes;
                            const date = day(createdAt).format("hh:mm a - MMM D, YYYY");
                            return <tr key={id}>
                                <td>{name}</td>
                                <td>{address}</td>
                                <td>{numItemsInCart}</td>
                                <td>{orderTotal}</td>
                                <td className="hidden sm:block">{date}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
 )
}

export default OrderList
