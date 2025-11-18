import { Countdown } from "@/components/custom/Countdown"

export default function HeroBanner() {
    return (
        <div
            className="relative w-full h-200 flex flex-col items-center bg-center bg-cover bg-no-repeat"
        >
            {/* 🎞️ Background video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="https://ugc.production.linktr.ee/c1432719-2cd6-4856-a730-80bbd1a7cd4f_Final-6th-Version.mp4"
                poster="https://ugc.production.linktr.ee/ab038f77-2f50-4244-ac0b-fb829a701dc8_thumbnail.jpeg"
                autoPlay
                loop
                muted
                playsInline
            />

            <div className="absolute inset-0 bg-black/80" /> {/* overlay */}

            <div className="relative w-full md:px-8 px-4 h-16 flex justify-between items-center">
                <p className="font-bold text-xl text-white" style={{fontFamily : "Space Mono"}}>DOUBLE DECKER</p>
            </div>

            <div className="relative lg:pl-24 md:pl-16 pt-24 px-4 flex-1 w-full flex flex-col items-start gap-8">
                <h1 className="md:w-120 md:text-7xl md:leading-20 text-[55px] leading-16 font-bold text-white">Step Into the Future with CTI Group</h1>
                <p className="md:w-120 text-lg tracking-wide text-white">Selamat Datang di Pusat Informasi Double Decker 2025! Start your journey now! Campus today, company tomorrow.</p>
                <p className="text-lg tracking-wide text-white">COUNTDOWN KEBERANGKATAN</p>
                <Countdown/>
            </div>
        </div>
    )
}