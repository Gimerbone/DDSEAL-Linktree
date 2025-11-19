import { type LucideIcon } from "lucide-react";
import { NotebookPen, Clapperboard, ArrowUpRight, Users, ClipboardList, FileText } from "lucide-react";
import { Contact, ScrollText, BusFront, PencilRuler, MessageCircleMore } from "lucide-react";

import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
                <LinkContainer icon={ScrollText} title = "Peraturan" link="https://drive.google.com/file/d/1yLOYd7zpWKpBskLuO2Hjn-RQEWkPGgFr/view?usp=drive_link"/>
                <LinkContainer icon={PencilRuler} title = "Perlengkapan" hasToast toastMsg="Fitur ini belum dapat diakses" link="https://example.com/"/>
                <LinkContainer icon={Clapperboard} title = "Tanya Peserta" hasToast toastMsg="Video ini belum dapat diakses" link="https://example.com/"/>
                
                <Dialog>
                    <DialogTrigger>
                        <LinkContainer icon={MessageCircleMore} title = "FAQ"/>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>FAQ</DialogTitle>
                        </DialogHeader>
                        
                        <div className="max-h-80 overflow-y-auto pr-4 -mr-2">
                            <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                            defaultValue="item-1"
                        >
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Apa saja yang perlu dibawa pada saat hari-h acara?</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-balance">
                                        <p>Jawaban menyusul</p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Dimana titik kumpul dan kapan waktu keberangkatan?</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-balance">
                                        <p>
                                            Titik kumpul: TUCH <br/>
                                            Waktu: 07.00 <br/>
                                            Jangan sampai telat yaa!
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Apa yang terjadi jika saya terlambat ke titik kumpul?</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-balance">
                                        <p>
                                            Jawaban menyusul
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>Apakah akan ada presensi?</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-balance">
                                        <p>
                                            Jawaban menyusul
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-5">
                                    <AccordionTrigger>Apakah Konsumsi Disediakan Panitia?</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-balance">
                                        <p>
                                            Jawaban menyusul
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-6">
                                    <AccordionTrigger>Bagaimana jika saya mengalami kendala kesehatan?</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-balance">
                                        <p>
                                            Jawaban menyusul
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-7">
                                    <AccordionTrigger>Siapa yang bisa saya hubungi jika ada kendala?</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-balance">
                                        <p>
                                            Jawaban menyusul
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </DialogContent>
                </Dialog>

                <LinkContainer icon={NotebookPen} title = "Form Feedback" hasToast toastMsg="Fitur ini belum dapat diakses" link="https://example.com/"/>
            </div>
        </div>
    )
}

// function QuestionContainer({question, answer} : {question? : string; answer? : string}) {
//     return (
//         <div></div>
//     )
// }

type LinkContainerProps = {
  icon?: LucideIcon
  title?: string
  link?: string
  hasToast?: boolean
  toastMsg?: string
}

function LinkContainer({
    icon: Icon,
    title = "Lorem Ipsum",
    link = "",
    hasToast = false,
    toastMsg = "",
}: LinkContainerProps) {
    return (
        <button
            onClick={() => {
                if (hasToast) {
                    toast.info(`${toastMsg}`)
                } else if (link !== "") {
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