import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InboxIcon as EnvelopeIcon, GithubIcon, LinkedinIcon } from "lucide-react"
import { Card } from "@/components/ui/card"
import Header from "@/components/header"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Profile Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center text-3xl font-bold">
              JD
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">Jane Designer</h1>
              <p className="text-gray-400 mb-4">UX Designer & Frontend Developer</p>
              <p className="mb-4 max-w-xl">
                Creando experiencias digitales intuitivas y atractivas. Especializada en diseño UX/UI y desarrollo
                frontend con TypeScript y React.
              </p>
              <div className="flex gap-3 justify-center md:justify-start">
                <Button className="rounded-full bg-white text-black hover:bg-gray-200">Contactar</Button>
                <Button variant="outline" className="rounded-full border-gray-600 hover:bg-gray-900">
                  Descargar CV
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Tabs */}
        <Tabs defaultValue="proyectos" className="w-full">
          <TabsList className="w-full bg-gray-900 p-1 rounded-xl mb-8">
            <TabsTrigger
              value="proyectos"
              className="flex-1 py-2 rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              Proyectos
            </TabsTrigger>
            <TabsTrigger
              value="habilidades"
              className="flex-1 py-2 rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              Habilidades
            </TabsTrigger>
            <TabsTrigger
              value="experiencia"
              className="flex-1 py-2 rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              Experiencia
            </TabsTrigger>
            <TabsTrigger
              value="contacto"
              className="flex-1 py-2 rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              Contacto
            </TabsTrigger>
          </TabsList>

          {/* Projects Tab */}
          <TabsContent value="proyectos" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Rediseño E-commerce"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Rediseño E-commerce</h3>
                  <p className="text-gray-400 mb-4">Rediseño de la interfaz y flujo de usuario para una plataforma de comercio electrónico.</p>
                  <div className="flex flex-wrap gap-2">
                    {["UX Design", "UI", "Research"].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="App Bancaria"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">App Bancaria</h3>
                  <p className="text-gray-400 mb-4">Aplicación móvil bancaria con enfoque en accesibilidad y facilidad de uso.</p>
                  <div className="flex flex-wrap gap-2">
                    {["Mobile", "Fintech", "UI Design"].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Plataforma de Viajes"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Plataforma de Viajes</h3>
                  <p className="text-gray-400 mb-4">Diseño y desarrollo de una plataforma responsive de reservas de viajes.</p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Responsive"].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Dashboard Analytics"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Dashboard Analytics</h3>
                  <p className="text-gray-400 mb-4">Panel de control para visualización de datos y métricas de negocio.</p>
                  <div className="flex flex-wrap gap-2">
                    {["Data Viz", "Dashboard", "UX"].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="habilidades">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Diseño</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>UI Design</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>UX Research</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Wireframing</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Prototyping</span>
                      <span>80%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Desarrollo</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>HTML/CSS</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>JavaScript</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>TypeScript</span>
                      <span>80%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>React</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experiencia">
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-xl">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-bold">Senior UX Designer</h3>
                  <span className="text-blue-400">2021 - Presente</span>
                </div>
                <p className="text-gray-400 mb-2">TechCorp Inc.</p>
                <p>
                  Lideré el rediseño del producto principal de la empresa, resultando en un aumento del 30% en la
                  participación de los usuarios.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-bold">UX/UI Designer</h3>
                  <span className="text-blue-400">2018 - 2021</span>
                </div>
                <p className="text-gray-400 mb-2">DesignStudio</p>
                <p>
                  Colaboré con equipos multifuncionales para crear diseños centrados en el usuario para varios clientes.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-bold">Frontend Developer</h3>
                  <span className="text-blue-400">2016 - 2018</span>
                </div>
                <p className="text-gray-400 mb-2">WebSolutions</p>
                <p>Desarrollé sitios web y aplicaciones responsivas utilizando tecnologías modernas de frontend.</p>
              </div>
            </div>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contacto">
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-6 text-center">Ponte en contacto</h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                      <EnvelopeIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-400">Email</p>
                      <p>jane@designer.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                      <LinkedinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-400">LinkedIn</p>
                      <p>linkedin.com/in/janedesigner</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-400">GitHub</p>
                      <p>github.com/janedesigner</p>
                    </div>
                  </div>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-400 mb-1">Nombre</label>
                    <input
                      type="text"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1">Mensaje</label>
                    <textarea
                      rows={4}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">Enviar mensaje</Button>
                </form>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

