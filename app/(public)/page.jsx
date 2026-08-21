import Hero from "@/components/Hero";
import LatestProjects from "@/components/LatestProjects";
import OurSpecs from "@/components/OurSpec";
import LinkedInPosts from "@/components/LinkedInPosts";
import { getProjects, getLinkedInPosts } from "@/lib/supabase/public";
import Link from "next/link";

export const revalidate = 60; // Revalidate cache every 60 seconds

export default async function Home() {
    const projects = await getProjects();
    const linkedinPosts = await getLinkedInPosts();

    return (
        <div>
            <Hero />
            {/* On only show a preview/highlights on the landing page */}
            <LatestProjects projects={projects.slice(0, 3)} />
            <OurSpecs />
            <LinkedInPosts posts={linkedinPosts} />
            
            {/* CTA for other pages */}
            <div className="text-center my-24 px-6">
                <h2 className="text-4xl font-black text-slate-900 mb-6">Prêt à propulser vos projets ?</h2>
                <p className="text-slate-500 font-medium mb-10 max-w-2xl mx-auto">
                    Que vous ayez besoin d&apos;une architecture distribuée résiliente, d&apos;automatiser vos flux métiers (n8n), d&apos;intégrer l&apos;IA ou de développer une application moderne, je suis à votre écoute.
                </p>
                <Link href="/contact" className="bg-brand-gradient text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:brightness-110 shadow-xl shadow-brand-primary/20 transition-all">
                    Me Contacter
                </Link>
            </div>
        </div>
    );
}
