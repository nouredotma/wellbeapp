"use client"

import Layout from "../components/Layout/Layout"
import { ArrowLeft, ArrowRight, Briefcase, MapPin, Clock } from "lucide-react"
import { Link } from "react-router-dom"

const JobCard = ({ title, location, type, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 border border-gray-100">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
        <div className="flex items-center">
          <MapPin className="h-4 w-4 mr-1 text-[#002366]" />
          {location}
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1 text-[#002366]" />
          {type}
        </div>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to="#"
        className="inline-flex items-center text-[#002366] font-medium hover:text-[#001a4d] transition-colors group"
      >
        Voir l'offre
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  )
}

const Carriere = () => {
  const jobs = [
    {
      title: "Développeur Full Stack",
      location: "Casablanca, Maroc",
      type: "Temps plein",
      description:
        "Nous recherchons un développeur Full Stack expérimenté pour rejoindre notre équipe technique et contribuer au développement de notre plateforme.",
    },
    {
      title: "Responsable Marketing Digital",
      location: "Casablanca, Maroc",
      type: "Temps plein",
      description:
        "Vous serez en charge de la stratégie marketing digital de WELLBE, incluant les réseaux sociaux, le SEO et les campagnes publicitaires.",
    },
    {
      title: "Customer Success Manager",
      location: "Casablanca, Maroc",
      type: "Temps plein",
      description:
        "Votre mission sera d'accompagner nos clients professionnels dans l'utilisation de notre plateforme et de maximiser leur satisfaction.",
    },
    {
      title: "UI/UX Designer",
      location: "Casablanca, Maroc",
      type: "Temps plein",
      description:
        "Nous recherchons un designer talentueux pour créer des expériences utilisateur exceptionnelles sur notre plateforme web et mobile.",
    },
  ]

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10">
            <Link to="/" className="inline-flex items-center text-[#002366] hover:text-[#001845] mb-6 transition-all">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à l'accueil
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-[#002366] mb-4">Carrière</h1>
            <div className="h-1 w-20 bg-[#002366]/30 rounded-full"></div>
          </div>

          {/* Hero Section */}
          <div className="bg-gradient-to-r from-[#001233] to-[#002366] rounded-xl overflow-hidden mb-12">
            <div className="p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Rejoignez l'aventure WELLBE</h2>
              <p className="text-lg mb-6 max-w-2xl">
                Nous sommes une équipe passionnée qui révolutionne le secteur de la beauté et du bien-être au Maroc.
                Rejoignez-nous pour participer à cette transformation digitale !
              </p>
              <a
                href="#open-positions"
                className="inline-flex items-center bg-white text-[#002366] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Voir nos offres
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Why Join Us */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#002366] mb-6">Pourquoi nous rejoindre ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#002366]/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#002366]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Impact</h3>
                <p className="text-gray-600">
                  Contribuez à la transformation digitale du secteur de la beauté et du bien-être au Maroc.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#002366]/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#002366]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Croissance</h3>
                <p className="text-gray-600">
                  Évoluez dans un environnement stimulant avec de nombreuses opportunités d'apprentissage et de
                  développement.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#002366]/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#002366]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Équipe</h3>
                <p className="text-gray-600">Rejoignez une équipe dynamique, diverse et passionnée par l'innovation.</p>
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <div id="open-positions" className="mb-12">
            <div className="flex items-center mb-6">
              <Briefcase className="h-6 w-6 text-[#002366] mr-3" />
              <h2 className="text-2xl font-bold text-[#002366]">Postes ouverts</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jobs.map((job, index) => (
                <JobCard
                  key={index}
                  title={job.title}
                  location={job.location}
                  type={job.type}
                  description={job.description}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <h2 className="text-2xl font-bold text-[#002366] mb-4">
              Vous ne trouvez pas le poste qui vous correspond ?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Envoyez-nous votre CV et une lettre de motivation. Nous sommes toujours à la recherche de talents
              exceptionnels !
            </p>
            <a
              href="mailto:recrutement@wellbe.ma"
              className="inline-flex items-center bg-[#002366] text-white px-6 py-3 rounded-lg hover:bg-[#001845] transition-colors font-medium"
            >
              Candidature spontanée
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Carriere

