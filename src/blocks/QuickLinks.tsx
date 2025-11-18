import { ScrollText, type LucideIcon } from "lucide-react"
import { Clapperboard, ArrowUpRight, Users, ClipboardList, BookAlert, BusFront, PencilRuler, MessageCircleMore } from "lucide-react";

export default function QuickLinks() {
    return (
        <div className="relative bg-white w-full py-24 md:py-32 flex flex-col items-center justify-center md:gap-12 gap-10">
            <h2 className="relative lg:text-4xl md:text-3xl text-2xl font-bold">Pusat Informasi</h2>
            <div className="relative rounded-4xl w-screen md:w-230 p-4 md:p-8 bg-white flex flex-wrap justify-center gap-4 md:gap-6">
                <LinkContainer icon={ClipboardList} title = "Rundown Acara" link="https://drive.google.com/file/d/1_d18TW8VXJrGArGUocX0ZRn5v1VN1CHG/view?usp=drive_link"/>
                <LinkContainer icon={BusFront} title = "Denah Kursi Bus" link="https://drive.google.com/file/d/1lTA9_5Uba2w7PD9IEwmdpDDiik_IiW9R/view?usp=drive_link"/>
                <LinkContainer icon={Users} title = "Tim Panitia" link="https://example.com/"/>
                <LinkContainer icon={BookAlert} title = "Template Dispen" link="https://example.com/"/>
                <LinkContainer icon={ScrollText} title = "Peraturan" link="https://example.com/"/>
                <LinkContainer icon={PencilRuler} title = "Perlengkapan" link="https://example.com/"/>
                <LinkContainer icon={Clapperboard} title = "Tanya Peserta" link="https://example.com/"/>
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
            className="aspect-square cursor-pointer h-38 md:h-48 p-4 md:p-6 flex flex-col rounded-2xl hover:bg-[#1b728c] active:bg-[#188aac] bg-[#00546e]"
        >
            <p className="text-white text-sm md:text-[16px] text-start font-medium">{title}</p>

            <div className="flex-1 flex items-end justify-between">
                {Icon && (
                    <Icon className="text-white -ml-3 md:-ml-2 w-[50%] h-[50%] object-contain" />
                )}

                <ArrowUpRight className="text-white w-[20%] h-[20%]"/>
            </div>
        </button>
    )
}