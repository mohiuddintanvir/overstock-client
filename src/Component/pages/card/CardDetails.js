import React from 'react';

const CardDetails = ({ cards }) => {
  const { name, img, price } = cards;

  return (
    <tr className="grid grid-cols-2 md:grid-cols-5 gap-4 font-normal bg-white p-4">
      <td className="flex justify-center items-center"><img src={img} className="w-20 h-20" alt={name} /></td>
      <td className="text-center hover:text-[#1ad458] flex justify-center items-center">{name}</td>
      <td className="text-center hover:text-[#1ad458] flex justify-center items-center">1</td> {/* Assuming quantity is 1 for now */}
      <td className="text-center hover:text-[#1ad458] flex justify-center items-center">{price}</td>
      <td className="flex justify-center items-center">
        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-200">
          Proceed to Payment
        </button>
      </td>
    </tr>
  );
};

export default CardDetails;
