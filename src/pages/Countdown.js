import "../App.css";

function Countdown() {
    return (
        <div className="relative flex flex-col items-center md:min-h-screen">
            <div className="flex flex-col items-center py-4 md:py-8">
                <div className="text-base md:text-xl tracking-widest text-[#9C7951] georgia mt-6">
                    SAVE THE DATE
                </div>
                <div className="flex flex-row gap-2 md:gap-5 py-5">
                    <div className="flex flex-col justify-center items-center px-4 md:px-7 py-2 border rounded-xl border-[#E5DED9] bg-[#FDF6F0]">
                        <div className="georgia text-lg md:text-4xl text-[#4C4E4D] tracking-widest">
                            20
                        </div>
                        <div className="georgia text-sm md:text-lg text-[#4C4E4D]">
                            Hari
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center px-4 md:px-7 py-2 border rounded-xl border-[#E5DED9] bg-[#FDF6F0]">
                        <div className="georgia text-lg md:text-4xl text-[#4C4E4D] tracking-widest">
                            12
                        </div>
                        <div className="georgia text-sm md:text-lg text-[#4C4E4D]">
                            Jam
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center px-4 md:px-7 py-2 border rounded-xl border-[#E5DED9] bg-[#FDF6F0]">
                        <div className="georgia text-lg md:text-4xl text-[#4C4E4D] tracking-widest">
                            38
                        </div>
                        <div className="georgia text-sm md:text-lg text-[#4C4E4D]">
                            Menit
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center px-4 md:px-7 py-2 border rounded-xl border-[#E5DED9] bg-[#FDF6F0]">
                        <div className="georgia text-lg md:text-4xl text-[#4C4E4D] tracking-widest">
                            00
                        </div>
                        <div className="georgia text-sm md:text-lg text-[#4C4E4D]">
                            Detik
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-grow bg-[#F6E3D2] w-full items-start py-5 md:items-center  md:justify-center md:py-0">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-6 md:gap-10 px-4">
                    <div className="georgia text-lg md:text-3xl text-center">
                        وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ
                        اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ
                        مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ
                        لِّقَوْمٍ يَّتَفَكَّرُوْنَ
                    </div>
                    <div className="georgia text-sm md:text-lg text-center">
                        "Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia
                        menciptakan pasangan-pasangan untukmu dari (jenis)
                        dirimu sendiri agar kamu merasa tenteram kepadanya. Dia
                        menjadikan di antaramu rasa cinta dan kasih sayang.
                        Sesungguhnya pada yang demikian itu benar-benar terdapat
                        tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
                    </div>
                    <div className="georgia text-sm md:text-lg text-center italic">
                        QS. Ar-Rum : 21
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Countdown;
