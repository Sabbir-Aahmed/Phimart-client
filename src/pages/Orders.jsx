import OrderCard from "../Components/Orders/OrderCard";

const Orders = () => {
    const orders = [
    {
        id: "0979e8db-e575-45f7-a626-7dd40ee28c66",
        user: 1,
        status: "Not_paid",
        total_price: 564.14,
        created_at: "2025-09-08T13:11:41.235592Z",
        items: [
        {
            id: 1,
            product: {
            id: 12,
            name: "Jeans",
            price: 292.1,
            },
            quantity: 1,
            price: 292.1,
            total_price: 292.1,
        },
        {
            id: 2,
            product: {
            id: 11,
            name: "T-Shirt",
            price: 37.44,
            },
            quantity: 1,
            price: 37.44,
            total_price: 37.44,
        },
        {
            id: 3,
            product: {
            id: 2,
            name: "Laptop",
            price: 46.92,
            },
            quantity: 5,
            price: 46.92,
            total_price: 234.6,
        },
        ],
    },
    ];

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-2xl font-bold mb-6">Order Details</h1>
            {orders.map(order => (
                <OrderCard key={order.id} order={order}/>
            ))}
        </div>
    );
};

export default Orders;