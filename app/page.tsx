import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { menuData } from "@/lib/menuData"
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-scroll">
      <iframe className="w-full h-full" src='/menu.pdf' />
    </div>
  )

  return (
    <>
    <header className="bg-cover bg-center relative py-16" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80')" }}>
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="container mx-auto text-center relative z-10 max-w-lg text-white">
        <h1 className="text-4xl font-semibold tracking-widest">Mekima Café</h1>
        <br></br>
        <p className='font-light tracking-widest'>Explora todas nuestras opciones.</p>
      </div>
    </header>
    <main className="flex flex-col items-center justify-between p-2 sm:p-6">
      <Tabs defaultValue={menuData[0].title} className="w-full mx-auto">
        {/* Tab list */}
        <TabsList className="grid w-full md:w-96 mx-auto grid-cols-2">
          {menuData.map((tab) => (
            <TabsTrigger key={tab.title} value={tab.title} className="text-xs">{tab.title}</TabsTrigger>
          ))}
        </TabsList>
        {/* Tab data */}
        {menuData.map((tab) => (
          <TabsContent className="w-full max-w-5xl mx-auto mt-4 py-4" key={tab.title} value={tab.title}>
            {/* Divider */}
            <div className="mb-4">
              <Separator className="" />
            </div>
            {/* Show section description */}
            <h2 className="text-2xl font-bold mt-2">{tab.title}</h2>
            <p className="text-muted-foreground">{tab.description}</p>
            {/* Loop throught different sections */}
            {tab.sections.map((section) => (
              <>
                {section.title && (
                  <h4 className="mt-6 text-lg font-semibold">
                    {section.title}
                  </h4>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 mt-4" key={section.title}>
                  {section.dishes.map((dish) => (
                    <Link href={`/detalles/${dish.slug}`} key={dish.slug} className="flex">
                      <Card className="w-full overflow-hidden flex cursor-pointer transform transition duration-500" key={dish.slug}>
                        <img className="h-full w-1/3 object-cover" src={dish.images[0]} alt={`Imagen de ${dish.name}`}/>
                        <div className="w-2/3 h-full ">
                          <CardHeader>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardDescription>
                              {dish.shortDescription}
                            </CardDescription>
                            <h3 className='text-lg text-green-500 mt-4'>${dish.price}</h3>
                          </CardHeader>
                          <CardFooter className="flex items-end">
                            <Button variant="outline">Ver más</Button>
                          </CardFooter>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </main>
    </>
  )
}
