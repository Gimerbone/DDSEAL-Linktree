import { useState, useEffect } from "react"
import banner_img from "@/assets/hero-banner.gif"

export default function HeroBanner() {
    return (
        <div
            className="relative w-full h-160 flex flex-col items-center bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url('${banner_img}')`}}
        >
            <div className="absolute inset-0 bg-black/80" /> {/* overlay */}

            <div className="relative w-full p-8 h-16 flex justify-between items-center">
                <p className="font-bold text-xl text-white">DOUBLE DECKER</p>
            </div>

            <div className="relative flex-1 w-full pt-36 flex flex-col items-center gap-4">
                <h1 className="text-4xl font-bold text-center text-white">Dive Into Telkomsel Atmosphere</h1>
                <p className="text-lg tracking-wide text-white">Start your journey now! Campus today, company tomorrow.</p>
                <p className="mt-4 text-lg tracking-wide text-white">COUNTDOWN KEBERANGKATAN</p>
                <Countdown initialSeconds={7 * 60 * 60}/>
            </div>
        </div>
    )
}

type CountdownProps = {
  initialSeconds: number;
}

function Countdown({ initialSeconds }: CountdownProps) {
    const [timeLeft, setTimeLeft] = useState(initialSeconds);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor(timeLeft / 60) % 60;
    const seconds = timeLeft % 60;

    return (
        <div className="flex items-center justify-center text-5xl text-white font-semibold" style={{fontFamily : "sans-serif"}}>
            {hours.toString().padStart(2, "0")}{" : "}{minutes.toString().padStart(2, "0")}{" : "}{seconds.toString().padStart(2, "0")}
        </div>
    );
};