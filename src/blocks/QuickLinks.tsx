import { type LucideIcon } from "lucide-react";
import { Clapperboard, ArrowUpRight, Users, ClipboardList, FileText } from "lucide-react";
import { Contact, ScrollText, BusFront, PencilRuler, MessageCircleMore, Camera } from "lucide-react";

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
                <LinkContainer icon={Contact} title = "Tim Panitia" link="https://drive.google.com/file/d/13f_AIu0KV71A37KmGA9_ObJh_U0r1xCK/view?usp=drive_link"/>
                <LinkContainer icon={FileText} title = "Template Dispen" link="https://drive.google.com/file/d/1M4ORLRumG3R0jUP_-dclo4Ea5i0guiBZ/view?usp=drive_link"/>
                <LinkContainer icon={ScrollText} title = "Peraturan" link="https://drive.google.com/file/d/1yLOYd7zpWKpBskLuO2Hjn-RQEWkPGgFr/view?usp=drive_link"/>
                <LinkContainer icon={PencilRuler} title = "Perlengkapan" link="https://drive.google.com/file/d/1r9W961UPm6sdCHvx53SKHP_KQ_-qlL1E/view?usp=drive_link"/>
                <LinkContainer icon={Camera} title = "Dokumentasi" link="https://drive.google.com/drive/folders/1MR4jaScESjPyaXcDa9KJhzpEzjSunVgA"/>
                <LinkContainer icon={Clapperboard} title = "After Movie" link="https://www.instagram.com/reel/DR1HOenkrwy/?utm_source=ig_web_copy_link"/>

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
                                <AccordionTrigger>Apa saja yang perlu dibawa?</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-balance">
                                        <p>
                                            Hal-hal yang perlu dibawa, dianjurkan untuk dibawa,
                                            dan tidak boleh dibawa dapat dilihat pada menu
                                            "Perlengkapan" pada pusat informasi diatas ya! 
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Dimana titik kumpul dan kapan waktu keberangkatan?</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-balance">
                                        <p>
                                            Titik kumpul: TUCH <br/>
                                            Waktu: 07.00 <br/>
                                            Jangan sampai telat ya!
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Apa yang terjadi jika saya terlambat ke titik kumpul?</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-balance">
                                        <p>
                                            Kami akan tetap tunggu selama 15 menit, diluar itu akan kami tinggal
                                            dan kamu tidak akan mendapat refund {'('}sesuai dengan pernyataan
                                            di pendaftaran{')'}. Jadi jangan sampai telat ya!
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>Apakah akan ada presensi?</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-balance">
                                        <p>
                                            Presensi akan dilakukan sebanyak 2x selama acara berlangsung
                                            melalui google form, jadi pastikan agar baterai hpmu cukup!
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-5">
                                    <AccordionTrigger>Apakah Konsumsi Disediakan Panitia?</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-balance">
                                        <p>
                                            Ya! Kami akan menyediakan 1x konsumsi berat untuk kalian.
                                            Oleh karena itu, jangan lupa sarapan dulu ya!
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-6">
                                    <AccordionTrigger>Bagaimana jika saya mengalami kendala kesehatan?</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-balance">
                                        <p>
                                            Peserta diwajibkan untuk membawa obat2an pribadi ya!
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-7">
                                    <AccordionTrigger>Siapa yang bisa saya hubungi jika ada kendala?</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-balance">
                                        <p>
                                            Kamu dapat menghubungi panitia dibawah ini: <br/>
                                            - Ifa : 081328608474 <br/>
                                            - Dinar : 085888048351 <br/>
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-8">
                                    <AccordionTrigger>Apakah merokok diperbolehkan?</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-balance">
                                        <p>
                                            Peserta tidak boleh merokok saat sedang berada di CTI / company ya!
                                            tapi tenang, kamu tetap bisa merokok di rest area nanti.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </DialogContent>
                </Dialog>
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