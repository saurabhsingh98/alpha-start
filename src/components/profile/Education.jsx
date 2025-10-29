import { useState, useEffect } from 'react'
import { TextInput } from '../common/TextInput.jsx'
import { Button } from '../common/Button.jsx'
import Modal from '../common/Modal.jsx'
import { useSelector } from 'react-redux'


const Education = () => {
    const [education, setEducation] = useState([
        {
            degree: "Bachelor of Science",
            school: "University of California, Los Angeles",
            field_of_study: "Computer Science",
            start_date: "2020-01-01",
            end_date: "2024-01-01",
            grade: "3.8",
            activities_and_societies: "Club member",
            description: "Graduated with honors",
            skills: "JavaScript, React, Node.js"
        },
        {
            degree: "Bachelor of Science",
            school: "University of California, Los Angeles",
            field_of_study: "Computer Science",
            start_date: "2020-01-01",
            end_date: "2024-01-01",
            grade: "3.8",
            activities_and_societies: "Club member",
            description: "Graduated with honors",
            skills: "JavaScript, React, Node.js"
        }
    ])

    // const userProfile = useSelector((state) => state?.userProfile?.user) || {}
    // useEffect(() => {
    //     setEducation(userProfile?.education || [])
    // }, [userProfile])
    console.log("----------education------", education)


    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800">Education</h2>
                {/* You might want to handle Add Education modal trigger from parent and pass prop. Here is just design. */}
                {/* <Button onClick={()=>setIsAddEducationOpen(true)}>Add Education</Button> */}
            </div>
            {education.length === 0 ? (
                <div className="text-gray-500 text-center py-8">No education added yet.</div>
            ) : (
                <div className="space-y-4">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow px-6 py-5 border border-gray-200"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-900">
                                        {edu.degree || "Degree"}
                                    </h3>
                                    <p className="text-md text-gray-700 mt-1">
                                        {edu.school || "School"}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {edu.field_of_study && <>Field of study: {edu.field_of_study}</>}
                                    </p>
                                </div>
                                <div className="text-sm text-gray-400 mt-3 md:mt-0 md:text-right">
                                    {edu.start_date && edu.end_date
                                        ? (
                                            <>
                                                {edu.start_date.slice(0, 7).replace('-', '/')}
                                                {" - "}
                                                {edu.end_date.slice(0, 7).replace('-', '/')}
                                            </>
                                        )
                                        : null
                                    }
                                </div>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-4">
                                {edu.grade && (
                                    <span className="bg-blue-50 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                                        Grade: {edu.grade}
                                    </span>
                                )}
                                {edu.activities_and_societies && (
                                    <span className="bg-green-50 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                                        Activities & Societies: {edu.activities_and_societies}
                                    </span>
                                )}
                            </div>
                            {edu.description && (
                                <p className="mt-2 text-gray-600 text-sm">{edu.description}</p>
                            )}
                            {edu.skills && (
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {edu.skills.split(",").map((skill, idx) => (
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

export default Education