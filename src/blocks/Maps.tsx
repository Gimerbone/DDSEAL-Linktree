export default function Maps() {
    return (
        <div
            className="relative bg-[#eefbff] py-32 w-full flex lg:flex-row flex-col-reverse items-center justify-center lg:gap-32 gap-12"
        >
            <div className="relative bg-[#eefbff] md:bg-white rounded-4xl md:py-16 lg:w-[95vw] lg:max-w-330 flex lg:flex-row flex-col-reverse items-center justify-center lg:gap-0 gap-12">
                <div className="relative flex flex-col lg:items-start items-center pt-4 lg:h-100 lg:gap-2">
                    <p className="font-bold lg:text-4xl md:text-3xl text-2xl lg:text-left text-center">Lokasi Tujuan</p>
                    <p className="pt-4 lg:text-lg lg:w-120 md:w-[90vw] w-[85vw] lg:text-left text-justify md:text-center">Jl. Gatot Subroto No.24-25, Kuningan Bar., Kec. Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12930.</p>
                    <button
                        onClick={() => window.open("https://maps.app.goo.gl/XN4no1Y8SP36n6Sy6", "_blank", "noopener,noreferrer")}
                        className="cursor-pointer hover:bg-[#1b728c] active:bg-[#188aac] bg-[#00546e] mt-8 md:w-68 w-56 md:h-18 h-16 rounded-xl md:rounded-2xl lg:text-xl text-white text-lg font-medium"
                    >
                        Get Direction
                    </button>
                </div>

                <div className="w-[10vw] max-w-36"/>

                <div className="relative lg:w-[35vw] lg:max-w-140 md:w-140 w-[90vw] md:h-100 h-60">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2548969209906!2d106.82087969999999!3d-6.230088800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3004157d5ed%3A0x1cf138234dbe7e94!2sCentennial%20Tower!5e0!3m2!1sen!2sid!4v1763035619680!5m2!1sen!2sid"
                        className="w-full h-full border-0 rounded-xl"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </div>
    )
}