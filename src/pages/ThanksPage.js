import React from "react";
import "../App.css";

function ThanksPage() {
    return (
        <div className="relative flex flex-col items-center justify-start mb-4 text-center">
                <div className="text-lg md:text-xl georgia font-semibold mb-3">
                    TERIMA KASIH
                </div>
                <div className="text-sm md:text-3xl georgia">
                    بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا
                    فِي خَيْرٍ
                </div>
                <div className="text-sm md:text-xl georgia">
                    "Barakallahu Laka wa Baraka 'alaika wa Jama'a Bainakuma fii
                    Khayrin."
                </div>
                <div className="text-sm md:text-lg georgia max-w-[40em] mb-6">
                    Semoga Allah memberi barakah untukmu, dan semoga Allah
                    memberi barakah atasmu, serta mengumpulkan kalian berdua
                    dalam kebaikan.
                </div>
        </div>
    );
}

export default ThanksPage;
