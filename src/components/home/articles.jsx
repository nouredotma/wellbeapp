import { ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"

export const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "Les tendances coiffure de l'été 2023",
      excerpt: "Découvrez les coupes et colorations qui feront sensation cette saison estivale au Maroc.",
      image: "https://img.freepik.com/photos-gratuite/femme-salon-coiffure_23-2147773294.jpg",
      category: "Coiffure",
      author: "Sarah Bennani",
      date: "15 juin 2023",
      readTime: "5 min",
    },
    {
      id: 2,
      title: "Comment prendre soin de sa peau pendant le Ramadan",
      excerpt: "Conseils et astuces pour maintenir une peau éclatante malgré les changements de rythme.",
      image: "https://img.freepik.com/photos-gratuite/femme-recevant-massage-facial_23-2148857049.jpg",
      category: "Soins",
      author: "Karim Alaoui",
      date: "10 mars 2023",
      readTime: "7 min",
    },
    {
      id: 3,
      title: "Les bienfaits du hammam traditionnel marocain",
      excerpt: "Plongez dans l'univers du rituel ancestral du hammam et ses vertus pour le corps et l'esprit.",
      image: "https://img.freepik.com/photos-gratuite/femme-recevant-massage-dos-pierres-chaudes_1150-3.jpg",
      category: "Bien-être",
      author: "Leila Tazi",
      date: "22 avril 2023",
      readTime: "6 min",
    },
  ]

  const getArticlePath = (id) => {
    return `/article${id}`
  }

  return (
    <section className="py-12 text-black overflow-hidden relative">
      <div className="container mx-auto">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#002366]/5 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#002366]/5 blur-3xl"></div>
        </div>

        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#002366] mb-3 relative inline-block">
            Le Blog
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#002366]/30 rounded-full"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base mt-3 px-4 md:px-0">
            Découvrez nos derniers articles sur les tendances beauté, les conseils d'experts et les astuces bien-être
            pour prendre soin de vous au quotidien.
          </p>
        </div>

        {/* Articles Grid - Improved responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full border border-gray-100"
            >
              {/* Article Image with increased height */}
              <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-[#002366] text-white text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Content - Increased padding */}
              <div className="p-5 md:p-6 flex-grow flex flex-col">
                <h3 className="text-base md:text-lg font-bold mb-3 text-gray-800 group-hover:text-[#002366] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow line-clamp-3 text-sm md:text-base">{article.excerpt}</p>
                <Link
                  to={getArticlePath(article.id)}
                  className="inline-flex items-center text-[#002366] text-sm font-medium hover:text-[#001a4d] transition-colors group mt-auto"
                >
                  <span className="flex items-center">
                    Lire l'article
                    <ExternalLink className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-y-[-2px]" />
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link - More accessible */}
        <div className="text-center mt-8 md:mt-10 px-4 md:px-0">
          <Link
            to="/articles"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-[#002366] text-white text-sm font-medium rounded-full hover:bg-[#001a4d] transition-colors group shadow-sm hover:shadow"
          >
            <span className="flex items-center">
              Voir tous les articles
              <ExternalLink className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-y-[-2px]" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

