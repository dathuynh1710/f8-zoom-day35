import { useState } from "react";
import styles from "./Counter.module.scss";

import Button from "../Button";

function Counter() {
    const [count, setCount] = useState(0);

    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div className={styles.counter}>
            <h1>Counter App</h1>

            <div
                style={{
                    color: count > 0 ? "green" : count < 0 ? "red" : "gray",
                }}
                className={styles.count}
            >
                Count: {count}
            </div>

            <div className={styles.text}>{count > 0 ? "Dương" : count < 0 ? "Âm" : "Bằng không"}</div>

            <div className={styles.actions}>
                <button className={`${styles.btn} ${styles.decrement}`} onClick={decrease}>
                    Giảm (-1)
                </button>
                <button className={`${styles.btn} ${styles.reset}`} onClick={reset}>
                    Reset (0)
                </button>
                <button className={`${styles.btn} ${styles.increment}`} onClick={increase}>
                    Tăng (+1)
                </button>
            </div>
        </div>
    );
}

export default Counter;
