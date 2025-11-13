import bg_office from "@/assets/bg_office.jpeg";
import { type LucideIcon } from "lucide-react"
import { Users, ClipboardList, CalendarClock, BusFront, UserPen, Shirt, MessageCircleMore } from "lucide-react";

export default function QuickLinks() {
    return (
        <div
            className="relative w-full md:py-32 py-16 flex flex-col items-center md:gap-12 gap-10 bg-center bg-cover bg-no-repeat"
            style={{backgroundImage : `url("${bg_office}")`}}
        >
            <div className="absolute inset-0 bg-black/80" /> {/* overlay */}

            <h2 className="text-white relative md:text-4xl text-2xl font-bold">Pusat Informasi</h2>
            <div className="relative grid lg:mt-0 mt-4 md:grid-cols-2 grid-cols-1 md:gap-y-10 gap-y-6 gap-x-10">
                <LinkContainer icon={CalendarClock} title = "Rundown Acara" link="https://example.com/"/>
                <LinkContainer icon={BusFront} title = "Denah Tempat Duduk Bus" link="https://example.com/"/>
                <LinkContainer icon={ClipboardList} title = "Daftar Peserta" link="https://example.com/"/>
                <LinkContainer icon={Users} title = "Tim Panitia" link="https://example.com/"/>
                <LinkContainer icon={UserPen} title = "Petunjuk Pengajuan Dispen" link="https://example.com/"/>
                <LinkContainer icon={Shirt} title = "Peraturan dan Perlengkapan" link="https://example.com/"/>
                <LinkContainer icon={MessageCircleMore} title = "FAQ" link="https://example.com/"/>
            </div>
        </div>
    )
}

type LinkContainerProps = {
  icon?: LucideIcon
  title?: string
  link?: string
}

export function LinkContainer({icon: Icon, title = "Test Title", link = "https://example.com/"}: LinkContainerProps) {
    return (
        <button
            onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
            className="flex items-center justify-center hover:cursor-pointer hover:bg-red-900/90 active:bg-red-800 md:px-0 md:w-98 md:h-20 w-[85vw] h-[17vw] bg-red-950 rounded-2xl gap-2"
        >
            <div className="w-4"/>

            {Icon && <Icon className="w-7 h-7 text-white" />}

            <div className="flex-1 flex justify-center items-center">
                <p className="text-white font-medium md:text-lg">{title}</p>
            </div>
        </button>
    )
}