import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import { menuData } from "@/lib/menuData"

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

  return <div>Slug: {params.slug}</div>
}