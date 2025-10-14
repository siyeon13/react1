export default function ButtonGroup() {
    return (
        <div className="mb-7">
            <button className="mt-7 mr-4 px-4 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    홈
                </button>
            <button className="mt-7 mr-4 px-5 py-2.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                    소개
                </button>
            <button className="mt-7 px-5 py-2.5 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                    연락
                </button>
        </div>
    )
}