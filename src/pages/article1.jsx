import { ArrowLeft, Bookmark, Facebook, Instagram, Twitter } from "lucide-react"
import { Link } from "react-router-dom"
import Layout from "../components/Layout/Layout"

// In a real application, you would fetch this data from an API or database
// This is a static example for article ID 1
const article = {
  id: 1,
  title: "Les tendances coiffure de l'été 2023",
  excerpt: "Découvrez les coupes et colorations qui feront sensation cette saison estivale au Maroc.",
  image: "https://img.freepik.com/photos-gratuite/femme-salon-coiffure_23-2147773294.jpg",
  category: "Coiffure",
  author: "Sarah Bennani",
  authorImage: "/placeholder.svg?height=80&width=80",
  date: "15 juin 2023",
  readTime: "5 min",
  content: [
    {
      type: "paragraph",
      content:
        "L'été 2023 au Maroc s'annonce riche en nouveautés capillaires. Entre tradition et modernité, les tendances coiffure de cette saison promettent de sublimer toutes les femmes, qu'elles préfèrent les coupes courtes audacieuses ou les longues chevelures romantiques.",
    },
    {
      type: "heading",
      content: "Les coupes phares de la saison",
    },
    {
      type: "paragraph",
      content:
        "Le carré dynamique reste la coupe star de l'été 2023. Porté légèrement plus long que les saisons précédentes, il se décline en plusieurs versions : carré plongeant, carré flou ou encore carré effilé. Cette coupe polyvalente s'adapte à toutes les textures de cheveux et convient particulièrement bien au climat chaud du Maroc.",
    },
    {
      type: "paragraph",
      content:
        "Pour celles qui préfèrent les cheveux courts, la coupe pixie revisitée fait son grand retour. Plus longue sur le dessus et très courte sur les côtés, elle apporte volume et fraîcheur pendant les journées chaudes de l'été.",
    },
    {
      type: "image",
      url: "https://img.freepik.com/photos-gratuite/femme-coiffeur-faisant-coiffure_1157-27125.jpg",
      alt: "Coupe pixie moderne",
      caption: "La coupe pixie moderne, idéale pour l'été",
    },
    {
      type: "heading",
      content: "Les colorations tendance",
    },
    {
      type: "paragraph",
      content:
        "Côté couleur, le « honey brown » s'impose comme LA coloration de l'été 2023. Ce brun miellé, à mi-chemin entre le blond doré et le châtain clair, apporte luminosité et éclat au visage. Particulièrement flatteur pour les peaux méditerranéennes, il sublime le teint hâlé des journées ensoleillées.",
    },
    {
      type: "paragraph",
      content:
        "Le balayage naturel continue également sa progression. Cette technique de coloration qui imite l'effet du soleil sur les cheveux offre un résultat très naturel et nécessite peu d'entretien – un avantage considérable pendant la période estivale.",
    },
    {
      type: "paragraph",
      content:
        "Pour les plus audacieuses, les mèches « face framing » colorées (encadrant le visage) permettent d'apporter une touche d'originalité sans transformer radicalement sa chevelure.",
    },
    {
      type: "heading",
      content: "Les coiffures qui résistent à la chaleur",
    },
    {
      type: "paragraph",
      content:
        "Avec les températures élevées de l'été marocain, les coiffures protectrices sont particulièrement recherchées. Les tresses plaquées, inspirées des traditions africaines mais modernisées, connaissent un succès grandissant. Elles permettent de protéger les cheveux du soleil tout en restant élégantes.",
    },
    {
      type: "paragraph",
      content:
        "Le chignon haut et flou, agrémenté de quelques mèches libres, s'impose comme la coiffure idéale pour les soirées d'été. À la fois sophistiqué et décontracté, il dégage la nuque et met en valeur le visage.",
    },
    {
      type: "image",
      url: "",
      alt: "Tresses protectrices modernes",
      caption: "Les tresses protectrices, tendance et pratiques pour l'été",
    },
    {
      type: "heading",
      content: "Les accessoires incontournables",
    },
    {
      type: "paragraph",
      content:
        "Les accessoires pour cheveux font leur grand retour cet été. Les foulards colorés, portés en bandeau ou enroulés autour d'un chignon, ajoutent une touche bohème à n'importe quelle tenue. Les pinces XXL ornées de perles ou de coquillages permettent de relever élégamment les cheveux tout en apportant une note estivale.",
    },
    {
      type: "paragraph",
      content:
        "Les bijoux de tête inspirés des traditions marocaines connaissent également un regain d'intérêt. Revisités dans des versions plus contemporaines, ils subliment aussi bien les coiffures élaborées que les simples queues de cheval.",
    },
    {
      type: "heading",
      content: "Conseils d'entretien pour l'été",
    },
    {
      type: "paragraph",
      content:
        "Pour garder des cheveux en bonne santé malgré le soleil, le sel et le chlore, quelques précautions s'imposent. L'utilisation d'un spray protecteur UV avant chaque exposition au soleil est essentielle. Les huiles naturelles comme l'huile d'argan, trésor marocain, peuvent être appliquées en masque hebdomadaire pour nourrir intensément les cheveux déshydratés.",
    },
    {
      type: "paragraph",
      content:
        "Enfin, n'oubliez pas de faire des retouches régulières chez votre coiffeur pour maintenir la forme de votre coupe tout au long de l'été. Un rafraîchissement toutes les 6 à 8 semaines est idéal pour conserver une chevelure impeccable.",
    },
    {
      type: "conclusion",
      content:
        "Que vous optiez pour une coupe audacieuse, une coloration lumineuse ou des coiffures protectrices, l'été 2023 vous offre de nombreuses possibilités pour exprimer votre style tout en prenant soin de vos cheveux. N'hésitez pas à consulter un professionnel pour trouver la tendance qui s'adaptera le mieux à votre visage et à votre mode de vie.",
    },
  ],
  relatedArticles: [
    {
      id: 4,
      title: "5 astuces pour des ongles en bonne santé",
      image: "https://img.freepik.com/photos-gratuite/gros-plan-mains-femme-manucure-francaise_186202-2592.jpg",
      category: "Beauté",
    },
    {
      id: 2,
      title: "Comment prendre soin de sa peau pendant le Ramadan",
      image: "https://img.freepik.com/photos-gratuite/femme-recevant-massage-facial_23-2148857049.jpg",
      category: "Soins",
    },
    {
      id: 6,
      title: "Comment choisir le bon barbier pour votre style",
      image: "https://img.freepik.com/photos-gratuite/homme-obtenant-sa-barbe-coupee-salon-coiffure_1303-20946.jpg",
      category: "Barbier",
    },
  ],
}

const Article1 = () => {
  return (
    <Layout>
    <div className="bg-white min-h-screen">
      {/* Hero Section with Image */}
      <div className="relative h-[40vh] md:h-[60vh] w-full">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20">
          <div className="container mx-auto">
            <span className="inline-block px-3 py-1 bg-[#002366] text-white text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl mb-4">{article.title}</h1>
            <div className="flex flex-wrap items-center text-sm text-white/90 gap-6">
              
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <Link
            to="/articles"
            className="inline-flex items-center text-[#002366] hover:text-[#001845] mb-8 transition-all"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux articles
          </Link>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {article.content.map((section, index) => {
              if (section.type === "paragraph") {
                return (
                  <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                )
              } else if (section.type === "heading") {
                return (
                  <h2 key={index} className="text-2xl font-bold text-gray-800 mt-10 mb-6">
                    {section.content}
                  </h2>
                )
              } else if (section.type === "image") {
                return (
                  <figure key={index} className="my-8">
                    
                   
                  </figure>
                )
              } else if (section.type === "conclusion") {
                return (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#002366] mt-10 mb-6">
                    <p className="italic text-gray-700">{section.content}</p>
                  </div>
                )
              }
              return null
            })}
          </div>

          

          {/* Share Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <span className="text-gray-700 font-medium">Partager:</span>
            <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
              <Facebook className="h-5 w-5" />
            </button>
            <button className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors">
              <Twitter className="h-5 w-5" />
            </button>
            <button className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors">
              <Instagram className="h-5 w-5" />
            </button>
            <button className="ml-auto flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
              <Bookmark className="h-4 w-4" />
              <span>Sauvegarder</span>
            </button>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-10 border-t border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Articles similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {article.relatedArticles.map((relatedArticle) => (
                <Link to={`/articles/${relatedArticle.id}`} key={relatedArticle.id} className="group">
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <img
                      src={relatedArticle.image || "/placeholder.svg"}
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-[#002366] text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                        {relatedArticle.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-800 group-hover:text-[#002366] transition-colors">
                    {relatedArticle.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default Article1

