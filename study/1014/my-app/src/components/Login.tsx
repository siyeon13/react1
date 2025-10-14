export default function Login() {
    return (
        <div className="w-[400px] h-[250px] border-2 border-black border-solid flex flex-col items-center rounded-md" >
            <p className="font-bold text-xl text-center m-5">로그인</p>
            <input type="input" placeholder=" 이메일" 
            className="border-2 border-black w-[340px] h-[40px] rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-600"></input>
            <input type="input" placeholder=" 비밀번호" 
            className="border-2 border-black w-[340px] h-[40px] rounded focus:outline-none"></input>

            <button className="w-[340px] h-[40px] mt-4 bg-blue-500 text-white rounded-lg hover:bg-pink-600 transition-colors duration-300">
                로그인
                </button>
                
        </div>
    )
}