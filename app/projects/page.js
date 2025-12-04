import Link from 'next/link'
import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio built with Next.js and Tailwind CSS to showcase my projects and skills.',
      image: 'https://placehold.co/600x400/3b82f6/ffffff?text=Portfolio+Website',
      tags: ['Next.js', 'Tailwind CSS', 'JavaScript']
    },
    {
      title: 'Todo App',
      description: 'A simple yet functional task management application with add, delete, and mark complete features.',
      image: 'https://placehold.co/600x400/10b981/ffffff?text=Todo+App',
      tags: ['React', 'HTML', 'CSS']
    },
    {
      title: 'Weather App',
      description: 'A responsive weather application that fetches real-time weather data and displays forecasts.',
      image: 'https://placehold.co/600x400/a855f7/ffffff?text=Weather+App',
      tags: ['JavaScript', 'API', 'HTML/CSS']
    },
    {
      title: 'E-commerce Store',
      description: 'A full-featured e-commerce platform with product catalog, shopping cart, and checkout functionality.',
      image: 'https://placehold.co/600x400/6b7280/ffffff?text=Coming+Soon',
      tags: ['Next.js', 'Database', 'Backend'],
      comingSoon: true
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-blue-600">
          My Projects
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          A collection of my recent work and projects
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div key={project.title} className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow ${project.comingSoon ? 'opacity-75' : ''}`}>
              <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                {project.comingSoon && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Coming Soon</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-sm bg-blue-100 text-blue-900 px-3 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-blue-500">
          <h3 className="font-bold text-gray-900 mb-3 text-lg">💡 Tips for Customizing:</h3>
          <ul className="text-gray-700 space-y-2">
            <li>✏️ Replace with your actual projects or ideas</li>
            <li>✏️ Add real images or screenshots (save to public/ folder)</li>
            <li>✏️ Update descriptions to match your projects</li>
            <li>✏️ Add links to GitHub repos or live demos</li>
            <li>✏️ Mark projects as "Coming Soon" when working on them</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
