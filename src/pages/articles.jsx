"use client"

import { ArrowLeft, ArrowRight, BookOpen, Filter, Search } from 'lucide-react'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Layout from "../components/Layout/Layout"

const ArticleCard = ({ article }) => {
  // Create the correct link path based on article ID
  const getArticlePath = (id) => {
    return `/article${id}`
  }

  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      {/* Article Image with overlay for better text visibility */}
      <div className="relative h-52 sm:h-56 md:h-64 overflow-hidden">
        <img
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[#002366] text-white text-xs font-semibold rounded-full uppercase tracking-wider">
            {article.category}
          </span>
        </div>
      </div>

      {/* Article Content */}
      <div className="p-5 sm:p-6 flex-grow flex flex-col">
        <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800 group-hover:text-[#002366] transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow line-clamp-3 text-sm sm:text-base">{article.excerpt}</p>

        
      </div>

      {/* Read More Link - Updated to use specific article paths */}
      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
        <Link
          to={getArticlePath(article.id)}
          className="inline-flex items-center text-[#002366] font-medium hover:text-[#001a4d] transition-colors group"
        >
          Lire l'article
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [filteredArticles, setFilteredArticles] = useState([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [sortOption, setSortOption] = useState("recent")

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
    {
      id: 4,
      title: "5 astuces pour des ongles en bonne santé",
      excerpt: "Découvrez comment prendre soin de vos ongles naturellement pour les garder forts et beaux.",
      image: "https://img.freepik.com/photos-gratuite/gros-plan-mains-femme-manucure-francaise_186202-2592.jpg",
      category: "Beauté",
      author: "Nadia Benkiran",
      date: "5 mai 2023",
      readTime: "4 min",
    },
    {
      id: 5,
      title: "Les huiles essentielles pour le bien-être au quotidien",
      excerpt: "Guide complet sur l'utilisation des huiles essentielles pour améliorer votre santé et votre bien-être.",
      image:
        "https://img.freepik.com/photos-gratuite/huile-essentielle-lavande-fleurs-fraiche-table-bois_1150-17715.jpg",
      category: "Bien-être",
      author: "Omar Benjelloun",
      date: "18 février 2023",
      readTime: "8 min",
    },
    {
      id: 6,
      title: "Comment choisir le bon barbier pour votre style",
      excerpt:
        "Les critères essentiels pour trouver le barbier qui saura mettre en valeur votre visage et votre personnalité.",
      image: "https://img.freepik.com/photos-gratuite/homme-obtenant-sa-barbe-coupee-salon-coiffure_1303-20946.jpg",
      category: "Barbier",
      author: "Youssef Mansouri",
      date: "30 mars 2023",
      readTime: "5 min",
    },
  ]

  const categories = [
    { name: "Tous", value: "all" },
    { name: "Coiffure", value: "coiffure" },
    { name: "Beauté", value: "beaute" },
    { name: "Bien-être", value: "bien-etre" },
    { name: "Soins", value: "soins" },
    { name: "Barbier", value: "barbier" },
  ]

  useEffect(() => {
    filterArticles()
  }, [searchTerm, activeCategory, sortOption]) // Updated dependency array to react to all filter changes

  const filterArticles = () => {
    let filtered = [...articles]

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.author.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter((article) => article.category.toLowerCase() === activeCategory.toLowerCase())
    }

    // Sort articles based on selected option
    switch (sortOption) {
      case 'recent':
        filtered.sort((a, b) => new Date(parseDate(b.date)) - new Date(parseDate(a.date)))
        break
      case 'popular':
        // In a real app, this would sort by view count or other popularity metric
        break
      case 'az':
        filtered.sort((a, b) => a.title.localeCompare(b.title))
        break
      default:
        break
    }

    setFilteredArticles(filtered)
  }

  // Helper function to parse French date format
  const parseDate = (dateStr) => {
    const months = {
      'janvier': 0, 'février': 1, 'mars': 2, 'avril': 3, 'mai': 4, 'juin': 5,
      'juillet': 6, 'août': 7, 'septembre': 8, 'octobre': 9, 'novembre': 10, 'décembre': 11
    }
    
    const [day, month, year] = dateStr.split(' ')
    return new Date(parseInt(year), months[month], parseInt(day))
  }

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setIsFilterOpen(false)
  }

  const handleSortChange = (e) => {
    setSortOption(e.target.value)
  }

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10">
            <Link to="/" className="inline-flex items-center text-[#002366] hover:text-[#001845] mb-6 transition-all">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à l'accueil
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-8 w-8 text-[#002366]" />
              <h1 className="text-3xl md:text-4xl font-bold text-[#002366]">Articles & Conseils</h1>
            </div>
            <div className="h-1 w-20 bg-[#002366]/30 rounded-full"></div>
          </div>

          {/* Hero Section */}
          <div className="bg-gradient-to-r from-[#002366] to-[#003399] rounded-xl overflow-hidden mb-10">
            <div className="p-8 md:p-12 text-white">
              <div className="max-w-3xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Découvrez nos conseils beauté et bien-être</h2>
                <p className="text-white/90 mb-6 text-lg">
                  Explorez nos articles rédigés par des experts pour vous aider à prendre soin de vous au quotidien.
                </p>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-xl shadow-sm p-4 md:p-8 mb-10">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Rechercher un article..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full border mb-0 border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#002366] focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Mobile Filter Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 rounded-lg text-gray-700 font-medium"
                >
                  <Filter className="h-5 w-5" />
                  Filtrer
                </button>
              </div>

              {/* Desktop Category Filters */}
              <div className="hidden md:flex flex-wrap gap-3">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => handleCategoryChange(category.value)}
                    className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category.value
                        ? "bg-[#002366] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Category Filters */}
            {isFilterOpen && (
              <div className="mt-4 md:hidden">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Catégories</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        onClick={() => handleCategoryChange(category.value)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                          activeCategory === category.value
                            ? "bg-[#002366] text-white"
                            : "bg-white border border-gray-300 text-gray-700"
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Results Count */}
          <div className="mb-6 flex justify-between items-center">
            <p className="text-gray-600">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""} trouvé
              {filteredArticles.length !== 1 ? "s" : ""}
              {activeCategory !== "all" && (
                <span>
                  {" "}
                  dans <span className="font-medium">{categories.find((c) => c.value === activeCategory)?.name}</span>
                </span>
              )}
              {searchTerm && (
                <span>
                  {" "}
                  pour "<span className="font-medium">{searchTerm}</span>"
                </span>
              )}
            </p>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Trier par:</span>
              <select 
                className="text-sm border border-gray-300 rounded-md px-2 py-1 bg-white"
                value={sortOption}
                onChange={handleSortChange}
              >
                <option value="recent">Plus récents</option>
                <option value="popular">Plus populaires</option>
                <option value="az">A-Z</option>
              </select>
            </div>
          </div>

          {/* Articles Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Aucun article trouvé</h3>
              <p className="text-gray-500 max-w-md mx-auto mb-6">
                Nous n'avons pas trouvé d'articles correspondant à votre recherche. Essayez avec d'autres termes ou
                consultez toutes nos catégories.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setActiveCategory("all")
                  setSortOption("recent")
                }}
                className="px-4 py-2 bg-[#002366] text-white rounded-lg hover:bg-[#001845] transition-colors"
              >
                Voir tous les articles
              </button>
            </div>
          )}

          {/* Pagination */}
          {filteredArticles.length > 0 && (
            <div className="mt-12 flex justify-center">
              <div className="flex items-center space-x-2">
                <button className="w-9 h-9 rounded-md flex items-center justify-center bg-white border border-gray-300 text-gray-500 hover:bg-gray-50">
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button className="w-9 h-9 rounded-md flex items-center justify-center bg-[#002366] text-white">
                  1
                </button>
                <button className="w-9 h-9 rounded-md flex items-center justify-center bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                  2
                </button>
                <button className="w-9 h-9 rounded-md flex items-center justify-center bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                  3
                </button>
                <span className="px-2 text-gray-500">...</span>
                <button className="w-9 h-9 rounded-md flex items-center justify-center bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                  8
                </button>
                <button className="w-9 h-9 rounded-md flex items-center justify-center bg-white border border-gray-300 text-gray-500 hover:bg-gray-50">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Articles
