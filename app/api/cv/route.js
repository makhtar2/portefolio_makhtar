import { getProjects } from "@/lib/supabase/public"
import { NextResponse } from "next/server"

// Full CV HTML — A4 optimized, inline styles only (no Tailwind needed here)
function buildCVHtml(projectNames) {
    return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CV — Makhtar Wade</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Syne:wght@700;800&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        html, body {
            width: 210mm;
            min-height: 297mm;
            font-family: 'DM Sans', Arial, sans-serif;
            background: #fff;
            color: #0f172a;
            font-size: 11px;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
        }

        .page {
            width: 210mm;
            min-height: 297mm;
            display: flex;
            flex-direction: row;
        }

        /* ── SIDEBAR ── */
        .sidebar {
            width: 72mm;
            background: #0f172a;
            color: #fff;
            padding: 28px 20px;
            display: flex;
            flex-direction: column;
            gap: 22px;
            flex-shrink: 0;
        }

        .avatar {
            width: 80px; height: 80px;
            border-radius: 20px;
            background: linear-gradient(135deg, #d9a54e, #c2773a);
            margin: 0 auto;
            display: flex; align-items: center; justify-content: center;
            font-family: 'Syne', Arial, sans-serif;
            font-size: 32px; font-weight: 800;
            color: #fff;
        }

        .section-label {
            font-size: 8px;
            font-weight: 700;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: #d9a54e;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding-bottom: 6px;
            margin-bottom: 10px;
        }

        .contact-item {
            display: flex; align-items: flex-start; gap: 8px;
            font-size: 9.5px; font-weight: 600;
            color: #e2e8f0;
            margin-bottom: 8px;
            line-height: 1.4;
        }

        .contact-icon {
            width: 16px; height: 16px;
            background: rgba(255,255,255,0.06);
            border-radius: 5px;
            display: flex; align-items: center; justify-content: center;
            flex-shrink: 0; color: #d9a54e;
            font-size: 10px; font-weight: 800;
            margin-top: 1px;
        }

        .skill-group-label {
            font-size: 7.5px;
            font-weight: 700;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: #94a3b8;
            margin-bottom: 5px;
        }

        .skill-pills {
            display: flex; flex-wrap: wrap; gap: 4px;
            margin-bottom: 10px;
        }

        .pill {
            padding: 2px 7px;
            background: rgba(255,255,255,0.07);
            border-radius: 4px;
            font-size: 8.5px; font-weight: 600;
            color: #e2e8f0;
        }

        .lang-row {
            display: flex; justify-content: space-between;
            font-size: 9.5px; font-weight: 600;
            color: #e2e8f0;
            margin-bottom: 5px;
        }

        .lang-level { color: #d9a54e; }

        /* ── MAIN ── */
        .main {
            flex: 1;
            padding: 28px 24px;
            display: flex;
            flex-direction: column;
            gap: 18px;
        }

        .name {
            font-family: 'Syne', Arial, sans-serif;
            font-size: 30px; font-weight: 800;
            letter-spacing: -0.03em;
            line-height: 1;
            color: #0f172a;
            text-transform: uppercase;
        }

        .name span { color: #d9a54e; }

        .role {
            font-size: 8.5px; font-weight: 700;
            letter-spacing: 0.25em;
            text-transform: uppercase;
            color: #c2773a;
            margin: 6px 0 8px;
        }

        .bio {
            font-size: 9.5px; font-weight: 500;
            color: #64748b;
            line-height: 1.6;
            max-width: 340px;
        }

        .section-title {
            display: flex; align-items: center; gap: 8px;
            font-size: 8px; font-weight: 700;
            letter-spacing: 0.25em;
            text-transform: uppercase;
            color: #0f172a;
            margin-bottom: 10px;
        }

        .section-title::before {
            content: '';
            width: 20px; height: 2px;
            background: #d9a54e;
            flex-shrink: 0;
        }

        .exp-item {
            padding-left: 14px;
            border-left: 2px solid #e2e8f0;
            position: relative;
            margin-bottom: 12px;
        }

        .exp-dot {
            position: absolute;
            left: -5px; top: 2px;
            width: 8px; height: 8px;
            border-radius: 50%;
            background: #d9a54e;
        }

        .exp-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }

        .exp-title { font-size: 10px; font-weight: 800; color: #0f172a; }
        .exp-date { font-size: 8px; font-weight: 700; color: #94a3b8; }
        .exp-company { font-size: 8px; font-weight: 800; color: #d9a54e; text-transform: uppercase; letter-spacing: 0.1em; margin: 2px 0 3px; }
        .exp-desc { font-size: 8.5px; font-weight: 500; color: #64748b; line-height: 1.4; }

        .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

        .edu-item { margin-bottom: 10px; }
        .edu-title { font-size: 9.5px; font-weight: 800; color: #0f172a; margin-bottom: 2px; }
        .edu-sub { font-size: 8.5px; font-weight: 600; color: #94a3b8; }

        .cert-item {
            display: flex; align-items: center; gap: 6px;
            font-size: 8.5px; font-weight: 600; color: #64748b;
            margin-bottom: 6px;
        }

        .cert-dot {
            width: 6px; height: 6px;
            border-radius: 50%;
            background: #d9a54e;
            flex-shrink: 0;
        }

        .projects-text {
            font-size: 8.5px; font-weight: 600;
            color: #94a3b8;
            line-height: 1.7;
        }

        .footer {
            margin-top: auto;
            padding-top: 12px;
            border-top: 1px solid #f1f5f9;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }

        .footer-text {
            font-size: 7px; font-weight: 700;
            color: #cbd5e1;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            line-height: 1.6;
        }

        .footer-logo {
            width: 40px; height: 40px;
            background: #f8fafc;
            border-radius: 10px;
            display: flex; align-items: center; justify-content: center;
            font-size: 6.5px; font-weight: 800;
            color: #94a3b8;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            padding: 4px;
        }

        @media print {
            html, body { width: 210mm; }
            .page { page-break-inside: avoid; }
        }
    </style>
</head>
<body>
<div class="page">

    <!-- SIDEBAR -->
    <div class="sidebar">
        <div class="avatar">M</div>

        <!-- Contact -->
        <div>
            <div class="section-label">Contact</div>
            <div class="contact-item">
                <div class="contact-icon">📞</div>
                +221 75 446 90 97
            </div>
            <div class="contact-item">
                <div class="contact-icon">✉</div>
                makhtar2gsm@gmail.com
            </div>
            <div class="contact-item">
                <div class="contact-icon">📍</div>
                Thiès · Touba · Dakar
            </div>
            <div class="contact-item">
                <div class="contact-icon">🌐</div>
                almuxtaardev.vercel.app
            </div>
        </div>

        <!-- Skills -->
        <div>
            <div class="section-label">Expertise</div>

            <div class="skill-group-label">Développement</div>
            <div class="skill-pills">
                <span class="pill">Java (POO)</span>
                <span class="pill">Python</span>
                <span class="pill">FastAPI</span>
                <span class="pill">Next.js</span>
                <span class="pill">React</span>
                <span class="pill">Angular</span>
                <span class="pill">Node.js</span>
            </div>

            <div class="skill-group-label">Réseaux & Sécurité</div>
            <div class="skill-pills">
                <span class="pill">Cisco CCNA</span>
                <span class="pill">Routage</span>
                <span class="pill">Cybersécurité</span>
            </div>

            <div class="skill-group-label">IA & Automatisation</div>
            <div class="skill-pills">
                <span class="pill">n8n</span>
                <span class="pill">Prompt Eng.</span>
                <span class="pill">CI/CD</span>
                <span class="pill">Git/GitHub</span>
            </div>

            <div class="skill-group-label">Bases de Données</div>
            <div class="skill-pills">
                <span class="pill">MySQL</span>
                <span class="pill">PostgreSQL</span>
                <span class="pill">Supabase</span>
            </div>

            <div class="skill-group-label">Design</div>
            <div class="skill-pills">
                <span class="pill">Figma</span>
                <span class="pill">Photoshop</span>
                <span class="pill">Illustrator</span>
                <span class="pill">Blender</span>
            </div>
        </div>

        <!-- Langues -->
        <div style="margin-top: auto;">
            <div class="section-label">Langues</div>
            <div class="lang-row"><span>Français</span><span class="lang-level">Courant</span></div>
            <div class="lang-row"><span>Anglais</span><span style="color:#94a3b8">Technique</span></div>
            <div class="lang-row"><span>Wolof</span><span class="lang-level">Maternel</span></div>
        </div>
    </div>

    <!-- MAIN -->
    <div class="main">
        <!-- Header -->
        <div>
            <div class="name">Makhtar <span>Wade</span></div>
            <div class="role">Développeur Full-Stack &amp; Designer UI/UX</div>
            <div class="bio">
                Étudiant entrepreneur et fondateur de la startup JULO. Spécialisé dans les architectures
                distribuées et l'automatisation. Profil hybride alliant rigueur technique, maîtrise des
                infrastructures réseaux (CCNA) et expertise en design UI/UX.
            </div>
        </div>

        <!-- Expériences -->
        <div>
            <div class="section-title">Expériences Professionnelles</div>

            <div class="exp-item">
                <div class="exp-dot"></div>
                <div class="exp-header">
                    <div class="exp-title">Fondateur &amp; Lead Designer</div>
                    <div class="exp-date">2023 – Présent</div>
                </div>
                <div class="exp-company">JULO Startup</div>
                <div class="exp-desc">Gestion technique de projets digitaux et création d'identités visuelles institutionnelles.</div>
            </div>

            <div class="exp-item">
                <div class="exp-dot"></div>
                <div class="exp-header">
                    <div class="exp-title">Prestataire Design Graphique</div>
                    <div class="exp-date">2024 – Présent</div>
                </div>
                <div class="exp-company">UCAK Touba</div>
                <div class="exp-desc">Conception de supports de communication visuelle institutionnels (Freelance).</div>
            </div>

            <div class="exp-item">
                <div class="exp-dot"></div>
                <div class="exp-header">
                    <div class="exp-title">Stagiaire Développeur</div>
                    <div class="exp-date">Sept. – Nov. 2025</div>
                </div>
                <div class="exp-company">CRI — École Polytechnique de Thiès</div>
                <div class="exp-desc">Maintenance infrastructurelle et support au développement d'applications internes.</div>
            </div>
        </div>

        <!-- Formation & Certifications -->
        <div class="two-col">
            <div>
                <div class="section-title">Formation</div>
                <div class="edu-item">
                    <div class="edu-title">Licence 3 Informatique (DAR)</div>
                    <div class="edu-sub">UCAK | 2023 – Présent</div>
                </div>
                <div class="edu-item">
                    <div class="edu-title">Baccalauréat Scientifique (S2)</div>
                    <div class="edu-sub">Lycée Malick SY – Thiès | 2022</div>
                </div>
            </div>
            <div>
                <div class="section-title">Certifications</div>
                <div class="cert-item"><div class="cert-dot"></div>Cisco CCNA (2025)</div>
                <div class="cert-item"><div class="cert-dot"></div>FORCEN Marketing Digital (2025)</div>
                <div class="cert-item"><div class="cert-dot"></div>MIT &amp; Facebook Engineering (2021)</div>
            </div>
        </div>

        <!-- Plateformes -->
        <div>
            <div class="section-title">Plateformes Réalisées</div>
            <div class="projects-text">${projectNames}</div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <div class="footer-text">
                Généré via le portfolio de Makhtar Wade<br/>
                © 2026 Tous droits réservés
            </div>
            <div class="footer-logo">almuxtaardev.vercel.app</div>
        </div>
    </div>

</div>
</body>
</html>`
}

export async function GET() {
    try {
        const projects = await getProjects()
        const projectNames = projects.length > 0
            ? projects.map(p => p.name).join(' · ')
            : "Sherifa Parfumerie · Vote Numérique UCAK · Qurratul Ayni · Babos · AgriChampion · Faaris Signature · PARAR · Gestion Kurel · GymScore"

        const html = buildCVHtml(projectNames)

        return new NextResponse(html, {
            status: 200,
            headers: {
                'Content-Type': 'text/html; charset=utf-8',
                // Forces browser to download as file instead of opening
                'Content-Disposition': 'attachment; filename="Makhtar_Wade_CV.html"',
            },
        })
    } catch (err) {
        console.error('CV generation error:', err)
        return new NextResponse('Erreur lors de la génération du CV', { status: 500 })
    }
}
