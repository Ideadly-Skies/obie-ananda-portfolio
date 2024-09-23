import React from 'react'
import Gremlins from '../../assets/gremlins.png'

const projects = [
    {
        id: 1,
        name: "Gremlins",
        technologies: "Java & Gradle",
        image: Gremlins,
        github: "https://github.com/Ideadly-Skies/gremlins"
    },

    {
        id: 2,
        name: "Invader",
        technologies: "Java & Gradle",
        image: "https://upload.wikimedia.org/wikipedia/en/0/0f/Space_Invaders_flyer%2C_1978.jpg",
        github: "https://github.com/Ideadly-Skies/Invaders"
    }
]

function Projects() {
  return (
    <div className='bg-black text-white py-20' id='projects'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map(project =>
                    <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg">
                        <img src={project.image} alt="" className="rounded-lg mb-4 w-full h-48 object-cover"/>
                        <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                        <p className="text-gray-400 mb-4">{project.technologies}</p>
                        <a href={project.github} className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" rel="reopener noreferrer">Github</a>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Projects