export default function CardGrid() {
    return (
        <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            <div className="p-4 h-[130px] border-2 border-black rounded text-center">
                <p className="text-4xl">📅</p>
                <p className="font-bold text-xl mt-2">캘린더</p>
                <p className="text-sm text-gray-500">일정을 기록해요.</p>
            </div>
            <div className="p-4  h-[130px] border-2 border-black rounded text-center">
                <p className="text-4xl">⚽️</p>
                <p className="font-bold text-xl mt-2">운동</p>
                <p className="text-sm text-gray-500">운동기록을 기록해요.</p>
            </div>
            <div className="p-4  h-[130px] border-2 border-black rounded text-center">
                <p className="text-4xl">🏖️</p>
                <p className="font-bold text-xl mt-2">여행</p>
                <p className="text-sm text-gray-500">여행일정을 등록해요.</p>
            </div>
        </div>
    )
}