import bg_office from "@/assets/bg_office.jpeg";

export default function QuickLinks() {
    return (
        <div
            className="relative w-full md:py-32 py-16 flex flex-col items-center md:gap-12 gap-10 bg-center bg-cover bg-no-repeat"
            style={{backgroundImage : `url("${bg_office}")`}}
        >
            <div className="absolute inset-0 bg-black/80" /> {/* overlay */}

            <h2 className="text-white relative md:text-4xl text-2xl font-bold">Pusat Informasi</h2>
            <div className="relative grid lg:mt-0 mt-4 md:grid-cols-2 grid-cols-1 md:gap-y-10 gap-y-6 gap-x-10">
                <LinkContainer title = "Rundown Acara" link="https://example.com/"/>
                <LinkContainer title = "Denah Tempat Duduk Bus" link="https://example.com/"/>
                <LinkContainer title = "Daftar Peserta" link="https://example.com/"/>
                <LinkContainer title = "Tim Panitia" link="https://example.com/"/>
                <LinkContainer title = "Petunjuk Pengajuan Dispen" link="https://example.com/"/>
                <LinkContainer title = "Peraturan dan Perlengkapan" link="https://example.com/"/>
                <LinkContainer title = "FAQ" link="https://example.com/"/>
            </div>
        </div>
    )
}

type LinkContainerProps = {
    icon? : string,
    title? : string,
    link? : string,
}

function LinkContainer({icon = "", title = "", link = "https://example.com/"} : LinkContainerProps) {
    return (
        <button className="hover:cursor-pointer hover:bg-red-900/90 active:bg-red-800 md:px-0 md:w-88 md:h-20 w-[85vw] h-[17vw] bg-red-950 rounded-2xl flex items-center justify-center">
            <p className="text-white font-medium md:text-lg">{title}</p>
        </button>
    )
}