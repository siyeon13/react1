export default function ProfileCard() {
    return (
        <div className="w-[350px] h-[350px] border-2 border-black border-solid rounded-lg flex flex-col items-center" >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsUzGpEvLZoNk3OLHrTxWAx2drrGxJPqzVcw&s"
            className="w-[200px] h-[200px] rounded-full border-4 border-blue-400 object-cover"></img>
            <h1 className="text-2xl font-bold text-center mt-6">홍길동</h1>
            <p className="m-2 text-gray-500">Frontend Developer</p>
            <p>React와 Tailwind를 배우는 중입니다.</p>
        </div>
    )
    
}