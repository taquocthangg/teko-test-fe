import React from 'react'
import Related_Products from '../componnents/Related_Products'
import '../css/product_detail.css'
import { products } from '../data'
import { formatPrice } from '../common/dataFortmat';
export default function Product_Detail() {
    console.log(products[0].image);
    return (
        <div>
            <div className="container">
                <div className="box">
                    <div className="box_img">
                        <img src={products[0]?.image} alt="" />
                    </div>
                    <div className="box_pirce">
                        {products[0]?.price ? formatPrice(products[0]?.price) : 'Đang cập nhập'}đ
                    </div>
                    <div className="box_discount">
                        <span>
                            {products[0]?.price ? formatPrice(products[0]?.price) : 'Đang cập nhập'}
                        </span>
                        <span>
                            -{products[0]?.discountPercent ? products[0]?.discountPercent : 'Đang cập nhập'}%
                        </span>
                    </div>
                    <div className="box_name">
                        {products[0]?.name ? products[0]?.name : 'Đang cập nhập'}
                    </div>
                    <div className="box_seller">
                        By 
                        <span>
                            {products[0]?.seller ? products[0]?.seller : 'Đang cập nhập'}
                        </span>
                    </div>

                </div>
                <Related_Products related_products={products[0]?.relatedProducts}/>
            </div>

        </div>
    )
}