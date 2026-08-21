const CategoriesMarquee = ({ categories = [] }) => {

    return (
        <div className="overflow-hidden w-full relative max-w-7xl mx-auto select-none group my-10 sm:my-16">
            <div className="absolute left-0 top-0 h-full w-12 sm:w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
            <div className="flex min-w-[200%] animate-[marqueeScroll_12s_linear_infinite] sm:animate-[marqueeScroll_35s_linear_infinite] group-hover:[animation-play-state:paused] gap-3 sm:gap-4" >
                {[...categories, ...categories, ...categories, ...categories].map((skill, index) => (
                    <div key={index} className="px-4 sm:px-6 py-2 sm:py-2.5 bg-slate-50 border border-slate-100 rounded-xl sm:rounded-2xl text-slate-600 hover:text-brand-primary hover:border-brand-primary/30 transition-colors text-[11px] sm:text-xs font-black uppercase tracking-wider whitespace-nowrap shadow-sm">
                        {skill}
                    </div>
                ))}
            </div>
            <div className="absolute right-0 top-0 h-full w-12 sm:w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
        </div>
    );
};

export default CategoriesMarquee;
