import { type LucideIcon } from "lucide-react";
import { NotebookPen, Clapperboard, ArrowUpRight, Users, ClipboardList, FileText } from "lucide-react";
import { Contact, ScrollText, BusFront, PencilRuler, MessageCircleMore } from "lucide-react";

import { toast } from "sonner";

export default function QuickLinks() {
    return (
        <div className="relative bg-white w-full py-24 md:py-32 flex flex-col items-center justify-center md:gap-12 gap-10">
            <h2 className="relative lg:text-4xl md:text-3xl text-2xl font-bold">Pusat Informasi</h2>
            <div className="relative rounded-4xl w-screen md:max-w-180 lg:max-w-300 p-4 md:p-8 bg-white flex flex-wrap justify-center gap-4 md:gap-6">
                <LinkContainer icon={ClipboardList} title = "Rundown Acara" link="https://drive.google.com/file/d/1_d18TW8VXJrGArGUocX0ZRn5v1VN1CHG/view?usp=drive_link"/>
                <LinkContainer icon={BusFront} title = "Denah Kursi Bus" link="https://drive.google.com/file/d/1lTA9_5Uba2w7PD9IEwmdpDDiik_IiW9R/view?usp=drive_link"/>
                <LinkContainer icon={Users} title = "Daftar Peserta" link="https://drive.google.com/file/d/1nkWUCOKflbdtwuc_QmyV9S6rK0SnW8im/view?usp=drive_link"/>
                <LinkContainer icon={Contact} title = "Tim Panitia" hasToast toastMsg="Fitur ini belum dapat diakses" link="https://example.com/"/>
                <LinkContainer icon={FileText} title = "Template Dispen" link="https://drive.google.com/file/d/1M4ORLRumG3R0jUP_-dclo4Ea5i0guiBZ/view?usp=drive_link"/>
                <LinkContainer icon={ScrollText} title = "Peraturan" hasToast toastMsg="Fitur ini belum dapat diakses" link="https://example.com/"/>
                <LinkContainer icon={PencilRuler} title = "Perlengkapan" hasToast toastMsg="Fitur ini belum dapat diakses" link="https://example.com/"/>
                <LinkContainer icon={Clapperboard} title = "Tanya Peserta" hasToast toastMsg="Video belum dapat diakses" link="https://example.com/"/>
                <LinkContainer icon={MessageCircleMore} title = "FAQ" hasToast toastMsg="Fitur ini belum dapat diakses" link="https://example.com/"/>
                <LinkContainer icon={NotebookPen} title = "Feedback Peserta" hasToast toastMsg="Fitur ini belum dapat diakses" link="https://example.com/"/>
            </div>
        </div>
    )
}

type LinkContainerProps = {
  icon?: LucideIcon
  title?: string
  link?: string
  hasToast?: boolean
  toastMsg?: string
}

export function LinkContainer({
    icon: Icon,
    title = "Lorem Ipsum",
    link = "https://example.com/",
    hasToast = false,
    toastMsg = "",
}: LinkContainerProps) {
    return (
        <button
            onClick={() => {
                if (hasToast) {
                    toast.info(`${toastMsg}`)
                } else {
                    window.open(link, "_blank", "noopener,noreferrer")
                }
            }}
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