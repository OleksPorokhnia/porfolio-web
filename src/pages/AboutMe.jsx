import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import { Rocket, Linkedin, Facebook, GraduationCap, Wrench, Lightbulb, Hammer, Pin, Download, Code, Database, Users, Zap, Layers, Server, Bug, CalendarCheck, BrushCleaning, Coffee, Brain, GitFork, Bike, ChefHat, TreePine, Nfc, Handshake, Flame, Award, CheckCircle2, Telescope, Mail } from "lucide-react";
import "./styles/aboutMe.css"

const skills = [
  { name: "Java Mastery", value: 89, icon: Code },
  { name: "React Wizardry", value: 80, icon: Zap },
  { name: "Database Knowledge", value: 78, icon: Database },
  { name: "Team Communication", value: 70, icon: Users },
  { name: "Adaptability", value: 80, icon: Layers },
];

const fullSkills = [
  { name: "Java Mastery", value: 89, icon: Code },
  { name: "React Wizardry", value: 80, icon: Zap },
  { name: "API Dexterity", value: 72, icon: Server },
  { name: "Database Knowledge", value: 78, icon: Database },
  { name: "Team Communication", value: 70, icon: Users },
  { name: "Adaptability", value: 80, icon: Layers },
  { name: "Debugging Sense", value: 76, icon: Bug },
  { name: "Problem Solving", value: 73, icon: CalendarCheck },
  { name: "Code Elegance", value: 93, icon: BrushCleaning },
];

const bonuses = [
    { name: "Coffe Consumption", description: "+10 to energy", icon: Coffee },
    { name: "ChatGPT Karma", description: "'wisdom' of a programmer", icon: Brain },
    { name: "Git Mastery", description: "Managing branches and commits", icon: GitFork },
    { name: "Debugging speed", description: "Speed of finding and fixing bugs", icon: Bug },
    { name: "Speed Runner", description: "Courier experience: +10 to task completion speed and time management", icon: Bike },
    { name: "Multitask Chef", description: "Working in the kitchen: +10 to stress resistance and multitasking", icon: ChefHat },
    { name: "Survival Instinct", description: "Experience of working in “combat conditions” (the hustle and bustle of the kitchen/street): +5 to reaction and adaptability", icon: TreePine },
    { name: "Customer Whisperer", description: "Courier practice of communicating with people: +5 to communication", icon: Nfc },
    { name: "Precision Hand", description: "Cutting, assembly, delivery without errors: +5 to attention to detail", icon: Handshake },
]

export default function AboutMe() {

  const modalSkills = useRef(null);

  const [open, setOpen] = useState(true);


  return (
    <div>
        <section className="bg-gradient-to-r from-pink-200 via-purple-300 to-blue-300 py-14">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-20 px-6">
          <div className="flex-shrink-0">
            <img
              src="/photo.PNG"
              alt="avatar"
              className="w-80 h-80 object-cover rounded-full shadow-2xl ring-4 ring-purple-400"
            />
          </div>
          <div className="flex-1 space-y-6">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                className="bg-white/60 backdrop-blur-lg shadow-lg rounded-2xl p-5 flex items-center gap-4 border border-purple-200"
              >
                <skill.icon className="text-purple-600 w-6 h-6 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex justify-between mb-1 text-sm font-semibold text-gray-800">
                    <span>{skill.name}</span>
                    <span>{skill.value}/100</span>
                  </div>
                  <div className="w-full bg-purple-100 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.value}%` }}
                      transition={{ duration: 1 }}
                      className="h-3 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-full shadow-sm"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
            <div className="flex h-full fade-in">
            <div>
                <div className="flex-1 mr-10 pt-10 space-y-10 text-gray-800 " id="about">
                     <section className="space-y-4">
                        <p className="text-3xl font-bold flex items-center text-purple-700 underline">
                        <Flame className="text-pink-500 mr-3 w-7 h-7" />
                        Small Intro
                        </p>
                        <div className="text-lg leading-relaxed">
                        <p className="mb-3">I am a third-year student at the Technical University of Varna, specializing in <span className="bg-purple-700/60 rounded p-0.5 text-white">Software and Internet 
                        Technologies (SIT)</span>. My academic background 
                        has provided me with strong foundations in object-oriented programming,
                        data structures, databases, and modern frameworks such as <span className="bg-purple-700/60 rounded p-0.5 text-white">Spring Boot, Quarkus, Hibernate, and React.</span></p>

                        <p className="mb-3">Beyond my studies, I enjoy working on personal projects where I experiment with new technologies, from <span className="bg-purple-700/60 rounded p-0.5 text-white">
                        backend APIs</span> to interactive <span className="bg-purple-700/60 rounded p-0.5 text-white">web applications</span>. 
                        This hands-on practice has not only strengthened my technical 
                        skills but also improved my ability to learn quickly and adapt to new tools.</p>

                        <p className="mb-3">
                            I am passionate about <span className="bg-purple-700/60 rounded p-0.5 text-white">writing clean, maintainable code and solving problems through technology.</span> My goal is to contribute 
                            to meaningful projects in a professional setting, 
                            gain real-world experience, and grow as a software engineer 
                            while bringing dedication and fresh ideas to the team.
                        </p>

                        <p>
                            Currently, I am actively looking for an <span className="font-medium text-purple-700">Internship/Junior
                            opportunity</span> where I can apply my skills, learn from
                            experienced engineers, and deliver value as part of a development team.
                        </p>
                        </div>
                    </section>
                     <section className="space-y-4 pb-10 ">
                        <h3 className="text-2xl font-semibold flex items-center text-purple-700 underline">
                        <Telescope className="text-blue-500 mr-3 w-6 h-6" />
                        Why Me?
                        </h3>
                        <div className="text-lg leading-relaxed bg-purple-500/10 rounded-lg p-4">
                            <p className="mb-3">I am highly motivated, eager to learn, and ready to work in a team.
                            I have a strong problem-solving mindset, and my B2 English level allows 
                            me to communicate effectively with international teams. My dedication to high-quality 
                            work is reflected in my academic achievements and positive feedback from professors.</p>

                            <p className="mb-3">I am a fast learner, always curious about new technologies,
                            and able to quickly adapt to different development environments. Through university
                            projects and personal practice, I have gained experience applying theoretical knowledge
                            to real coding challenges.</p>

                            <p className="mb-3">I am looking for an opportunity where I can contribute to a team,
                            improve my technical and soft skills, and grow into a well-rounded 
                            software engineer while delivering value to the company.</p>
                        </div>
                    </section>

                    <section className="mt-6 p-6 bg-gradient-to-r from-pink-300 via-purple-400 to-blue-400 rounded-xl text-center mb-10 text-white shadow-lg">
                        <p className="text-xl font-semibold mb-4 flex items-center justify-center">
                        <Mail className="text-white mr-3 w-6 h-6" />
                        Open to Internship Opportunities!
                        </p>
                        <p className="mb-6 text-lg leading-relaxed">
                        Looking forward to connecting with professionals in the tech industry.
                        Feel free to message me if you have any internship opportunities or would like to collaborate!
                        </p>
                        <div className="flex justify-center gap-6 flex-wrap">
                        <a
                            href="/OleksandrPorokhniaCV.pdf"
                            download
                            className="bg-white text-purple-700 px-6 py-2 rounded-lg shadow-md hover:scale-105 hover:bg-purple-100 hover:text-purple-900 transition"
                        >
                            <Download className="w-5 h-5 mr-2 inline-block" />
                            Download CV
                        </a>
                        <a
                            href="https://github.com/OleksPorokhnia"
                            className="bg-white text-purple-700 px-6 py-2 rounded-lg shadow-md hover:scale-110 transition hover:bg-purple-100 hover:text-purple-900"
                        >
                            <GitFork className="w-5 h-5 mr-2 inline-block" />
                            GitHub
                        </a>
                        <a
                            href="mailto:sashaporohnya76@gmail.com"
                            className="bg-white text-purple-700 px-6 py-2 rounded-lg shadow-md hover:scale-105 transition hover:bg-purple-100 hover:text-purple-900"
                        >
                            <Mail className="w-5 h-5 mr-2 inline-block" />
                            Gmail
                        </a>
                        </div>
                    </section>
                </div>
                <div id="projects">
                    <div className="flex justify-center">
                        <div className="w-150 h-1 bg-purple-400 rounded mb-4"></div>
                    </div>
                    <h1 className="text-6xl flex justify-center text-purple-600"> Projects</h1>
                    <div className=" mt-10">
                        <Card className="p-8 shadow-lg rounded-2xl bg-white/60 backdrop-blur-lg border border-purple-200">
                            <CardContent className="space-y-8">
                                <div className="flex items-center gap-3">
                                <Rocket className="w-8 h-8 text-purple-600" />
                                <h2 className="text-3xl font-bold text-purple-700">Task Manager</h2>
                                </div>

                                <p className="text-gray-800 leading-relaxed">
                                Task Manager Project is a task management web application system,
                                originally started as a university project and later evolved into 
                                a more complex system with real-time features, secure authorization, and 
                                advanced architectural decisions.
                                </p>

                                <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Wrench className="w-5 h-5 text-pink-500" />
                                    <h3 className="text-xl font-semibold text-purple-700">Key Technologies</h3>
                                </div>
                                <ul className="space-y-2 text-gray-800">
                                    <li>
                                    <Badge variant="outline" className="mr-2 border-purple-400 text-purple-700">Backend</Badge>
                                    Java 17, Spring Boot 3, Spring Security, WebSockets (STOMP/SockJS), Hibernate, PostgreSQL, Elasticsearch
                                    </li>
                                    <li>
                                    <Badge variant="outline" className="mr-2 border-purple-400 text-purple-700">Frontend</Badge>
                                    React 18 + Vite, Bootstrap 5
                                    </li>
                                    <li>
                                    <Badge variant="outline" className="mr-2 border-purple-400 text-purple-700">Integrations</Badge>
                                    JWT authentication, Elasticsearch-powered live search, WebSocket-based instant updates
                                    </li>
                                </ul>
                                </div>

                                <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Lightbulb className="w-5 h-5 text-blue-500" />
                                    <h3 className="text-xl font-semibold text-purple-700">Implemented Features</h3>
                                </div>
                                <ul className="list-disc pl-6 space-y-1 text-gray-800">
                                    <li>Real-time task updates via WebSockets</li>
                                    <li>Secure JWT-based user authentication</li>
                                    <li>Live full-text search with Elasticsearch</li>
                                    <li>Task and project creation, editing, and deletion</li>
                                    <li>Tasks rendered in markdown format</li>
                                    <li>Clean, responsive UI</li>
                                    <li>Dockerized setup for easy deployment</li>
                                </ul>
                                </div>

                                <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Pin className="w-5 h-5 text-pink-500" />
                                    <h3 className="text-xl font-semibold text-purple-700">Future Plans</h3>
                                </div>
                                <ul className="list-disc pl-6 space-y-1 text-gray-800">
                                    <li>Notification system (web/email)</li>
                                    <li>Email confirmation</li>
                                    <li>User profiles</li>
                                    <li>Task calendar</li>
                                    <li>NoSQL integration for large file storage</li>
                                </ul>
                                </div>

                                <div className="flex items-center gap-2 text-purple-700">
                                <GitFork className="w-5 h-5" />
                                <a
                                    href="https://github.com/OleksPorokhnia/task-manager-project"
                                    target="_blank"
                                    className="hover:text-pink-500 transition"
                                >
                                    View main service of project on GitHub
                                </a>
                                <span className="text-gray-400"> | </span>
                                <a
                                    href="https://github.com/OleksPorokhnia/notification-service-task-manager"
                                    target="_blank"
                                    className="hover:text-pink-500 transition"
                                >
                                    View notification service of project on GitHub
                                </a>
                                </div>
                            </CardContent>
                            </Card>

                         <Card className="p-8 shadow-lg rounded-2xl bg-white/60 backdrop-blur-lg border border-purple-200 mt-20">
                            <CardContent className="space-y-8">
                                <div className="flex items-center gap-3">
                                <Rocket className="w-8 h-8 text-purple-600" />
                                <h2 className="text-3xl font-bold text-purple-700">Ticket Manager</h2>
                                </div>

                                <p className="text-gray-800 leading-relaxed">
                                Developed a Java desktop application using OOP principles, design patterns, JavaFX, 
                                and Hibernate ORM. Designed and implemented a PostgreSQL database with best practices 
                                using Oracle SQL Modeler and Developer. Implemented DAO and service layers with generics,
                                Observer and Command patterns for notifications, and Singleton/DI for session management. 
                                Modernized the application structure inspired by Spring MVC to support basic CRUD operations. 
                                Collaborated in a team project with a classmate.
                                </p>

                                <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Wrench className="w-5 h-5 text-pink-500" />
                                    <h3 className="text-xl font-semibold text-purple-700">Key Technologies</h3>
                                </div>
                                <ul className="space-y-2 text-gray-800">
                                    <li>
                                    <Badge variant="outline" className="mr-2 border-purple-400 text-purple-700">Backend</Badge>
                                    Java 17, JavaFX, Hibernate, PostgreSQL
                                    </li>
                                    <li>
                                    <Badge variant="outline" className="mr-2 border-purple-400 text-purple-700">Frontend</Badge>
                                    JavaFX
                                    </li>
                                    <li>
                                    <Badge variant="outline" className="mr-2 border-purple-400 text-purple-700">Integrations</Badge>
                                    CRUD operations, In-application requests
                                    </li>
                                </ul>
                                </div>

                                <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Lightbulb className="w-5 h-5 text-blue-500" />
                                    <h3 className="text-xl font-semibold text-purple-700">Implemented Features</h3>
                                </div>
                                <ul className="list-disc pl-6 space-y-1 text-gray-800">
                                    <li>Company, Cashiers, Users, Distributors creation/registration</li>
                                    <li>Full ticket lifecycle from issuance by the company to purchase by the client</li>
                                    <li>Request system managing access flow: company → distributor → cashier → client</li>
                                    <li>Personal ticket list</li>
                                    <li>Management system for each role with clear UI</li>
                                    <li>MVC system implementation</li>
                                </ul>
                                </div>

                                <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Pin className="w-5 h-5 text-pink-500" />
                                    <h3 className="text-xl font-semibold text-purple-700">Future Plans</h3>
                                </div>
                                <ul className="list-disc pl-6 space-y-1 text-gray-800">
                                    <li>Personal Account</li>
                                    <li>Possibility to add bank card</li>
                                    <li>Notification system (email/messengers)</li>
                                    <li>More modern UI</li>
                                </ul>
                                </div>

                                <div className="flex items-center gap-2 text-purple-700">
                                <GitFork className="w-5 h-5" />
                                <a
                                    href="https://github.com/OleksPorokhnia/olek-alek-ticket-app"
                                    target="_blank"
                                    className="hover:text-pink-500 transition"
                                >
                                    View project on GitHub
                                </a>
                                </div>
                            </CardContent>
                            </Card>

                    </div>
                <div>
                <div>
                    <div className="flex justify-center">
                        <div className="w-150 h-1 bg-purple-400 rounded mt-10 mb-4"></div>
                    </div>
                    <div className="text-6xl flex justify-center text-purple-600 mb-5">
                        Education
                    </div>
                    <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-6 mb-4 border border-gray-200"
                    >
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                        <GraduationCap className="w-7 h-7 text-purple-600" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">
                            Technical University of Varna
                            </h3>
                            <p className="text-sm text-gray-500">
                            Bachelor in Software and Internet Technologies
                            </p>
                        </div>
                        </div>
                        <span className="text-sm text-gray-600 bg-purple-100 px-3 py-1 rounded-full">
                        2022 Sep – Present
                        </span>
                    </div>

                    <div className="mb-6">
                        <span className="text-sm font-medium text-gray-700">
                        Grade:
                        </span>{" "}
                        <span className="font-semibold text-purple-700">5.85 / 6</span>
                    </div>

                    <div>
                        <h4 className="text-md font-semibold text-gray-800 mb-2">
                        Main subjects & areas of study
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700 list-disc list-inside">
                        <li>Object-Oriented Programming (Java, C#), Design Patterns</li>
                        <li>Database programming (Oracle, PL/SQL, normalization)</li>
                        <li>Discrete structures: nodes, trees, regex</li>
                        <li>Spring Boot & Hibernate</li>
                        <li>Web development (HTML, CSS, JavaScript)</li>
                        <li>System programming (Assembler, Linux, C)</li>
                        <li>Server programming (VirtualBox)</li>
                        <li>Computer networks (Cisco)</li>
                        </ul>
                    </div>
                    </motion.div>
                </div>
                        
                </div>
                </div>
            </div>
            <div className="w-1 h-100% bg-black ms-4 mr-4">

            </div>
            <motion.div
            ref={modalSkills}
            initial={{ width: "50%" }} 
            animate={{ width: open ? "50%" : "8%" }} 
            transition={{ duration: 0.5, ease: "easeInOut" }} 
            className="right sticky top-1 h-fit bg-white/80 backdrop-blur-md shadow-lg rounded-2xl overflow-hidden"
            >
            {/* <div>
                <button
                onClick={() => {
                    setOpen(!open);
                    console.log(width);
                }}
                >
                H
                </button>
            </div> */}

            <div>
                <h2 className="text-3xl flex justify-center text-purple-600 mt-5 mb-5">Skills</h2>
                {fullSkills.map((skill, i) => (
                <motion.div
                    key={i}
                    animate={{ opacity: 1, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: i * 0.2 }}
                    className={`bg-white/80 backdrop-blur-md shadow-md rounded-2xl p-4 mr-3 flex items-center gap-4 mb-4 border border-gray-200`}
                >
                    <skill.icon className="text-purple-600 w-6 h-6 flex-shrink-0" />
                    {open && (
                    <div className="flex-1">
                        <div className="flex justify-between mb-1 text-sm font-medium">
                        <span>{skill.name}</span>
                        <span>{skill.value}/100</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.value}%` }}
                            transition={{ duration: 1 }}
                            className="h-3 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-full shadow-sm"
                        />
                        </div>
                    </div>
                    )}
                </motion.div>
                ))}

                <h2 className="text-3xl flex justify-center text-purple-600 mb-5 mt-10">Bonuses</h2>
                {bonuses.map((skill, i) => (
                <motion.div
                    key={i}
                    animate={{ opacity: 1, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: i * 0.2 }}
                    className={`bg-white/80 backdrop-blur-md shadow-md rounded-2xl p-4 mr-3 flex items-center gap-4 border border-gray-200 mb-4`}
                >
                    <skill.icon className="text-purple-600 w-6 h-6 flex-shrink-0" />
                    {open && (
                    <div className="flex-1">
                        <div className="mb-1 text-sm font-medium">
                        <div className="mb-2">{skill.name}</div>
                        <div>Bonus: {skill.description}</div>
                        </div>
                    </div>
                    )}
                </motion.div>
                ))}
            </div>
            </motion.div>
        </div>
        <footer className="bg-gray-900 text-gray-300 py-6">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="text-lg font-semibold text-white">MyPortfolio</div>

                <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#about" className="hover:text-white transition">About</a>
                <a href="#projects" className="hover:text-white transition">Projects</a>
                </div>
                <div className="flex gap-5 justify-center items-center">
                    <div className="flex flex-col gap-3">
                        <a
                        href="https://t.me/olex_porohnya"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center text-white rounded-lg hover:bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 transition  hover:px-0.5 hover:py-0.5 mr-4"
                        >
                        <img src="/telegram-svgrepo-com (2).svg" alt="Telegram" class="w-5 h-5 mr-2" />
                        Telegram
                        </a>
                        <a
                        href="mailto:sashaporohnya76@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center text-white rounded-lg hover:bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 transition hover:px-0.5 hover:py-0.5 mr-4"
                        >
                        <Mail className="mr-2"/>
                        Gmail
                        </a>
                        <a
                        href="https://github.com/OleksPorokhnia"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center text-white rounded-lg hover:bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 transition hover:px-0.5 hover:py-0.5 mr-4"
                        >
                        <GitFork className="mr-2"/>
                        GitHub
                        </a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <a
                        href="https://www.linkedin.com/in/oleksandr-porokhnia-0b20a5358/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center text-white rounded-lg hover:bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 transition hover:px-0.5 hover:py-0.5 mr-4"
                        >
                        <Linkedin className="mr-2"/>
                        LinkedIn
                        </a>

                        <a
                        href="https://www.facebook.com/profile.php?id=61577154540274"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center text-white rounded-lg hover:bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 transition hover:px-0.5 hover:py-0.5 mr-4"
                        >
                        <Facebook  className="mr-2"/>
                        Facebook
                        </a>
                    </div>
                </div>

                <div className="text-sm text-gray-400 mt-4 md:mt-0">
                © {new Date().getFullYear()} MyPortfolio. All rights reserved.
                </div>
            </div>
        </footer>
    </div>
  );
}
