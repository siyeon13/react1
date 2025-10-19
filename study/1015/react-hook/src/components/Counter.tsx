// import 구문
import { useState } from "react"


export default function Counter() {
    // useState 훅 사용.  변수 숫자일때 0(기본값) 입력 필수!
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row items-center">
            <button className="w-10 h-10 bg-red-500" onClick={() => setCount(count + 1)}>+</button>
            <button className="w-10 h-10 bg-blue-500" onClick={() => setCount(count - 1)}>-</button>
            </div>
            <p className="w-10 h-10 bg-black text-white text-center" >{count}</p>
        </div>

    )
}