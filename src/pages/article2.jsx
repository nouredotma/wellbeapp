import { ArrowLeft, Bookmark, Facebook, Instagram, Twitter } from "lucide-react"
import { Link } from "react-router-dom"
import Layout from "../components/Layout/Layout"

// In a real application, you would fetch this data from an API or database
// This is a static example for article ID 2
const article = {
  id: 2,
  title: "Comment prendre soin de sa peau pendant le Ramadan",
  excerpt: "Conseils et astuces pour maintenir une peau éclatante malgré les changements de rythme.",
  image: "https://img.freepik.com/photos-gratuite/femme-recevant-massage-facial_23-2148857049.jpg",
  category: "Soins",
  author: "Karim Alaoui",
  authorImage: "/placeholder.svg?height=80&width=80",
  date: "10 mars 2023",
  readTime: "7 min",
  content: [
    {
      type: "paragraph",
      content:
        "Le mois sacré du Ramadan apporte de nombreux changements dans notre quotidien : jeûne, modification des horaires de sommeil, alimentation différente... Ces changements peuvent avoir un impact significatif sur notre peau. Voici comment adapter votre routine de soins pour maintenir une peau éclatante tout au long de ce mois béni.",
    },
    {
      type: "heading",
      content: "Les défis pour la peau pendant le Ramadan",
    },
    {
      type: "paragraph",
      content:
        "Pendant le Ramadan, notre corps fait face à plusieurs défis qui peuvent affecter la santé de notre peau. La déshydratation est le principal facteur à surveiller, car nous ne buvons pas d'eau pendant de longues heures. Cette déshydratation peut entraîner une peau terne, des ridules plus visibles et un teint irrégulier.",
    },
    {
      type: "paragraph",
      content:
        "Les changements dans les habitudes de sommeil peuvent également provoquer des cernes et des poches sous les yeux. De plus, les modifications alimentaires, notamment la consommation accrue de sucres et de graisses lors de l'iftar (rupture du jeûne), peuvent favoriser l'apparition d'imperfections.",
    },
    {
      type: "image",
      url: "https://img.freepik.com/photos-gratuite/femme-appliquant-creme-visage_23-2148857061.jpg",
      alt: "Hydratation de la peau",
      caption: "L'hydratation est essentielle pendant le Ramadan",
    },
    {
      type: "heading",
      content: "Hydratation: la clé d'une peau éclatante",
    },
    {
      type: "paragraph",
      content:
        "Même si vous ne pouvez pas boire d'eau pendant la journée, vous pouvez compenser en hydratant votre peau de l'extérieur. Optez pour des sérums et des crèmes hydratantes plus riches que d'habitude. Les produits contenant de l'acide hyaluronique, de la glycérine ou du beurre de karité sont particulièrement recommandés pendant cette période.",
    },
    {
      type: "paragraph",
      content:
        "N'oubliez pas d'hydrater votre peau matin et soir, en insistant particulièrement après le suhoor (repas avant l'aube) et après l'iftar. Vous pouvez également utiliser un brumisateur d'eau thermale plusieurs fois par jour pour rafraîchir votre peau sans rompre le jeûne.",
    },
    {
      type: "paragraph",
      content:
        "Les masques hydratants appliqués 2 à 3 fois par semaine peuvent également aider à maintenir un bon niveau d'hydratation cutanée. Privilégiez les masques en tissu ou en gel qui procurent une hydratation intense en peu de temps.",
    },
    {
      type: "heading",
      content: "Adapter sa routine de soins",
    },
    {
      type: "paragraph",
      content:
        "Pendant le Ramadan, simplifiez votre routine de soins pour vous concentrer sur l'essentiel. Le nettoyage reste primordial, mais optez pour des nettoyants doux, non moussants, qui n'assècheront pas davantage votre peau. Les eaux micellaires ou les laits démaquillants sont parfaits pour cette période.",
    },
    {
      type: "paragraph",
      content:
        "Le matin, après votre nettoyage, appliquez un sérum hydratant suivi d'une crème adaptée à votre type de peau. N'oubliez pas la protection solaire si vous sortez pendant la journée. Le soir, insistez sur la réhydratation avec des produits plus riches et nourrissants.",
    },
    {
      type: "image",
      url: "https://img.freepik.com/photos-gratuite/femme-appliquant-creme-visage_144627-12523.jpg",
      alt: "Routine de soins simplifiée",
      caption: "Une routine simplifiée mais efficace est recommandée pendant le Ramadan",
    },
    {
      type: "heading",
      content: "L'importance de l'alimentation",
    },
    {
      type: "paragraph",
      content:
        "Ce que vous mangez pendant le suhoor et l'iftar a un impact direct sur l'état de votre peau. Privilégiez les aliments riches en eau comme les concombres, les pastèques et les oranges pour compenser la déshydratation. Les fruits et légumes colorés, riches en antioxydants, aideront à lutter contre le stress oxydatif et à maintenir l'éclat de votre peau.",
    },
    {
      type: "paragraph",
      content:
        "Limitez la consommation d'aliments frits, sucrés et très salés qui peuvent provoquer inflammation et rétention d'eau. Optez plutôt pour des protéines maigres, des grains entiers et des bonnes graisses comme celles présentes dans l'avocat, les noix et l'huile d'olive.",
    },
    {
      type: "paragraph",
      content:
        "Entre l'iftar et le suhoor, essayez de boire au moins 2 litres d'eau pour compenser la déshydratation de la journée. Les tisanes et les infusions peuvent également contribuer à votre hydratation tout en apportant des bienfaits supplémentaires selon les plantes choisies.",
    },
    {
      type: "heading",
      content: "Gestion du stress et du sommeil",
    },
    {
      type: "paragraph",
      content:
        "Le stress et le manque de sommeil peuvent considérablement affecter l'état de votre peau. Pendant le Ramadan, essayez de maintenir un rythme de sommeil régulier malgré les changements d'horaires. Si possible, faites une sieste dans l'après-midi pour compenser les heures de sommeil perdues.",
    },
    {
      type: "paragraph",
      content:
        "Pratiquez des techniques de relaxation comme la méditation ou la respiration profonde pour gérer le stress. Ces moments de calme peuvent également être l'occasion de vous reconnecter spirituellement, en harmonie avec l'esprit du Ramadan.",
    },
    {
      type: "conclusion",
      content:
        "Prendre soin de sa peau pendant le Ramadan nécessite quelques ajustements, mais avec une routine adaptée et une attention particulière à l'hydratation, vous pouvez maintenir un teint éclatant tout au long de ce mois sacré. N'oubliez pas que la beauté extérieure reflète souvent notre bien-être intérieur, et que le Ramadan est aussi une période propice pour nourrir notre âme et notre esprit.",
    },
  ],
  relatedArticles: [
    {
      id: 1,
      title: "Les tendances coiffure de l'été 2023",
      image: "https://img.freepik.com/photos-gratuite/femme-salon-coiffure_23-2147773294.jpg",
      category: "Coiffure",
    },
    {
      id: 5,
      title: "Les huiles essentielles pour le bien-être au quotidien",
      image:
        "https://img.freepik.com/photos-gratuite/huile-essentielle-lavande-fleurs-fraiche-table-bois_1150-17715.jpg",
      category: "Bien-être",
    },
    {
      id: 3,
      title: "Les bienfaits du hammam traditionnel marocain",
      image: "https://img.freepik.com/photos-gratuite/femme-recevant-massage-dos-pierres-chaudes_1150-3.jpg",
      category: "Bien-être",
    },
  ],
}

const Article2 = () => {
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
                      <img
                        src={section.url || "/placeholder.svg"}
                        alt={section.alt}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                      {section.caption && (
                        <figcaption className="mt-2 text-center text-sm text-gray-500">{section.caption}</figcaption>
                      )}
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

export default Article2

