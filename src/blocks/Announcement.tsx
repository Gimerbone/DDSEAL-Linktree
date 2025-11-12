import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export default function Announcement() {
    return (
        <div className="h-160 pt-24 w-full flex flex-col items-center gap-8">
            <h2 className="text-3xl font-bold">Announcement</h2>
            <div className="flex-1 aspect-30/12 border-4 border-blue-200 rounded-2xl bg-white">
                <Carousel className="w-full">
                    <CarouselContent>
                        <CarouselItem>
                            <div className="p-1">

                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}