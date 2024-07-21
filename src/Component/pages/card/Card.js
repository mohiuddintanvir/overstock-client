import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import CardDetails from './CardDetails';

const Card = () => {
    const { user } = useContext(AuthContext);
    const [card, setCard] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user && user.email) {
            fetch(`https://over-stcok-server-usx2-icrxtv27y.vercel.app/cards?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setCard(data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching card data:', error);
                    setLoading(false);
                });
        }
    }, [user]);

    if (loading) {
        return <div>Loading...</div>; // Optionally, you can replace this with a spinner or loading indicator
    }

    if (!user) {
        return <div>Please log in to view your cart.</div>;
    }

    return (
        <div>
            <table className="table-auto w-full text-black">
                <thead>
                    <tr className="grid grid-cols-2 md:grid-cols-5 gap-4 font-bold bg-gray-200 p-4">
                        <th className="text-center"></th>
                        <th className="text-center">Name</th>
                        <th className="text-center">Quantity</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {card.map((cards, index) => (
                        <CardDetails key={index} cards={cards} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Card;
