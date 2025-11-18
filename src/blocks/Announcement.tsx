import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from "@/components/ui/card";
import DresscodeIMG from "@/assets/dresscode.jpeg";

export default function Announcement() {
    return (
        <div className="relative bg-[#eefbff] md:py-48 py-24 w-full flex flex-col items-center justify-center">
            <div className="relative flex flex-col items-center gap-4">
                <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold">Announcement</h2>
                <p className="lg:text-lg md:w-fit w-screen px-4 text-center">Jangan lupa untuk stay tune untuk informasi selanjutnya!</p>
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
                            <Card className="border-none hover:cursor-pointer">
                                <CardContent
                                    className="
                                        border-2 rounded-3xl flex aspect-video items-center justify-center p-6
                                        bg-cover bg-center bg-no-repeat
                                    "
                                    style={{backgroundImage: `url("${DresscodeIMG}")`}}
                                />
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}