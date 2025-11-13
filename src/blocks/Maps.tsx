import BackgroundImg from "@/assets/bg_office_3.jpeg";

export default function Maps() {
    return (
        <div
            className="relative bg-black pt-20 lg:h-180 h-180 w-full flex lg:flex-row flex-col-reverse items-center justify-center lg:gap-32 gap-12"
            style={{backgroundImage : `url("${BackgroundImg}")`}}
        >
            <div className="absolute inset-0 bg-black/80" /> {/* overlay */}

            <div className="relative flex flex-col lg:items-start items-center pt-4 h-100 text-white">
                <p className="font-bold lg:text-4xl md:text-3xl text-2xl lg:text-left text-center">Lokasi Tujuan</p>
                <p className="pt-4 lg:text-lg lg:w-120 w-[90vw] lg:text-left text-center">Jl. Gatot Subroto No.24-25, Kuningan Bar., Kec. Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12930</p>
                <button
                    onClick={() => window.open("https://maps.app.goo.gl/XN4no1Y8SP36n6Sy6", "_blank", "noopener,noreferrer")}
                    className="cursor-pointer hover:bg-red-900/90 active:bg-red-800 mt-8 md:w-68 w-56 md:h-18 h-16 rounded-2xl text-white lg:text-xl text-lg font-medium bg-red-950"
                >
                    Get Direction
                </button>
            </div>

            <div className="relative lg:w-[35%] md:w-140 w-[90vw] md:h-100 h-60">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2548969209906!2d106.82087969999999!3d-6.230088800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3004157d5ed%3A0x1cf138234dbe7e94!2sCentennial%20Tower!5e0!3m2!1sen!2sid!4v1763035619680!5m2!1sen!2sid"
                    className="w-full h-full border-0 rounded-xl"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    )
}