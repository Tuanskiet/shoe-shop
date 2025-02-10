import React from 'react';
import FilterBar from './FilterBar';

const ProductList = () => {
    const products = [
        {
            id: 1,
            name: "Sandal Bé Gái Biti's BRG001000TRG",
            price: 200000,
            image: '/static/images/product.jpg',
        },
        {
            id: 2,
            name: "Giày Thể Thao Bé Gái Biti's Frozen BSG005997XDG",
            price: 200000,
            image: '/static/images/product.jpg',
        },
        {
            id: 3,
            name: "Giày Thể Thao Bé Gái Biti's HSG000501TIL",
            price: 200000,
            image: '/static/images/product.jpg',
        },
        {
            id: 4,
            name: "Giày Thể Thao Bé Gái Biti's BSG004200CAM",
            price: 200000,
            image: '/static/images/product.jpg',
        },
        {
            id: 5,
            name: "Giày Thể Thao Trẻ Em Biti's BSB005000DOO",
            price: 200000,
            image: '/static/images/product.jpg',
        },
        {
            id: 6,
            name: "Giày Tập Đi Trẻ Em Biti's BSG006200HOG",
            price: 200000,
            image: '/static/images/product.jpg',
        },
        {
            id: 7,
            name: "Giày Thể Thao Bé Gái Biti's BSG004200CAM",
            price: 200000,
            image: '/static/images/product.jpg',
        },
        {
            id: 8,
            name: "Giày Thể Thao Trẻ Em Biti's BSB005000DOO",
            price: 200000,
            image: '/static/images/product.jpg',
        },
    ];

    return (
        <div className="container mx-auto p-4 mt-[20px]">
            <h2 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h2>
            <FilterBar />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 hover:scale-105 cursor-pointer"
                    >
                        <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="text-gray-500">{product.price}</p>
                            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                                Mua ngay
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-5">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                    Xem thêm
                </button>
            </div>
        </div>
    );
};

export default ProductList;
