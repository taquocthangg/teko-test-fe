import React from 'react'
import { formatPrice } from '../common/dataFortmat'
export default function Related_Products({ related_products }) {
    return (
        <div>
            <h4 className='related_product_label'>
                Sản phẩm liên quan
            </h4>
            <div className="list_products custom-scroll">
                {related_products?.map((product) => (
                    <div className="related_product" key={product.id}>
                        <div className="related_product_img" >
                            <img src={product?.image} alt="" />
                        </div>
                        <div className="related_product_content">
                            <div className="related_product_name truncated-text" >
                                {product?.name ? product?.name : 'Đang cập nhập'}
                            </div>
                            <div className="related_product_quantity" >
                                Còn {product?.availableQuantity} sản phẩm
                            </div>
                            <div className="related_product_price" >
                                {product?.price ? formatPrice(product?.price) : 'Đang cập nhập'}đ
                            </div>
                            <div className="">
                                {product.discountPercent ? (
                                    <div className="box_discount">
                                        <span>
                                            {product?.price ? formatPrice(product?.price) : 'Đang cập nhập'}đ
                                        </span>
                                        <span>
                                            -{product?.discountPercent}%
                                        </span>
                                    </div>
                                ) : ''}
                            </div>
                        </div>
                        <div className="btn_addProduct">
                            Thêm vào giỏ
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}