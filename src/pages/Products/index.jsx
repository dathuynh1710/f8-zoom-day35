import React, { useState, useEffect } from "react";
import styles from "./Products.module.scss";

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Lỗi khi gọi API:", err);
                setLoading(false);
            });
    }, []);

    const truncate = (text, maxLength = 100) => {
        return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    };

    if (loading) {
        return <div className={styles.loading}>Đang tải…</div>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Product List</h1>
            <div className={styles.grid}>
                {products.map((product) => (
                    <div className={styles.card} key={product.id}>
                        <h3 className={styles.title}>
                            {product.id}. {product.title.charAt(0).toUpperCase() + product.title.slice(1)}
                        </h3>
                        <p className={styles.body}>{truncate(product.body)}</p>
                        <button className={styles.btn} onClick={() => setSelectedProduct(product)}>
                            Xem chi tiết
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal hiển thị chi tiết */}
            {selectedProduct && (
                <div className={styles.modalOverlay} onClick={() => setSelectedProduct(null)}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <h2>
                            {selectedProduct.id}.{" "}
                            {selectedProduct.title.charAt(0).toUpperCase() + selectedProduct.title.slice(1)}
                        </h2>
                        <p>{selectedProduct.body}</p>
                        <button className={styles.closeBtn} onClick={() => setSelectedProduct(null)}>
                            Đóng
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Products;
