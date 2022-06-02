
export default function BookCard({Title, Author, Page, User, Users, onClick}) {
    return(
        <div className="w-1/4 flex flex-row hover:shadow-md hover:scale-105 transition-all duration-500 hover:cursor-pointer" onClick={onClick}>
            <div className="h-48 w-32 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-sm shadow-md">
                
            </div>
            <div className="grow p-2 pl-6 flex flex-col space-y-2">
                <div className="text-xl text-gray-700'">
                    {Title}
                </div>
                <div className='text-gray-600'>
                    {Author}
                </div>
                <button className="bg-blue-200 rounded-sm text-gray-900">Continue from pg {Page}</button>
            </div>
        </div>
    )
}