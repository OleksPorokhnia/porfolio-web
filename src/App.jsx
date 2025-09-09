import { useState } from 'react'
import Card from './elements/Card'
import './index.css'


function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
      <div className="flex gap-8 mr-4">
        <div className='row-span-2 flex gap-6'>
          <div style={{width: 256, height:480}}>
            <Card color='bg-gradient-to-b from-blue-400 from-10% via-indigo-500 via-40% to-purple-500 animate-gradient ' title="About" frontIcon="👤">
              <h3 className="text-lg font-bold mb-2 text-yellow-300">Oleksandr Porokhnia</h3>
              <p className='mb-1 text-white/90'>Student of Technical University of Varna</p>
              <p className='mb-2 text-white/90'>4-th course SIT(English)</p>
              <p className='mb-2 text-white/90'>Java Software Developer + React</p>
              <p className="mt-2 text-white/90">Fluent in: </p>
              <p className='text-white/90'>English, Russion, Ukrainian</p>

              <a href='/aboutme' className='absolute bottom-4 left-4 text-gray-200 hover:text-yellow-300'>More ⏷</a>
            </Card>
          </div>
          <div style={{width: 256, height:480}}>
            <Card color='bg-gradient-to-b from-blue-400 from-10% via-indigo-500 via-40% to-purple-500 animate-gradient ' title="Skills" frontIcon="⚡">
              <p className='font-bold'>Backend</p>
              <ul className="list-disc list-inside">
                <li>☕Java, 🌱Spring, Quarkus, 📨Kafka</li>
                <li>🐘  PostgreSQL, 🗃️Hibernate, Panache, JDBC</li>
                <li>⚙️Docker</li>
                <li>GitHub, GitLab</li>
                <li>JIRA</li>
              </ul>
              <p className='mt-3 font-bold'>Frontend</p>
              <ul className="list-disc list-inside">
                <li>JS, React</li>
                <li>Bootstrap, Tailwind</li>
              </ul>
            </Card>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div style={{width: 256, height:220}}>
            <Card color='bg-gradient-to-b from-blue-400 from-10% via-indigo-500 via-40% to-purple-500' title="Projects" frontIcon="📂">
              <ul className="list-disc list-inside">
                <li>
                  <a
                    href="https://github.com/AlexPorokhnya/task-manager-project"
                    className="underline"
                  >
                    Task Manager
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/AlexPorokhnya/olek-alek-ticket-app"
                    className="underline"
                  >
                    Ticket Service
                  </a>
                </li>
              </ul>
            </Card>
          </div>
          <div style={{width: 256, height:237}}>
            <Card color='bg-gradient-to-b from-blue-400 from-10% via-indigo-500 via-40% to-purple-500' title="Contact" frontIcon="📞">
              <p>Email: <a href="mailto:sashaporohnya76@gmail.com" className="underline">sashaporohnya76@gmail.com</a></p>
              <p>
                <a href="https://github.com/AlexPorokhnya" className="underline">GitHub</a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/oleksandr-porokhnia" className="underline">
                  LinkedIn
                </a>
              </p>
            </Card>
          </div>
        </div>
    </div>
    </div>
  );
}

export default App
