import Hero from "@/components/Hero";
import LatestProjects from "@/components/LatestProjects";
import OurSpecs from "@/components/OurSpec";
import LinkedInPosts from "@/components/LinkedInPosts";
import { getProjects, getLinkedInPosts } from "@/lib/supabase/public";
import Link from "next/link";

export default async function Home() {
    const projects = await getProjects();
    const linkedinPosts = await getLinkedInPosts();

    return (
        <main className="min-h-screen bg-white">
            <Hero />
            <LatestProjects projects={projects} initialCount={6} />
            <OurSpecs />
            <LinkedInPosts posts={linkedinPosts} />
            
            {/* CTA for other pages */}
            <div className="text-center my-32 px-6">
                <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-12 sm:p-20 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[100px] rounded-full -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/10 blur-[100px] rounded-full -ml-32 -mb-32" />
                    
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic leading-none relative z-10">
                        Prêt à donner vie <br />
                        <span className="text-brand-primary">à votre vision ?</span>
                    </h2>
                    <p className="text-slate-400 font-semibold mb-12 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed relative z-10">
                        Que vous ayez besoin d'un site web performant ou d'un design percutant, je suis là pour vous accompagner.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-4 bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-brand-primary hover:text-white transition-all shadow-xl active:scale-95 relative z-10">
                        Démarrer un projet
                    </Link>
                </div>
            </div>
        </main>
    );
}
