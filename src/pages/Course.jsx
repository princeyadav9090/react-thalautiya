import { data } from 'autoprefixer';
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Course = () => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const token = localStorage.getItem('token');
    // const [courses] = useState([
    //     {
    //         id: 1,
    //         title: 'Web Development Fundamentals',
    //         description: 'Learn HTML, CSS, and JavaScript basics',
    //         duration: '8 weeks',
    //         price: '$199',
    //         image: 'https://example.com/web-dev.jpg'
    //     },
    //     {
    //         id: 2,
    //         title: 'React.js Advanced',
    //         description: 'Master React.js and its ecosystem',
    //         duration: '10 weeks',
    //         price: '$299',
    //         image: 'https://example.com/react.jpg'
    //     },
    //     // Add more courses as needed
    // ]);
    useEffect(() => {
        fetch('http://localhost:2500/course/getall', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(response => {
            if (Array.isArray(response.data)) {
                setCourses(response.data);
            } else {
                console.error('Unexpected data format:', response);
                setCourses([]);
            }
        })
        .catch(err => {
            console.error('Error fetching courses:', err);
            setCourses([]);
        });
    }, []);
    
   

   
    const handleCourseClick = (courseId) => {
        
        navigate(`/course/get/${courseId}`);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Our Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        className="border rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                        onClick={() => handleCourseClick(course._id)}
                    >
                        <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                            <p className="text-gray-600 mb-2">{course.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-500">Duration: {course.duration}</span>
                                <span className="text-blue-600 font-bold">{course.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Course;