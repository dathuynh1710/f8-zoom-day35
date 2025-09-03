import React, { useState } from "react";
import styles from "./Todo.module.scss";

let uniqId = 0;

function Todo() {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    const taskCompleted = () => {
        return todos.filter((todo) => todo.completed).length;
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setTodos([...todos, { id: ++uniqId, text: inputValue, completed: false }]);
            setInputValue("");
        }
    };

    return (
        <div className={styles.todo}>
            <h1 className="title">Todo List App</h1>

            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Nhập task mới..."
                />
                <button className={styles["btn-add"]} type="submit">
                    Thêm
                </button>
            </form>

            {todos.length === 0 && <p className={styles.notification}>Chưa có task nào. Hãy thêm task đầu tiên!</p>}

            <ul className={`list ${styles["list-todo"]}`}>
                {todos.map((todo) => (
                    <li className={`item ${styles["item-todo"]}`} key={todo.id}>
                        <div className={styles.content}>
                            <input
                                className={styles.complete}
                                type="checkbox"
                                onChange={() =>
                                    setTodos(
                                        todos.map((t) => (t.id === todo.id ? { ...t, completed: !t.completed } : t))
                                    )
                                }
                            />
                            <p
                                style={{
                                    textDecoration: todo.completed ? "line-through" : "none",
                                }}
                            >
                                {todo.text}
                            </p>
                        </div>

                        <div className="actions">
                            <button
                                className={`btn ${styles.delete}`}
                                onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            <footer className={styles["todo-footer"]}>
                Tổng: {todos.length} task(s), Hoàn thành: {taskCompleted()} task(s), Còn lại:{" "}
                {todos.length - taskCompleted()} task(s)
            </footer>
        </div>
    );
}

export default Todo;
