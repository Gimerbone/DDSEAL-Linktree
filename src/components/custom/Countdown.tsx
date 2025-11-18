import { useState, useEffect } from "react";
import { getTimeInSeconds } from "@/utils/getTime";
import { Skeleton } from "@/components/ui/skeleton";
import { CarouselDigit } from "@/components/custom/CarouselDigit";

export function Countdown() {
    const [timeLeft, setTimeLeft] = useState<number | null>(null);

    useEffect(() => {
        getTimeInSeconds()
        .then((seconds) => setTimeLeft(seconds))
        .catch(console.error);
    }, []);

    useEffect(() => {
        if (timeLeft === null || timeLeft <= 0) return;

        const timer = setInterval(() => {
        setTimeLeft((prev) => (prev !== null ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    if (timeLeft === null) {
        return (
            <div className="flex gap-4">
                <Skeleton className="h-24 w-20 rounded-2xl bg-white/30" />
                <Skeleton className="h-24 w-20 rounded-2xl bg-white/30" />
                <Skeleton className="h-24 w-20 rounded-2xl bg-white/30" />
            </div>
        );
    }

    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor(timeLeft / 60) % 60;
    const seconds = timeLeft % 60;

    const hh = hours.toString().padStart(2, "0");
    const mm = minutes.toString().padStart(2, "0");
    const ss = seconds.toString().padStart(2, "0");

    return (
        <div className="flex items-center gap-2">
            <CarouselDigit value={hh} />
            <div className="text-4xl md:text-5xl font-bold text-white select-none">:</div>
            <CarouselDigit value={mm} />
            <div className="text-4xl md:text-5xl font-bold text-white select-none">:</div>
            <CarouselDigit value={ss} />
        </div>
    );
}