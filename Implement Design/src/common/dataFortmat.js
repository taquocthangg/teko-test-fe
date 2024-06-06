const formatPrice = (price) => {
    const formattedPrice = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(price).replace('₫', '').trim();

    return formattedPrice;
};

export {
    formatPrice
}
