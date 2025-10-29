import React from 'react'

const Loader = () => {
    return (
        <div className="p-8 min-h-screen flex items-center justify-center">
            <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                <span className="ml-2 text-gray-600">Loading...</span>
            </div>
        </div>
    )
}

export default Loader