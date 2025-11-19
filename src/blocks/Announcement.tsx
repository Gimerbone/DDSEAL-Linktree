import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from "@/components/ui/card";

import DresscodeIMG from "@/assets/dresscode.jpeg";
import bc_tuch from "@/assets/bc_tuch.jpg";
import bc_dresscode from "@/assets/bc_dresscode.jpg";
import bc_smoking from "@/assets/bc_smoking.png";
import bc_makanan from "@/assets/bc_makanan.jpg";
import bc_sarapan from "@/assets/bc_sarapan.jpg";
import bc_payung from "@/assets/bc_payung.jpg";
import bc_id_card from "@/assets/bc_id_card.jpg";

export default function Announcement() {
    const BroadcastContent = [
        DresscodeIMG,
        bc_tuch,
        bc_sarapan,
        bc_dresscode,
        bc_id_card,
        bc_payung,
        bc_makanan,
        bc_smoking,
    ];

    return (
        <div className="relative `bg-[#eefbff]` md:py-48 py-24 w-full flex flex-col items-center justify-center">
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
                    {BroadcastContent.map((src, index) => (
                        <CarouselItem key={index} className="lg:basis-1/2">
                            <Card className="border-none hover:cursor-pointer">
                                <CardContent
                                    className="
                                        border-2 rounded-2xl md:rounded-3xl flex aspect-video items-center justify-center p-6
                                        bg-cover bg-center bg-no-repeat
                                    "
                                    style={{backgroundImage: `url("${src}")`}}
                                />
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}