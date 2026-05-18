import React from "react";
import { Mail, Phone, MapPin, Link, Cloud, Brain, Code2, Database, Rocket, Award, BriefcaseBusiness, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PortfolioAbiboulayeSY() {
  const skills = [
    { title: "Data Science & IA", items: ["Machine Learning", "Scikit-learn", "LightGBM", "NLP", "IA Générative", "Forecasting", "Recommandation", "Séries temporelles"], icon: Brain },
    { title: "Data Engineering", items: ["Python", "SQL", "PySpark", "pandas", "Airflow", "BigQuery", "Parquet", "S3"], icon: Database },
    { title: "Cloud & MLOps", items: ["AWS ML Specialty", "GCP", "Vertex AI", "MLflow", "SageMaker", "Docker", "Terraform", "GitLab CI/CD"], icon: Cloud },
    { title: "IA & LLM", items: ["Transformers", "GPT/BERT", "RAG", "Information Retrieval", "Analyse de sentiment", "Prompt Engineering"], icon: Code2 },
  ];

  const projects = [
    {
      title: "churn-alert-mlops",
      context: "Projet Portfolio — MLOps end-to-end sur AWS",
      result: "Pipeline complet : scoring z-score SQL → LogisticRegression supervisée, MLflow Model Registry, MWAA (Airflow), SageMaker Batch Transform, Terraform.",
      stack: "Python · MLflow · SageMaker · Airflow · Terraform · GitLab CI/CD",
      github: "https://github.com/sy63-oss/churn-alert-mlops",
    },
    {
      title: "Pipeline de scoring churn B2B",
      context: "L’Oréal Paris — GCP Data Engineer & Data Scientist",
      result: "Scoring z-score pondéré (CA 50% + fréquence 30% + retard 20%) industrialisé via DAG Airflow quotidien — réduction de 8 % du taux d’attrition.",
      stack: "Python · BigQuery · Airflow · Vertex AI · GitLab CI/CD · GCP",
      github: null,
    },
    {
      title: "Moteur de recommandation",
      context: "L’Oréal Paris — Personnalisation & performance marketing",
      result: "+30 % de CTR via un moteur de recommandation par filtrage collaboratif.",
      stack: "Python · Recommandation · BigQuery · GCP",
      github: null,
    },
    {
      title: "Forecasting & séries temporelles",
      context: "Orange Business Services — Prévision d’activité réseau",
      result: "Amélioration de 85 % de la précision des prévisions avec modèles SARIMA — détection d’anomalies, anticipation de pics de charge.",
      stack: "Python · SARIMA · PySpark · SQL · GCP",
      github: null,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Portfolio Data & MLOps</p>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Abiboulaye SY</h1>
              <h2 className="mt-4 text-2xl font-semibold text-blue-100 md:text-3xl">ML Engineer — Data Science & MLOps</h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                3 ans d’expérience sur le cycle de vie complet des modèles ML en production : feature engineering, scoring, monitoring et ré-entraînement automatique. Certifié AWS ML Specialty. Expérimenté GCP (Vertex AI, BigQuery, Cloud Composer).
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
          <Card className="rounded-3xl shadow-sm"><CardContent className="p-6"><Brain className="mb-4 text-blue-700" /><h3 className="text-xl font-bold">Data Science & IA</h3><p className="mt-2 text-slate-600">ML supervisé, NLP, recommandation, forecasting et IA générative — orientés impact métier.</p></CardContent></Card>
          <Card className="rounded-3xl shadow-sm"><CardContent className="p-6"><Rocket className="mb-4 text-blue-700" /><h3 className="text-xl font-bold">MLOps</h3><p className="mt-2 text-slate-600">MLflow, SageMaker, Airflow, CI/CD, Docker, Terraform — mise en production et ré-entraînement automatique.</p></CardContent></Card>
          <Card className="rounded-3xl shadow-sm"><CardContent className="p-6"><BriefcaseBusiness className="mb-4 text-blue-700" /><h3 className="text-xl font-bold">Conseil & standards</h3><p className="mt-2 text-slate-600">Cadrage, standardisation des pratiques ML (pytest, pydantic, ruff), accompagnement des équipes Data.</p></CardContent></Card>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold">À propos</h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-700">
            J’interviens sur l’ensemble du cycle de vie des modèles ML en production : feature engineering, entraînement, versioning avec MLflow, serving (SageMaker / Vertex AI), orchestration Airflow et standardisation des pratiques MLOps. J’ai notamment fait évoluer un système rule-based SQL vers un modèle supervisé en production sur GCP, et j’ai transposé cette architecture sur AWS dans un projet portfolio open source.
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
                  <div className="mt-2 flex items-start justify-between gap-2">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="mt-1 shrink-0 text-slate-500 hover:text-slate-800">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
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
                <p><strong>AWS Certified Solutions Architect — Associate</strong></p>
                <p><strong>Deep Learning Specialization</strong> — Coursera</p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl bg-slate-950 text-white shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold">Ce que je recherche</h2>
              <p className="mt-5 leading-8 text-slate-200">
                Mission MLOps Engineer ou ML Engineer — idéalement sur des problématiques Supply Chain (prévision de demande, détection de ruptures, scoring fournisseurs) ou tout domaine nécessitant l'industrialisation de modèles ML en production sur AWS ou GCP.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['MLOps', 'AWS / GCP', 'Supply Chain', 'Français natif', 'Anglais professionnel', 'Esprit conseil'].map((item) => (
                  <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-100">{item}</span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-10 text-center text-slate-300">
        <p className="font-semibold">Abiboulaye SY — ML Engineer · Data Science & MLOps</p>
        <p className="mt-2 text-sm">MLflow · SageMaker · Airflow · Terraform · GCP / AWS</p>
      </footer>
    </main>
  );
}
