export default function QuickLinks() {
    return (
        <div className="w-full py-32 flex flex-col items-center gap-10">
            <h2 className="text-3xl font-bold">Pusat Informasi</h2>
            <div className="grid grid-cols-2 gap-y-8 gap-x-10">
                <LinkContainer title = "Rundown Acara"/>
                <LinkContainer title = "AAAA"/>
                <LinkContainer title = "AAAA"/>
                <LinkContainer title = "AAAA"/>
                <LinkContainer title = "AAAA"/>
                <LinkContainer title = "AAAA"/>
                <LinkContainer title = "AAAA"/>
                <LinkContainer title = "AAAA"/>
                <LinkContainer title = "AAAA"/>
            </div>
        </div>
    )
}

type LinkContainerProps = {
    icon? : string,
    title? : string,
    link? : string,
}

function LinkContainer({icon = "", title = "", link = ""} : LinkContainerProps) {
    return (
        <div className="hover:cursor-pointer hover:brightness-95 w-72 h-16 bg-red-800 rounded-2xl flex items-center justify-center">
            <p className="text-white">{title}</p>
        </div>
    )
}