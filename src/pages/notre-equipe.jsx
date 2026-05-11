"use client"

import Layout from "../components/Layout/Layout"
import { ArrowLeft, Linkedin } from "lucide-react"
import { Link } from "react-router-dom"

const TeamMember = ({ name, role, image, bio, linkedin }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image || "/placeholder.svg?height=400&width=300"}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-[#002366] p-2 rounded-full hover:bg-[#001845] transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
        <p className="text-[#002366] font-medium mb-3">{role}</p>
        <p className="text-gray-600 text-sm mb-4">{bio}</p>
      </div>
    </div>
  )
}

const NotreEquipe = () => {
  const teamMembers = [
    {
      name: "Mohammed Alami",
      role: "Fondateur & CEO",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Entrepreneur passionné avec plus de 10 ans d'expérience dans le digital et la tech.",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Leila Benkirane",
      role: "Directrice Marketing",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
      bio: "Experte en marketing digital avec une passion pour la création de stratégies innovantes.",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Karim Tazi",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      bio: "Ingénieur logiciel avec une expertise en développement web et mobile, passionné par les nouvelles technologies.",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Nadia Berrada",
      role: "Responsable des Opérations",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      bio: "Spécialiste en gestion des opérations avec une forte expérience dans le secteur de la beauté.",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Youssef Mansouri",
      role: "Lead Designer",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Designer UI/UX créatif avec un œil pour les détails et une passion pour l'expérience utilisateur.",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Amina Chaoui",
      role: "Customer Success Manager",
      image:
        "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Passionnée par la satisfaction client et l'amélioration continue des services.",
      linkedin: "https://linkedin.com",
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
            <h1 className="text-3xl md:text-4xl font-bold text-[#002366] mb-4">Notre Équipe</h1>
            <div className="h-1 w-20 bg-[#002366]/30 rounded-full"></div>
          </div>

          {/* Team Intro */}
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-12 text-center">
            <h2 className="text-2xl font-bold text-[#002366] mb-4">Une équipe passionnée</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Chez WELLBE, nous sommes une équipe diversifiée et passionnée, unis par notre mission de transformer le
              secteur de la beauté et du bien-être au Maroc. Découvrez les personnes qui font de WELLBE ce qu'il est
              aujourd'hui.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
                linkedin={member.linkedin}
              />
            ))}
          </div>

          {/* Join Us CTA */}
          <div className="bg-gradient-to-r from-[#001233] to-[#002366] rounded-xl overflow-hidden">
            <div className="p-8 md:p-12 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Rejoignez notre équipe</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Vous êtes passionné par la technologie et l'innovation ? Vous souhaitez contribuer à la transformation
                digitale du secteur de la beauté et du bien-être au Maroc ? Rejoignez-nous !
              </p>
              <Link
                to="/carriere"
                className="inline-flex items-center bg-white text-[#002366] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Voir nos offres d'emploi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotreEquipe

