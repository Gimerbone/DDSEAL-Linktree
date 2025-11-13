import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent } from "@/components/ui/card"
import BackgroundImg from "@/assets/bg_office_2.jpeg"

export default function Announcement() {
    return (
        <div 
            className="relative md:py-48 py-24 w-full flex flex-col items-center justify-center"
            style={{backgroundImage : `url("${BackgroundImg}")`}}    
        >
            <div className="absolute inset-0 bg-black/85" /> {/* overlay */}

            <div className="relative flex flex-col items-center gap-4">
                <h2 className="text-white lg:text-4xl md:text-3xl text-2xl font-bold">Announcement</h2>
                <p className="text-white lg:text-lg md:w-fit w-screen px-4 text-center">Jangan lupa untuk stay tune untuk informasi selanjutnya!</p>
            </div>

            <Carousel
                opts={{
                    align: "start",
                    loop : true,
                }}
                plugins={[
                    Autoplay({
                        delay : 3000,
                        stopOnInteraction : false,
                    }),
                ]}
                className="relative pt-12 md:px-8 px-4 md:max-w-300 w-screen"
                >
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="lg:basis-1/2">
                            <div>
                                <Card className="border-none hover:cursor-pointer">
                                    <CardContent className="bg-[#390005] border-none flex aspect-video items-center justify-center p-6">
                                        <span className="text-3xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}