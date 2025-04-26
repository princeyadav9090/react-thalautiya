import React, { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';

const CourseInside = () => {
    const { id } = useParams(); // Get the course ID from the URL
    const [course, setCourse] = useState(null);
    const token = localStorage.getItem('token');

    useEffect(() => {
        fetch(`http://localhost:2500/course/get/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(response => {
            if (response.data) {
                setCourse(response.data);
            } else {
                console.error('Unexpected data format:', response);
            }
        })
        .catch(err => {
            console.error('Error fetching course:', err);
        });
    }, [id]);

    if (!course) {
        return <div>Loading...</div>;
    }

    return (
        <div className="course-inside-container">
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <iframe
                width="100%"
                height="400"
                src={course.youtubeLink}
                title="Course Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <Link to={course.notesURL}>Notes</Link>
            <ul>
                {course.tasks.map((task, index) => (
                    <li key={index}><h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <p>Deadline: {task.deadline}</p></li>
                ))}
            </ul>
        </div>
    );
};

export default CourseInside;