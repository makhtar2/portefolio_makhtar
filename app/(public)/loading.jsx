export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-6">
      <div className="relative">
        {/* Animated Loader Logo */}
        <div className="size-20 bg-brand-gradient rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-brand-primary/20 animate-pulse rotate-3">
          <span className="font-black text-3xl">M</span>
        </div>
        {/* Spinner rings */}
        <div className="absolute inset-0 size-20 border-4 border-brand-primary/10 rounded-3xl" />
        <div className="absolute inset-0 size-20 border-t-4 border-brand-primary rounded-3xl animate-spin" />
      </div>
      
      <div className="mt-10 text-center">
        <h2 className="text-xl font-black text-slate-900 tracking-tight animate-pulse">Chargement...</h2>
        <p className="text-slate-400 font-medium text-xs uppercase tracking-widest mt-2">Préparez-vous à l'élégance</p>
      </div>

      {/* Subtle skeleton for content placeholder */}
      <div className="max-w-7xl mx-auto w-full mt-20 opacity-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-4">
                    <div className="aspect-[4/3] bg-slate-50 rounded-[2.5rem] animate-pulse" />
                    <div className="h-4 bg-slate-50 rounded-full w-2/3 animate-pulse mx-auto" />
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}
