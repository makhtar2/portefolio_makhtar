import Hero from "@/components/Hero";
import LatestProjects from "@/components/LatestProjects";
import OurSpecs from "@/components/OurSpec";
import projectsData from "@/assets/data/projects.json";

export default async function Home() {
    return (
        <div>
            <Hero />
            {/* On only show a preview/highlights on the landing page */}
            <LatestProjects projects={projectsData.slice(0, 3)} />
            <OurSpecs />
            
            {/* CTA for other pages */}
            <div className="text-center my-24 px-6">
                <h2 className="text-4xl font-black text-slate-900 mb-6">Prêt à démarrer un projet ?</h2>
                <p className="text-slate-500 font-medium mb-10 max-w-2xl mx-auto">
                    Que vous ayez besoin d'un site web, d'une application mobile ou d'une identité visuelle complète, je suis là pour vous accompagner.
                </p>
                <a href="/contact" className="bg-brand-gradient text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:brightness-110 shadow-xl shadow-brand-primary/20 transition-all">
                    Me Contacter
                </a>
            </div>
        </div>
    );
}
