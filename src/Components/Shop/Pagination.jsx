import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Pagination = ({totalPages, currentPage, handlePageChange}) => {
    return (
        <div className=' font-bold flex justify-center gap-3 py-8'>
            {/* Previous button */}
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-2 rounded flex items-center ${
                currentPage === 1
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
            >
                <FaAngleLeft />
            </button>

            {/* Numbers  */}
            {Array.from({length: totalPages}, (_,i) => (
                <button key={i} 
                    onClick={()=> handlePageChange (i + 1)}
                    className={`mx-1 px-3 py-2 rounded  ${currentPage === i + 1 ? 
                        "bg-secondary text-white" : "bg-gray-200"}`}>
                    {i + 1}

                </button>
            ))}

            {/* Next button */}
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-2 rounded flex items-center ${
                currentPage === totalPages
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
            >
                <FaAngleRight />
            </button>
        </div>
    );
};

export default Pagination;