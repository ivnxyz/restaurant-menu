import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import { menuData } from "@/lib/menuData"
import { Carousel } from './components/Carousel'
import { Button } from '@/components/ui/button'

// List all dishes
const allDishes = menuData.reduce((acc: any, tab: any) => {
  const sections = tab.sections
  const dishes = sections.reduce((arr: any, section: any) => {
    return arr.concat(section.dishes)
  }, [])
  return acc.concat(dishes)
}, [])

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Find dish
  const foundDish = allDishes.find((dish: any) => dish.slug === params.slug);
 
  return {
    title: foundDish?.name,
    openGraph: {
      images: foundDish?.images,
    },
  }
}

export default function DetailPage({ params }: Props) {
  // Find dish
  const foundDish = allDishes.find((dish: any) => dish.slug === params.slug);
  
  if (!foundDish) {
    return notFound()
  }

  return (
    <>
      <Carousel images={foundDish.images} name={foundDish.name} />
      <main className='w-full max-w-3xl mx-auto py-4 px-2'>
        <h1 className='text-4xl font-semibold tracking-widest mt-2 md:mt-8'>{foundDish.name}</h1>
        <h3 className='text-lg text-green-500 mt-4'>${foundDish.price}</h3>
        <p className='text-muted-foreground mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur magnam iusto aperiam commodi beatae laboriosam veritatis? Molestias labore adipisci aut alias quos provident, repellendus harum, ea consequuntur maxime nemo reprehenderit?</p>
      </main>
    </>
  )
}