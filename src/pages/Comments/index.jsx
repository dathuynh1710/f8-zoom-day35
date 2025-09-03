import React, { useEffect, useState } from "react";
import styles from "./Comments.module.scss";

function Comments() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [form, setForm] = useState({ name: "", email: "", body: "" });

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
            .then((res) => res.json())
            .then((data) => {
                // Fake thêm field "time"
                const updated = data.map((c, i) => ({
                    ...c,
                    time: i % 2 === 0 ? "2 giờ trước" : "1 ngày trước",
                }));
                setComments(updated);
                setLoading(false);
            });
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name.trim() || !form.email.trim() || !form.body.trim()) return;

        const newComment = {
            id: Date.now(),
            name: form.name,
            email: form.email,
            body: form.body,
            time: "Vừa xong",
        };

        setComments([newComment, ...comments]);
        setForm({ name: "", email: "", body: "" });
    };

    if (loading) return <p className={styles.loading}>Đang tải...</p>;

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Bình luận</h2>

            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Tên" value={form.name} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
                <textarea
                    name="body"
                    placeholder="Nội dung bình luận..."
                    value={form.body}
                    onChange={handleChange}
                ></textarea>
                <button type="submit">Thêm bình luận</button>
            </form>

            <ul className={styles.list}>
                {comments.map((c) => (
                    <li key={c.id} className={styles.item}>
                        <img
                            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(c.name)}&background=random`}
                            alt={c.name}
                            className={styles.avatar}
                        />
                        <div className={styles.content}>
                            <div className={styles.header}>
                                <span className={styles.name}>{c.name}</span>
                                <span className={styles.email}>({c.email})</span>
                                <span className={styles.time}>{c.time}</span>
                            </div>
                            <p className={styles.body}>{c.body}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Comments;
