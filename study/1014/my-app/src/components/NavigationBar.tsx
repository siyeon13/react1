export default function NavigationBar () {
    return(
        <div className="h-[50px] w-screen bg-gray-700 flex justify-between mt-4 mb-4">
            <span className="text-white ">My Site</span>
            <div className=" text-white ">
                <span className="mr-4 hover:text-gray-300">Home</span>
                <span className="mr-4 hover:text-gray-300">About</span>
                <span className="mr-4 hover:text-gray-300">Contact</span>
            </div>
            
        </div>
    )
}