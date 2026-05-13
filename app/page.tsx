import React from "react";
import { Mail, Phone, MapPin, Link, Cloud, Brain, Code2, Database, Rocket, Award, BriefcaseBusiness } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PortfolioAbiboulayeSY() {
  const skills = [
    { title: "Data Science & IA", items: ["Machine Learning", "Deep Learning", "NLP", "IA Générative", "Forecasting", "Recommandation", "XGBoost", "Séries temporelles"], icon: Brain },
    { title: "Data Engineering", items: ["Python", "SQL", "PySpark", "Spark", "Airflow", "BigQuery"], icon: Database },
    { title: "Cloud & MLOps", items: ["AWS ML Specialty", "GCP", "Vertex AI", "Docker", "Kubernetes", "Terraform", "GitLab CI/CD", "Monitoring"], icon: Cloud },
    { title: "IA & LLM", items: ["Transformers", "GPT/BERT", "RAG", "Information Retrieval", "Analyse de sentiment", "Prompt Engineering"], icon: Code2 },
  ];

  const projects = [
    {
      title: "Prédiction de churn",
      context: "L’Oréal Paris — Consultant Data Scientist & GCP Data Engineer",
      result: "Réduction de 8 % du taux d’attrition grâce à un modèle XGBoost industrialisé.",
      stack: "Python · XGBoost · Vertex AI · BigQuery · GitLab CI/CD",
    },
    {
      title: "Moteur de recommandation",
      context: "L’Oréal Paris — Personnalisation & performance marketing",
      result: "+30 % de CTR via un moteur de recommandation par filtrage collaboratif.",
      stack: "Python · Recommandation · BigQuery · GCP",
    },
    {
      title: "Forecasting & séries temporelles",
      context: "Orange Business Services — Prévision d’activité",
      result: "Amélioration de 85 % de la précision des prévisions avec des modèles SARIMA.",
      stack: "Python · SARIMA · PySpark · SQL",
    },
    {
      title: "Pipelines RAG & NLP",
      context: "Projet IA — Recherche documentaire augmentée",
      result: "Expérimentation de pipelines RAG avec embeddings et modèles Transformers.",
      stack: "Hugging Face · Vector DB · Python · Prompt Engineering",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Portfolio Data & IA</p>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Abiboulaye SY</h1>
              <h2 className="mt-4 text-2xl font-semibold text-blue-100 md:text-3xl">Consultant Data Scientist & IA</h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                Plus de 3 ans d’expérience dans la conception, le déploiement et l’industrialisation de solutions Machine Learning, NLP et IA en environnement cloud GCP/AWS.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button className="rounded-2xl bg-blue-500 px-6 hover:bg-blue-600">Me contacter</Button>
                <Button variant="outline" className="rounded-2xl border-white/30 bg-white/10 px-6 text-white hover:bg-white/20">Télécharger le CV</Button>
              </div>
            </div>

            <Card className="rounded-3xl border-white/10 bg-white/10 text-white shadow-2xl backdrop-blur">
              <CardContent className="space-y-4 p-6">
                <div className="flex items-center gap-3"><MapPin size={18} /><span>Le Plessis-Trévise (94)</span></div>
                <div className="flex items-center gap-3"><Phone size={18} /><span>06 24 56 29 91</span></div>
                <div className="flex items-center gap-3"><Mail size={18} /><span>abiboulaye.sy.pro@gmail.com</span></div>
                <div className="flex items-center gap-3"><Link size={18} /><span>linkedin.com/in/abiboulaye-sy</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="rounded-3xl shadow-sm"><CardContent className="p-6"><Brain className="mb-4 text-blue-700" /><h3 className="text-xl font-bold">IA appliquée</h3><p className="mt-2 text-slate-600">ML, NLP, recommandation, IA générative et forecasting orientés cas d’usage métier.</p></CardContent></Card>
          <Card className="rounded-3xl shadow-sm"><CardContent className="p-6"><Rocket className="mb-4 text-blue-700" /><h3 className="text-xl font-bold">MLOps</h3><p className="mt-2 text-slate-600">Industrialisation, monitoring, CI/CD, Vertex AI, Docker, Terraform et cloud scalable.</p></CardContent></Card>
          <Card className="rounded-3xl shadow-sm"><CardContent className="p-6"><BriefcaseBusiness className="mb-4 text-blue-700" /><h3 className="text-xl font-bold">Conseil métier</h3><p className="mt-2 text-slate-600">Cadrage, vulgarisation, restitution des résultats et accompagnement des équipes métier.</p></CardContent></Card>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold">À propos</h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-700">
            J’interviens de bout en bout sur les projets data : cadrage métier, préparation de données, modélisation, déploiement MLOps, monitoring et valorisation des résultats. Mon objectif est de construire des solutions IA concrètes, fiables et orientées performance business.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold">Compétences</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <Card key={skill.title} className="rounded-3xl shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3"><Icon className="text-blue-700" /><h3 className="text-xl font-bold">{skill.title}</h3></div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {skill.items.map((item) => <span key={item} className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800">{item}</span>)}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold">Expériences & projets clés</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.title} className="rounded-3xl shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <CardContent className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">{project.context}</p>
                  <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
                  <p className="mt-4 text-slate-700">{project.result}</p>
                  <p className="mt-5 rounded-2xl bg-slate-100 p-3 text-sm font-medium text-slate-700">{project.stack}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="rounded-3xl shadow-sm">
            <CardContent className="p-6">
              <Award className="mb-4 text-blue-700" />
              <h2 className="text-2xl font-bold">Formation & certifications</h2>
              <div className="mt-5 space-y-4 text-slate-700">
                <p><strong>ESIEA</strong> — Diplôme d’Ingénieur Data Science & IA, 2021</p>
                <p><strong>Classes Préparatoires MPSI/MP</strong> — Mathématiques & Physique, 2018</p>
                <p><strong>AWS Certified Machine Learning — Specialty</strong></p>
                <p><strong>Deep Learning Specialization</strong> — Coursera</p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl bg-slate-950 text-white shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold">Ce que je recherche</h2>
              <p className="mt-5 leading-8 text-slate-200">
                Rejoindre une équipe Data & IA innovante pour travailler sur des problématiques à fort impact métier autour du Machine Learning, NLP, IA Générative et industrialisation MLOps.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Français natif', 'Anglais professionnel', 'Vulgarisation', 'Esprit conseil', 'Problem-solving'].map((item) => (
                  <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-100">{item}</span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-10 text-center text-slate-300">
        <p className="font-semibold">Abiboulaye SY — Consultant Data Scientist & IA</p>
        <p className="mt-2 text-sm">Machine Learning · NLP · IA Générative · MLOps · GCP/AWS</p>
      </footer>
    </main>
  );
}
