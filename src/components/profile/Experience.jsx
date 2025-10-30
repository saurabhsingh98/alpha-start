import { useSelector } from 'react-redux'

const Experience = () => {
    const experience = useSelector((state) => state?.userProfile?.user?.experience) || []

    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800">Experience</h2>
            </div>
            {experience.length === 0 ? (
                <div className="text-gray-500 text-center py-8">No experience added yet.</div>
            ) : (
                <div className="space-y-4">
                    {experience.map((exp, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow px-6 py-5 border border-gray-200"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-900">
                                        {exp?.title || "Title"}
                                    </h3>
                                    <p className="text-md text-gray-700 mt-1">
                                        {exp?.company || "Company"}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {exp?.employment_type && <>Employment type: {exp?.employment_type}</>}
                                    </p>
                                </div>
                                <div className="text-sm text-gray-400 mt-3 md:mt-0 md:text-right">
                                    {exp?.startDate && exp?.endDate
                                        ? (
                                            <>
                                                {exp?.startDate?.slice(0, 7).replace('-', '/')}
                                                {" - "}
                                                {exp?.endDate?.slice(0, 7).replace('-', '/')}
                                            </>
                                        )
                                        : null
                                    }
                                </div>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-4">
                                {exp?.location && (
                                    <span className="bg-yellow-50 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                                        Location: {exp?.location}
                                    </span>
                                )}
                                {exp?.industry && (
                                    <span className="bg-indigo-50 text-indigo-800 text-xs px-2 py-1 rounded-full font-medium">
                                        Industry: {exp?.industry}
                                    </span>
                                )}
                            </div>
                            {exp?.description && (
                                <p className="mt-2 text-gray-600 text-sm">{exp?.description}</p>
                            )}
                            {exp?.skills && Array.isArray(exp.skills) && (
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {exp?.skills?.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                                        >
                                            {skill.trim()}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Experience