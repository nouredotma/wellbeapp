import { ArrowLeft, Bookmark, Facebook, Instagram, Twitter } from "lucide-react"
import { Link } from "react-router-dom"
import Layout from "../components/Layout/Layout"

// In a real application, you would fetch this data from an API or database
// This is a static example for article ID 3
const article = {
  id: 3,
  title: "Les bienfaits du hammam traditionnel marocain",
  excerpt: "Plongez dans l'univers du rituel ancestral du hammam et ses vertus pour le corps et l'esprit.",
  image: "https://img.freepik.com/photos-gratuite/femme-recevant-massage-dos-pierres-chaudes_1150-3.jpg",
  category: "Bien-être",
  author: "",
  authorImage: "/placeholder.svg?height=80&width=80",
  date: "",
  readTime: "",
  content: [
    {
      type: "paragraph",
      content:
        "Le hammam, bain de vapeur traditionnel marocain, est bien plus qu'un simple lieu de détente. Véritable institution culturelle et sociale, il représente un rituel de purification ancestral qui perdure depuis des siècles. Découvrez les multiples bienfaits de cette pratique emblématique du patrimoine marocain.",
    },
    {
      type: "heading",
      content: "Histoire et tradition du hammam marocain",
    },
    {
      type: "paragraph",
      content:
        "Le hammam trouve ses origines dans les thermes romains, mais c'est sous l'influence de la civilisation arabo-musulmane qu'il s'est véritablement développé au Maroc. Traditionnellement situé à proximité des mosquées pour faciliter les ablutions, le hammam est devenu un lieu central dans la vie sociale marocaine.",
    },
    {
      type: "paragraph",
      content:
        "Autrefois, chaque quartier possédait son propre hammam, où les habitants se retrouvaient régulièrement. Pour les femmes en particulier, c'était un espace de liberté et de socialisation, où elles pouvaient échanger, partager des conseils de beauté et même parfois organiser des cérémonies pré-nuptiales.",
    },
    {
      type: "image",
      url: "https://img.freepik.com/photos-gratuite/interieur-hammam-marocain-traditionnel_1150-17844.jpg",
      alt: "Intérieur d'un hammam traditionnel marocain",
      caption: "L'architecture typique d'un hammam traditionnel avec ses voûtes et ses alcôves",
    },
    {
      type: "heading",
      content: "Le déroulement d'une séance de hammam",
    },
    {
      type: "paragraph",
      content:
        "Une séance de hammam traditionnelle suit un rituel bien précis. Elle commence par une acclimatation dans la première salle tiède, permettant au corps de s'habituer progressivement à la chaleur. Puis vient le passage dans la salle chaude, où la transpiration est abondante, favorisant l'élimination des toxines.",
    },
    {
      type: "paragraph",
      content:
        "L'étape emblématique du hammam est le gommage au savon noir (saboun beldi) et au gant de kessa. Ce savon, fabriqué à base d'huile d'olive et d'olives noires macérées, est appliqué sur tout le corps. Après quelques minutes, un gommage vigoureux avec le gant de kessa permet d'éliminer toutes les cellules mortes et les impuretés.",
    },
    {
      type: "paragraph",
      content:
        "La séance se poursuit souvent par l'application d'un masque au ghassoul, une argile naturelle des montagnes de l'Atlas, riche en minéraux. Elle se termine par un rinçage à l'eau fraîche et un moment de repos, parfois accompagné d'un thé à la menthe pour se réhydrater.",
    },
    {
      type: "image",
      url: "https://img.freepik.com/photos-gratuite/savon-noir-marocain-traditionnel-gant-kessa_1150-17843.jpg",
      alt: "Savon noir et gant de kessa",
      caption: "Le savon noir et le gant de kessa, indispensables au rituel du hammam",
    },
    {
      type: "heading",
      content: "Les bienfaits pour la peau",
    },
    {
      type: "paragraph",
      content:
        "Le hammam offre de nombreux bienfaits pour la peau. La chaleur et la vapeur ouvrent les pores, facilitant l'élimination des impuretés en profondeur. Le gommage au savon noir et au gant de kessa permet une exfoliation complète, laissant la peau incroyablement douce et lisse.",
    },
    {
      type: "paragraph",
      content:
        "Le ghassoul, quant à lui, purifie la peau tout en lui apportant des minéraux essentiels. Riche en silice, magnésium et potassium, cette argile absorbe l'excès de sébum, resserre les pores et apaise les irritations. Elle est particulièrement bénéfique pour les peaux grasses ou à tendance acnéique.",
    },
    {
      type: "paragraph",
      content:
        "Régulièrement pratiqué, le hammam améliore visiblement la texture et l'éclat de la peau. Il aide également à prévenir certains problèmes cutanés comme les points noirs, l'acné ou les poils incarnés, grâce à son action purifiante en profondeur.",
    },
    {
      type: "heading",
      content: "Les vertus thérapeutiques",
    },
    {
      type: "paragraph",
      content:
        "Au-delà de ses bienfaits esthétiques, le hammam possède de véritables vertus thérapeutiques. La chaleur humide dilate les vaisseaux sanguins, améliorant ainsi la circulation sanguine et lymphatique. Cette action favorise l'oxygénation des tissus et l'élimination des toxines.",
    },
    {
      type: "paragraph",
      content:
        "La transpiration abondante provoquée par la chaleur permet une détoxification naturelle de l'organisme. Elle aide à éliminer les déchets métaboliques et certains métaux lourds accumulés dans le corps. Cette purification interne se traduit souvent par une sensation de légèreté et de bien-être après la séance.",
    },
    {
      type: "paragraph",
      content:
        "Le hammam est également reconnu pour ses effets bénéfiques sur le système respiratoire. La vapeur chaude et humide dégage les voies respiratoires, soulage les congestions nasales et bronchiques, et peut apaiser certains symptômes d'asthme ou de bronchite chronique.",
    },
    {
      type: "image",
      url: "https://img.freepik.com/photos-gratuite/femme-relaxante-hammam_1150-17845.jpg",
      alt: "Relaxation au hammam",
      caption: "Le hammam offre un moment de détente profonde pour le corps et l'esprit",
    },
    {
      type: "heading",
      content: "Bienfaits psychologiques et relaxation",
    },
    {
      type: "paragraph",
      content:
        "Le hammam n'est pas seulement bénéfique pour le corps, il l'est aussi pour l'esprit. La chaleur enveloppante procure une détente musculaire profonde, soulageant les tensions et les douleurs. Cette relaxation physique s'accompagne naturellement d'une détente mentale.",
    },
    {
      type: "paragraph",
      content:
        "Le rituel du hammam invite à ralentir, à se reconnecter à son corps et à ses sensations. C'est un moment privilégié pour se déconnecter du stress quotidien et pratiquer une forme de méditation active. La succession des différentes étapes (chaleur, gommage, repos) crée un voyage sensoriel apaisant.",
    },
    {
      type: "paragraph",
      content:
        "Dans la culture marocaine, le hammam est aussi un lieu de partage et de convivialité. Cette dimension sociale contribue au bien-être psychologique, en renforçant les liens communautaires et en offrant un espace d'échange et de soutien mutuel.",
    },
    {
      type: "heading",
      content: "Précautions et contre-indications",
    },
    {
      type: "paragraph",
      content:
        "Malgré ses nombreux bienfaits, le hammam ne convient pas à tout le monde. Il est déconseillé aux personnes souffrant d'hypertension artérielle, de problèmes cardiaques, de varices importantes ou d'infections cutanées contagieuses. Les femmes enceintes doivent également être prudentes et consulter leur médecin avant de s'y rendre.",
    },
    {
      type: "paragraph",
      content:
        "La chaleur intense peut provoquer des malaises chez les personnes sensibles. Il est donc recommandé de s'hydrater abondamment avant et après la séance, et de ne pas rester trop longtemps dans la salle chaude, surtout lors des premières visites.",
    },
    {
      type: "conclusion",
      content:
        "Le hammam traditionnel marocain est bien plus qu'un simple bain de vapeur : c'est un rituel complet de bien-être qui purifie le corps, apaise l'esprit et nourrit la peau. En combinant les bienfaits de la chaleur, des produits naturels comme le savon noir et le ghassoul, et l'expérience sociale unique qu'il procure, le hammam représente un trésor du patrimoine culturel marocain qui continue de séduire au-delà des frontières. Que ce soit pour ses vertus thérapeutiques, ses bienfaits esthétiques ou simplement pour vivre un moment de détente authentique, le hammam mérite d'être découvert et apprécié dans le respect de ses traditions ancestrales.",
    },
  ],
  relatedArticles: [
    {
      id: 2,
      title: "Comment prendre soin de sa peau pendant le Ramadan",
      image: "https://img.freepik.com/photos-gratuite/femme-recevant-massage-facial_23-2148857049.jpg",
      category: "Soins",
    },
    {
      id: 5,
      title: "Les huiles essentielles pour le bien-être au quotidien",
      image:
        "https://img.freepik.com/photos-gratuite/huile-essentielle-lavande-fleurs-fraiche-table-bois_1150-17715.jpg",
      category: "Bien-être",
    },
    {
      id: 4,
      title: "5 astuces pour des ongles en bonne santé",
      image: "https://img.freepik.com/photos-gratuite/gros-plan-mains-femme-manucure-francaise_186202-2592.jpg",
      category: "Beauté",
    },
  ],
}

const Article3 = () => {
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

export default Article3

