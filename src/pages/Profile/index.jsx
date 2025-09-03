import React, { useState, useEffect } from "react";
import styles from "./Profile.module.scss";

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then((res) => res.json())
            .then((data) => setUser(data))
            .catch((err) => console.error("Lỗi khi gọi API:", err));
    }, []);

    if (!user) {
        return <div className={styles.loading}>Đang tải…</div>;
    }

    return (
        <div className={styles.card}>
            <div>
                <img
                    src="https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png"
                    alt="Avatar"
                    className={styles.avatar}
                />
            </div>
            <div className={styles.info}>
                <h2 className={styles.title}>{user.name}</h2>
                <p>
                    <strong>Username:</strong> {user.username}
                </p>
                <p>
                    <strong>Email:</strong> {user.email}
                </p>
                <p>
                    <strong>Phone:</strong> {user.phone}
                </p>
                <p>
                    <strong>Website:</strong> {user.website}
                </p>
                <p>
                    <strong>Address:</strong> {user.address.street}, {user.address.city}
                </p>
            </div>
        </div>
    );
}

export default Profile;
