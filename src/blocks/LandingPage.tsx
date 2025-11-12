import HeroBanner from "./HeroBanner";
import Announcement from "./Announcement";
import QuickLinks from "./QuickLinks";
import Maps from "./Maps";

export default function LandingPage() {
    return (
        /* Hero banner*/
        /* Welcoming message */
        /**Announcement */
        /**Quicklinks : Rundown, Peraturan, Do and Dont's, Denah tempat duduk bus */
        /**Daftar Peserta, Tim Panitia, Guide pengajuan dispen */
        
        /**Maps dengan Lokasi tujuan */

        <div className="w-screen flex justify-center">
            <div className="w-full">
                <HeroBanner />
                <Announcement />
                <QuickLinks/>
                <Maps></Maps>
            </div>
        </div>
    )
}