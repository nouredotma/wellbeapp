"use client"

import { ArrowLeft, ChevronDown, ChevronUp, Clock, FileText } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Layout from "../components/Layout/Layout"

const TableOfContents = ({ sections, activeSection, scrollToSection }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-5 sticky top-24">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Sommaire</h3>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className={`text-left w-full px-3 py-2 rounded-md transition-colors ${
                activeSection === section.id
                  ? "bg-[#002366]/10 text-[#002366] font-medium"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Section = ({ id, title, children }) => {
  return (
    <section id={id} className="scroll-mt-24 mb-10">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <span className="w-8 h-8 rounded-full bg-[#002366]/10 text-[#002366] flex items-center justify-center mr-3 text-sm font-bold">
          {id}
        </span>
        {title}
      </h2>
      <div className="prose prose-lg max-w-none text-gray-600">{children}</div>
    </section>
  )
}

const CGU = () => {
  const [activeSection, setActiveSection] = useState("1")
  const [isMobile, setIsMobile] = useState(false)
  const [showTableOfContents, setShowTableOfContents] = useState(false)

  const lastUpdated = new Date().toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const sections = [
    { id: "1", title: "IDENTIFICATION" },
    { id: "2", title: "OBJET" },
    { id: "3", title: "ACCEPTATION DES CONDITIONS" },
    { id: "4", title: "SERVICES PROPOSÉS" },
    { id: "5", title: "PAIEMENT DES SERVICES" },
    { id: "6", title: "INSCRIPTION ET COMPTE UTILISATEUR" },
    { id: "7", title: "OBLIGATIONS DES UTILISATEURS" },
    { id: "8", title: "CONDITIONS DE RÉSERVATION ET ANNULATION" },
    { id: "9", title: "RESPONSABILITÉS" },
    { id: "10", title: "PROCÉDURE DES AVIS" },
    { id: "11", title: "PROCÉDURE DE RÉFÉRENCEMENT DES PROFESSIONNELS" },
    { id: "12", title: "SIGNALEMENT" },
    { id: "13", title: "MODIFICATIONS" },
    { id: "14", title: "DONNÉES PERSONNELLES ET CONFIDENTIALITÉ" },
    { id: "15", title: "DROIT APPLICABLE ET LITIGES" },
    { id: "16", title: "CONTACT" },
  ]

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Check on initial load
    checkScreenSize()

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize)

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      // Find the current active section based on scroll position
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      })
      setActiveSection(sectionId)
      if (isMobile) {
        setShowTableOfContents(false)
      }
    }
  }

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <Link href="/" className="inline-flex items-center text-[#002366] hover:text-[#001845] mb-6 transition-all">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à l'accueil
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-8 w-8 text-[#002366]" />
            <h1 className="text-3xl md:text-4xl font-bold text-[#002366]">Conditions Générales d'Utilisation</h1>
          </div>
          <div className="h-1 w-20 bg-[#002366]/30 rounded-full"></div>
        </div>

        {/* Mobile Table of Contents Toggle */}
        {isMobile && (
          <div className="mb-6">
            <button
              onClick={() => setShowTableOfContents(!showTableOfContents)}
              className="w-full flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
            >
              <span className="font-medium text-gray-900">Sommaire</span>
              {showTableOfContents ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>

            {showTableOfContents && (
              <div className="mt-2 bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <TableOfContents sections={sections} activeSection={activeSection} scrollToSection={scrollToSection} />
              </div>
            )}
          </div>
        )}

        {/* Content with sidebar */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar for desktop */}
          {!isMobile && (
            <div className="md:w-1/4">
              <TableOfContents sections={sections} activeSection={activeSection} scrollToSection={scrollToSection} />
            </div>
          )}

          {/* Main content */}
          <div className="md:w-3/4">
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-10">
              {/* Last updated info */}
              <div className="flex items-center mb-8 text-sm text-gray-500 border-b border-gray-100 pb-4">
                <Clock className="h-4 w-4 mr-2" />
                <span>Dernière mise à jour : {lastUpdated}</span>
              </div>

              {/* Introduction */}
              <p className="mb-8">
                Bienvenue sur wellbe.ma, une plateforme dédiée à la gestion et à la réservation de services bien-être et
                beauté. En accédant ou en utilisant notre site et nos services, vous acceptez les présentes Conditions
                Générales d'Utilisation ("CGU"). Nous vous invitons à les lire attentivement.
              </p>

              {/* Section 1 */}
              <Section id="1" title="IDENTIFICATION"  >
                <p className="mb-4">
                  La société SRME SARL (ci-après « Wellbe »), SARL au capital de 10 000 dirhams, dont le siège est PLACE
                  LA LIBERTE ANGLE AV MY HASSAN ET AV MOHAMED V RES BERDAI, Marrakech, immatriculée sous le n°
                  003662218000071 (ICE) est le cocontractant de l'Utilisateur dans le cadre des présentes CGU.
                </p>
              </Section>

              {/* Section 2 */}
              <Section id="2" title="OBJET"  >
                <p className="mb-4">
                  Les présentes CGU définissent les conditions d'accès et d'utilisation de la plateforme Wellbe par les
                  utilisateurs, qu'ils soient clients ou prestataires de services. Le Service permet la mise en relation
                  entre des Prestataires proposant leurs services de beauté et les Utilisateurs souhaitant réserver une
                  prestation chez eux. Les Utilisateurs peuvent effectuer une réservation en ligne, pour leur compte ou
                  celui d'un proche bénéficiaire et dans certains cas, payer la prestation en ligne.
                </p>
              </Section>

              {/* Section 3 */}
              <Section id="3" title="ACCEPTATION DES CONDITIONS"  >
                <p className="mb-4">
                  L'utilisation de la plateforme implique l'acceptation sans réserve des présentes CGU. Elles doivent
                  être acceptées au moment de la création de compte. En cochant la case « J'ai pris connaissance et
                  accepte les CGU » (ou toute mention équivalente), l'Utilisateur accepte les CGU, garantit avoir
                  capacité juridique pour les accepter et s'engage à les respecter.
                </p>
                <p className="mb-4">
                  L'accès au service nécessite obligatoirement la création d'un compte utilisateur. Wellbe agit
                  uniquement en tant qu'intermédiaire de mise en relation entre les Utilisateurs et les Prestataires. À
                  ce titre, Wellbe n'est en aucun cas partie au contrat entre le Prestataire et l'Utilisateur. Wellbe
                  n'est pas responsable de la relation contractuelle entre l'Utilisateur et le Prestataire ni des
                  conséquences de celle-ci.
                </p>
                <p className="mb-4">
                  Les présentes CGU entrent en vigueur dès que l'Utilisateur a coché la case « J'ai pris connaissance et
                  accepte les CGU » (ou toute mention équivalente). Les CGU sont alors conclues pour une durée
                  indéterminée, soit toute la durée pendant laquelle l'Utilisateur dispose d'un compte.
                </p>
                <p className="mb-4">
                  L'Utilisateur peut supprimer son compte à n'importe quel moment en envoyant un email à Wellbe à
                  l'adresse suivante : contact@wellbe.ma.
                </p>
                <p className="mb-4">
                  Si un rendez-vous est réservé et n'a pas encore eu lieu au moment où l'Utilisateur supprime son
                  compte, alors le rendez-vous sera automatiquement annulé.
                </p>
              </Section>

              {/* Section 4 */}
              <Section id="4" title="SERVICES PROPOSÉS"  >
                <p className="mb-4">Wellbe permet aux utilisateurs :</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>De découvrir et réserver des prestations de bien-être et de beauté auprès de professionnels.</li>
                  <li>De gérer leurs rendez-vous en ligne.</li>
                  <li>D'accéder à des offres et promotions exclusives.</li>
                  <li>Aux prestataires, de gérer leur activité via un espace dédié.</li>
                </ul>

                <p className="mb-4">L'accès aux Services nécessite pour l'Utilisateur de :</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>cocher la case « J'ai pris connaissance et accepte les CGU » (ou toute mention équivalente)</li>
                  <li>créer un compte utilisateur</li>
                  <li>se connecter à son compte utilisateur à l'aide de ses identifiants de connexion.</li>
                </ul>

                <p className="mb-4">L'accès à la Plateforme permet uniquement de :</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    rechercher dans un moteur de recherche des professionnels de beauté par type de services et par zone
                    géographique
                  </li>
                  <li>consulter la liste des professionnels de beauté inscrits sur la Plateforme</li>
                  <li>
                    accéder à des fiches de présentation de chaque professionnel de beauté, pouvant comporter leurs
                    coordonnées, une description de leur établissement, la liste des photographies, les prestations
                    proposées et leur prix, des avis clients, les horaires d'ouverture et les disponibilités.
                  </li>
                </ul>

                <p className="mb-4">L'accès au Service permet en plus de :</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>accéder à son compte utilisateur pour voir la liste des rendez-vous réservés ou passés</li>
                  <li>
                    renseigner des Proches Bénéficiaires, à condition pour l'Utilisateur d'avoir obtenu l'autorisation
                    légale ou contractuelle nécessaire pour prendre des rendez-vous au nom de la personne indiquée, et
                    être en mesure de la fournir à Wellbe sur demande ;
                  </li>
                  <li>
                    prendre rendez-vous, pour son propre compte ou le compte d'un Proche Bénéficiaire chez un
                    professionnel de beauté et gérer ce rendez-vous (annulation ou modification)
                  </li>
                  <li>prépayer ce rendez-vous en ligne dans certains cas</li>
                  <li>déposer un avis sur ce professionnel de beauté après le rendez-vous.</li>
                </ul>
              </Section>

              {/* Section 5 */}
              <Section id="5" title="PAIEMENT DES SERVICES"  >
                <p className="mb-4">
                  Le Service n'est qu'un moyen de mise en relation entre les Utilisateurs et le Prestataire.
                </p>
                <p className="mb-4">
                  En conséquence, le prix du rendez-vous auprès du professionnel de la beauté est uniquement déterminé
                  par le Prestataire.
                </p>
                <p className="mb-4">
                  Cependant, le prix de ce rendez-vous peut être réglé de trois manières différentes :
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    directement chez le Prestataire le jour du rendez-vous en fonction des moyens de paiement
                    disponibles chez ce dernier ;
                  </li>
                  <li>
                    en débitant l'empreinte bancaire demandée par le Prestataire au moment de la validation du paiement
                    : le prix du rendez-vous sera débité uniquement à la fin du rendez-vous ou en cas d'annulation
                    tardive ou de rendez-vous non honoré ;
                  </li>
                  <li>
                    sur la Plateforme lors de la réservation en ligne si le prépaiement est possible, de manière totale
                    ou partielle. Dans ce cas le paiement est possible par carte bancaire, par ApplePay ou GooglePay.
                  </li>
                </ul>

                <p className="mb-4">
                  Dans tous les cas, le règlement se fait selon les conditions définies par le Prestataire au moment de
                  la validation du rendez-vous.
                </p>
                <p className="mb-4">
                  En contrepartie de l'utilisation du service de prépaiement en ligne et de la prise d'empreinte
                  bancaire, Wellbe pourra prélever à l'Utilisateur, selon le choix du Prestataire, des frais
                  supplémentaires de service (les « Frais de Service »).
                </p>

                <p className="mb-4">Ainsi, le prix payé par l'Utilisateur se décompose comme suit :</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Prix du rendez-vous ;</li>
                  <li>Frais de Service éventuels ;</li>
                  <li>Frais d'annulation tardive ou de non-venue éventuels.</li>
                </ul>

                <p className="mb-4">La facture sera disponible auprès du Prestataire.</p>
              </Section>

              {/* Section 6 */}
              <Section id="6" title="INSCRIPTION ET COMPTE UTILISATEUR"  >
                <p className="mb-4">
                  Pour accéder aux services, l'utilisateur doit créer un compte en fournissant des informations exactes
                  et à jour.
                </p>
                <p className="mb-4">
                  L'inscription au Service est réalisée directement par l'Utilisateur. Lors de la création de compte,
                  l'Utilisateur doit renseigner les informations suivantes :
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Numéro de téléphone portable ;</li>
                  <li>Prénom ;</li>
                  <li>Nom ;</li>
                  <li>Adresse email ;</li>
                  <li>Mot de passe.</li>
                </ul>

                <p className="mb-4">
                  L'Utilisateur certifie que les informations le concernant sont exactes et s'engage à les maintenir à
                  jour via son compte. Il valide les CGU.
                </p>
                <p className="mb-4">
                  Le compte ne peut être utilisé que par l'Utilisateur inscrit. L'accès au compte se fait par le biais
                  d'identifiants et mots de passe qui sont strictement personnels et confidentiels.
                </p>
                <p className="mb-4">L'Utilisateur s'engage à les garder confidentiels et à ne pas les divulguer.</p>
                <p className="mb-4">
                  Lors de la première utilisation, un code sera transmis à l'Utilisateur par le canal de voie de son
                  choix. Ce code permettra de valider la création du compte de l'Utilisateur.
                </p>
                <p className="mb-4">
                  En cas de perte ou de vol de l'identifiant ou mot de passe l'Utilisateur doit en avertir Wellbe sans
                  délais.
                </p>
              </Section>

              {/* Section 7 */}
              <Section id="7" title="OBLIGATIONS DES UTILISATEURS"  >
                <p className="mb-4">L'Utilisateur s'engage à ne pas :</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    utiliser le Service et la Plateforme à d'autres fins que celles précisées au sein des présentes CGU,
                    et en particulier à ne pas l'utiliser à des fins professionnelles ou commerciales ;
                  </li>
                  <li>
                    utiliser le Service ou la Plateforme en violation des lois et réglementations applicables, y
                    compris, mais sans s'y limiter, en violation des lois relatives à la protection des données
                    personnelles ;
                  </li>
                  <li>
                    utiliser son compte pour réserver pour une autre personne que lui-même ou un Proche Bénéficiaire ;
                  </li>
                  <li>
                    céder, à titre gratuit ou onéreux, un rendez-vous avec un professionnel de beauté réservé grâce au
                    Service proposé par Wellbe ;
                  </li>
                  <li>
                    utiliser le Service ou la Plateforme pour intentionnellement poster, transmettre, télécharger,
                    mettre en lien, envoyer ou stocker tout contenu (ce qui inclut dans le cadre de la publication d'un
                    avis concernant un Prestataire) illégal, raciste, haineux, abusif, diffamatoire, obscène ou
                    discriminatoire ou toute donnée en violation des lois et règlementations applicables au Service ou à
                    la Plateforme notamment celles relatives à la protection des données personnelles ;
                  </li>
                  <li>
                    renseigner comme Proche Bénéficiaire une personne pour laquelle, il ne détient pas d'autorisation
                    légale ou contractuelle ;
                  </li>
                  <li>utiliser le Service ou la Plateforme pour nuire ou porter préjudice aux Prestataires.</li>
                </ul>

                <h3 className="text-lg font-semibold mt-6 mb-3">OBLIGATIONS CONCERNANT LE RENDEZ-VOUS</h3>
                <p className="mb-4">
                  L'Utilisateur s'engage à honorer son engagement de se présenter au rendez-vous, et reconnaît que dans
                  le cas contraire, des frais d'annulation tardive pourront lui être facturés.
                </p>
                <p className="mb-4">
                  En cas de non-présence au rendez-vous d'un Proche Bénéficiaire, les frais d'annulation tardive seront
                  facturés à l'Utilisateur.
                </p>
                <p className="mb-4">
                  L'Utilisateur, ou son Proche Bénéficiaire s'engage à avoir un comportement respectueux et courtois
                  pendant le rendez-vous avec le Prestataire. Il s'engage à être présent en personne et ponctuel au
                  rendez-vous fixé avec le Prestataire.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-3">RESPECT DES DROITS DE PROPRIÉTÉ WELLBE</h3>
                <p className="mb-4">
                  Sauf mention contraire, les éléments accessibles sur la Plateforme tels que les bases de données, les
                  outils de gestion, les textes et plus généralement l'ensemble des informations mises à la disposition
                  de l'Utilisateur sont la propriété pleine, entière et exclusive de Wellbe.
                </p>

                <p className="mb-4">L'Utilisateur s'interdit notamment de :</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    Copier ou de reproduire, décompiler, en tout ou partie la Plateforme et le Service par n'importe
                    quel moyen et sous n'importe quelle forme ;
                  </li>
                  <li>
                    Extraire les Avis de la Plateforme et du Service par quelque moyen que ce soit et quel que soit la
                    finalité poursuivie, notamment à des fins commerciales
                  </li>
                  <li>
                    Utiliser la Plateforme autrement que selon les stipulations strictement interprétées des présentes
                    CGU ;
                  </li>
                  <li>
                    Utiliser, reproduire, extraire, copier, mettre à disposition, représenter, communiquer les Contenus
                    de la Plateforme ou toute publication du Prestataire issue de la Plateforme ou du Service en dehors
                    de la Plateforme et pour des finalités commerciales ou professionnelles ;
                  </li>
                  <li>
                    Modifier, adapter ou pirater la Plateforme ou le Service ou tenter d'une quelconque autre manière
                    d'obtenir un accès non autorisé à la Plateforme ou au Service ou aux réseaux concernés ;
                  </li>
                  <li>
                    Procéder à des extractions totales, substantielles ou répétées, par transfert temporaire ou
                    permanent, ou d'utiliser par la mise à disposition au public, la totalité ou une partie en termes
                    quantitatifs ou qualitatifs de la Plateforme ou des Services et autres bases de données visibles sur
                    la Plateforme ou les Services, que ce soit à des fins commerciales ou autres ;
                  </li>
                  <li>
                    Extraire ou d'utiliser de façon répétée et systématique tout ou partie des informations visibles sur
                    le Service ou la Plateforme, lorsqu'une telle opération excède manifestement une utilisation normale
                    et à titre privé du service offert par Wellbe ;
                  </li>
                  <li>
                    Exploiter, commercialiser ou distribuer tout élément constitutif de la Plateforme ou des Services,
                    notamment les informations visibles sur la Plateforme ou les Services et toute autre base de données
                    ;
                  </li>
                  <li>
                    Utiliser des logiciels ou procédés manuels pour copier tout ou partie de la Plateforme ou du
                    Services de Wellbe ou pour enregistrer ou collecter les informations sur cette Plateforme ou ce
                    Service sans le consentement exprès préalable et écrit de Wellbe ;
                  </li>
                  <li>
                    Utiliser des dispositifs ou logiciels aux fins de perturber ou tenter de perturber le bon
                    fonctionnement de la Plateforme ou du Service ; ou mettre en œuvre des actions qui imposeraient une
                    charge disproportionnée sur ses infrastructures.
                  </li>
                </ul>

                <p className="mb-4">
                  Wellbe se réserve expressément tous les droits sur le nom de domaine www.wellbe.ma et domaines et
                  sous-domaines liés, la dénomination Wellbe, son logo, ses marques de service, noms commerciaux et/ou
                  marques de fabrique. Les autres marques de fabrique, produits et dénominations de société mentionnés
                  sur la Plateforme peuvent être des marques de leurs propriétaires ou concédants respectifs et les
                  droits sur ces marques sont réservés à leurs propriétaires ou concédants respectifs.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-3">OBLIGATIONS CONCERNANT LES PROCHES BÉNÉFICIAIRES</h3>
                <p className="mb-4">
                  L'Utilisateur s'engage à informer le Proche Bénéficiaire de l'ensemble des conditions de Services de
                  Wellbe, ainsi que des obligations qui lui incombent en raison de l'utilisation de ces Services.
                  L'Utilisateur sera responsable et garantit Wellbe contre tout manquement d'un Proche Bénéficiaire aux
                  présentes CGU.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-3">SUSPENSION OU FERMETURE DE COMPTE</h3>
                <p className="mb-4">
                  La violation par l'Utilisateur d'une de ses obligations prévues dans les présentes CGU entraînera le
                  droit pour Wellbe de suspendre ou de fermer le compte de l'Utilisateur.
                </p>
                <p className="mb-4">
                  En cas de plusieurs plaintes des Prestataires concernent l'Utilisateur, ou ses Proches Bénéficiaires
                  (retard au rendez-vous, non présentation...), Wellbe se réserve également la (retard au rendez-vous,
                  non présentation...), Wellbe se réserve également la possibilité de suspendre ou de fermer le compte
                  de l'Utilisateur.
                </p>
                <p className="mb-4">
                  Wellbe notifiera à l'Utilisateur la suspension de son compte en lui envoyant un email à l'adresse
                  email fournie lors de la création de son compte. Cet email mentionnera également le motif de la
                  suspension de son compte ainsi que la durée de cette suspension.
                </p>
                <p className="mb-4">
                  Une fois son compte suspendu, l'Utilisateur ne pourra plus accéder ou utiliser le Service pendant la
                  durée de la suspension.
                </p>

                <p className="mb-4">Toute suspension du compte peut entraîner sa suppression par Wellbe lorsque :</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    Le manquement à l'origine de la suspension du Compte est d'une gravité telle qu'il justifie la
                    résiliation des présentes CGU,
                  </li>
                  <li>le compte a été suspendu à plusieurs reprises au cours des trois derniers mois,</li>
                  <li>
                    l'Utilisateur n'a apporté aucune justification sérieuse dans un délai de dix jours suivant la
                    suspension de son compte.
                  </li>
                </ul>

                <p className="mb-4">La suppression du compte sera notifiée sans délai.</p>
                <p className="mb-4">
                  Une fois le compte supprimé, l'Utilisateur ne pourra plus accéder, ni utiliser le Service.
                </p>
                <p className="mb-4">
                  Suite à une décision, Wellbe en informera l'Utilisateur de la décision prise, qu'il s'agisse de la
                  suppression ou restriction d'un contenu, en précisant les raisons spécifiques liées à la
                  non-conformité de celui-ci ou du comportement de l'Utilisateur avec la documentation de Wellbe ou la
                  loi.
                </p>

                <p className="mb-4">
                  Wellbe détaillera les faits et circonstances ayant mené à cette décision et communiquera à
                  l'Utilisateur les voies de recours disponibles pour contester cette décision. L'Utilisateur bénéficie
                  de la possibilité de contester la décision dans un délai de 6 mois à compter de celle-ci en contactant
                  Wellbe par email à contact@wellbe.ma.
                </p>

                <p className="mb-4">Toute contestation doit comporter les informations suivantes :</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    Identification de la mesure prise par Wellbe (par exemple : retrait ou désactivation de contenu,
                    suspension de compte), et du contenu ou du compte concerné ;
                  </li>
                  <li>Le nom, adresse et numéro de téléphone de l'Utilisateur ;</li>
                </ul>

                <p className="mb-4">
                  Wellbe disposera alors d'un délai de 90 jours à compter de la réception de la demande de l'Utilisateur
                  pour reconsidérer sa décision et lui fournir des informations complètes sur sa décision finale, et lui
                  communiquer l'existence de voies de recours. L'Utilisateur a également le droit de saisir un organe de
                  règlement extrajudiciaire des litiges.
                </p>
              </Section>

              {/* Section 8 */}
              <Section id="8" title="CONDITIONS DE RÉSERVATION ET ANNULATION"  >
                <p className="mb-4">
                  Les modalités de réservation, de modification et d'annulation des rendez-vous sont définies par les
                  prestataires. Les utilisateurs sont tenus de respecter ces conditions.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-3">ANNULATIONS</h3>

                <p className="mb-4">
                  Les annulations doivent être effectuées via la Plateforme ou directement auprès du Prestataire. Sauf
                  cas d'annulation tardive ou de rendez-vous non honoré, l'Utilisateur peut annuler son rendez-vous, ou
                  celui de son Proche Bénéficiaire et se faire rembourser les éventuels montants prépayés pour le
                  rendez-vous (montant du rendez-vous et Frais de Service). Une annulation est considérée comme tardive
                  si l'Utilisation dépasse le délai d'annulation maximum déterminée par le Prestataire. Ce délai
                  d'annulation est indiqué au moment de la réservation du rendez-vous.
                </p>
                <p className="mb-4">
                  Un rendez-vous est considéré comme non-honoré si le Prestataire l'indique comme tel ou le supprime de
                  son agenda avant la fin de journée dudit rendez-vous.
                </p>
                <p className="mb-4">
                  En cas d'annulation tardive ou de non-venue, le Prestataire a la faculté d'appliquer des frais
                  d'annulation, qui seront facturés à l'Utilisateur de la manière suivante :
                </p>

                <ul className="list-disc pl-6 mb-4">
                  <li>
                    En cas de prépaiement (total ou partiel), ces frais d'annulation et les Frais de Service seront
                    facturés et l'Utilisateur sera remboursé du montant prépayé du rendez-vous à concurrence de ces
                    frais ;
                  </li>
                  <li>
                    Dans le cas où l'Utilisateur devait payer au moment du rendez-vous, les frais d'annulation seront
                    prélevés sur le moyen de paiement renseigné lors de la réservation du rendez-vous.
                  </li>
                </ul>

                <p className="mb-4">
                  Le montant des frais d'annulation est directement déterminé par le Prestataire et est indiqué au
                  moment de la réservation.
                </p>

                <p className="mb-4">
                  Toutes conditions d'annulation ou de modification du rendez-vous autre que celles prévues ci- dessus
                  seront soumises aux Conditions Générales de Prestation de Service du Prestataire.
                </p>

                <p className="mb-4 font-bold">
                  ATTENTION, LORSQUE LA PRESTATION EST RÉSERVÉE AU-DELA DU DÉLAI D'ANNULATION TARDIVE DETERMINE PAR LE
                  PRESTATAIRE, L'UTILISATEUR RECONNAÎT ÊTRE INFORME QUE TOUTE ANNULATION OU NON-VENUE POURRA ENGENDRER
                  DES FRAIS D'ANNULATION TARDIVE CORRESPONDANTS. WELLBE ATTIRERA NÉANMOINS SON ATTENTION SUR CE POINT
                  AVANT DE FINALISER LA RÉSERVATION AFIN QUE L'UTILISATEUR DÉCIDE S'IL EST PRÊT OU NON À CONCLURE LE
                  CONTRAT SUR CETTE BASE.
                </p>
              </Section>

              {/* Section 9 */}
              <Section id="9" title="RESPONSABILITÉS"  >
                <h3 className="text-lg font-semibold mb-3">9.1 Responsabilité de WELLBE</h3>

                <p className="mb-4">
                  WELLBE.ma agit en tant qu'intermédiaire et n'est pas responsable de la qualité des prestations
                  fournies par les professionnels.
                </p>
                <p className="mb-4">
                  De manière générale, Wellbe ne pourra voir sa responsabilité engagée pour tout dommage causé par un
                  fait de force majeure, par l'Utilisateur, par un Proche Bénéficiaire, ou par un tiers, ni pour tout
                  dommage indirect et/ou imprévisible.
                </p>
                <p className="mb-4">
                  Wellbe n'agissant qu'en tant qu'intermédiaire ou hébergeur, Wellbe ne saurait être tenue responsable
                  de tout événement en lien avec le rendez-vous chez le professionnel de beauté, et les prestations
                  réalisées lors de ce rendez-vous, y compris s'agissant du prix des prestations et en cas de
                  prépaiement en ligne. Notamment, Wellbe n'est pas en mesure de rembourser un rendez-vous, même en cas
                  de prépaiement
                </p>

                <p className="mb-4">
                  Dans la mesure prévue par la loi, Wellbe n'aura aucune responsabilité découlant de ou liée à ces CGU
                  pour toute perte ou dommage résultant de, découlant de ou lié à :
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    Toute utilisation fautive, incorrecte, illicite, anormale ou négligente de la Plateforme ou du
                    Service par l'Utilisateur,
                  </li>
                  <li>
                    Le non-respect des présentes CGU ou de la réglementation applicable en vigueur par le Prestataire,
                  </li>
                  <li>
                    L'impossibilité temporaire d'accéder à la Plateforme et au Service pour des raisons de maintenance,
                  </li>
                  <li>Tout autre logiciel, plugin, intégration, API ou solution qui n'est pas fourni par Wellbe,</li>
                  <li>Le défaut de sécurisation des identifiants de connexion à son compte,</li>
                  <li>En cas de cause étrangère, non imputable à Wellbe,</li>
                  <li>La fourniture d'une prestation par un professionnel de beauté,</li>
                  <li>Tout Contenu publié par un Prestataire sur la Plateforme,</li>
                  <li>Tout contenu publié par un autre utilisateur ou un tiers sur la Plateforme,</li>
                  <li>
                    Le retard ou le manquement à l'exécution de ses obligations lorsque ce manquement ou ce retard
                    résulte d'un cas de force majeure.
                  </li>
                </ul>

                <h3 className="text-lg font-semibold mt-6 mb-3">9.2 Responsabilité des utilisateurs</h3>
                <p className="mb-4">
                  Les utilisateurs sont responsables de leur comportement sur la plateforme et lors des prestations
                  réservées.
                </p>
              </Section>

              {/* Section 10 */}
              <Section id="10" title="PROCÉDURE DES AVIS"  >
                <p className="mb-4">
                  Wellbe a une obligation de s'assurer que tous les Avis publiés sur la Plateforme sont authentiques et
                  vérifiés et d'informer loyalement sur les conditions de publication d'un tel Avis. Wellbe doit
                  notamment s'assurer de la date des Avis et de l'expérience vécue par ses Utilisateurs. Dans ce cadre
                  et afin d'éviter tout Avis non authentique ni vérifié, Wellbe ne publie que des Avis émanant
                  d'Utilisateurs de sa Plateforme et ayant bénéficié d'un rendez- vous avec un Prestataire dans le cadre
                  de l'utilisation de sa Plateforme et interdit la publication de ces Avis sur d'autres plateformes.
                </p>
                <p className="mb-4">
                  En conséquence, Wellbe a mis en place une procédure spécifique concernant le dépôt des Avis par les
                  Utilisateurs et doit bénéficier d'une licence exclusive sur ces Avis.
                </p>

                <p className="mb-4">
                  Le lendemain du rendez-vous chez un Prestataire, l'Utilisateur - sous réserve que le rendez- vous ait
                  eu lieu - reçoit un mail de la part de Wellbe l'invitant à laisser un Avis dans les sept jours qui
                  suivent le rendez-vous. L'Avis peut être laissé directement sur la page du Prestataire ou dans
                  l'espace « Gérer mes RDV » de la Plateforme. L'Utilisateur ne reçoit aucune contrepartie. Une fois que
                  l'Utilisateur a laissé son avis sur la prestation, Wellbe laisse au Prestataire un délai de sept jours
                  pour notifier si l'Avis peut être publié ou non en application de la liste de motifs de refus des Avis
                  de Wellbe. Tant que le Prestataire n'a rien notifié, l'Utilisateur est en mesure de le modifier sur
                  l'espace « Gérer mes RDV » de la Plateforme. Le Prestataire à propos duquel l'Avis a été publié, peut
                  soit notifier que l'Avis est valide, ce qui entraîne sa publication immédiate sur la Plateforme, soit
                  notifier que l'Avis rentre dans les motifs de refus établis par Wellbe, dans ce dernier cas, l'Avis ne
                  sera pas publié sauf si Wellbe venait à déterminer que le Prestataire avait tort. Le Prestataire peut
                  également répondre à l'Avis de l'Utilisateur. En cas de rejet de l'Avis, l'Utilisateur recevra un mail
                  de la part de Wellbe lui indiquant le motif de refus sélectionné par le Prestataire. L'Utilisateur a
                  alors la possibilité de contester ce refus en répondant à l'email envoyé. Les Avis des Utilisateurs
                  seront, dans tous les cas, disponibles dans leur espace « Gérer mes RDV » de la Plateforme, ainsi que
                  le cas échéant, le motif de refus.
                </p>
                <p className="mb-4">
                  Au bout de sept jours, si le Prestataire n'a émis aucune notification concernant l'Avis de
                  l'Utilisateur, cet Avis est publié automatiquement sur la Plateforme.
                </p>

                <p className="mb-4">La liste des motifs de refus d'un Avis établie par Wellbe est la suivante :</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    L'Avis approuve ou encourage des activités illégales, nuisibles ou comporte des propos grossiers,
                    vulgaires, obscènes, menaçants, diffamatoires ou discriminatoires.
                  </li>
                  <li>
                    L'Avis ne concerne pas une prestation réservée dans un établissement partenaire de Wellbe pour
                    lequel la réservation a été effectuée.
                  </li>
                  <li>
                    L'Avis ne concerne pas la prestation réservée et pour laquelle l'Utilisateur a reçu une invitation à
                    rédiger un Avis (par exemple : Avis concernant une prestation précédente, même réservée dans la même
                    établissement).
                  </li>
                  <li>
                    L'Avis est un spam, une prise de contact indésirable, ou un contenu diffusé de façon répétée ou
                    pouvant déranger.
                  </li>
                  <li>L'Avis a été créé dans un objectif de publicité ou à but commercial.</li>
                </ul>

                <p className="mb-4">
                  L'Utilisateur accorde à Wellbe une licence gratuite, irrévocable, exclusive et transférable sur son
                  Avis pour héberger, stocker, utiliser, reproduire, modifier, adapter, traduire, afficher, publier,
                  éditer tout ou partie de l'Avis aux fins de :
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    Fournir la Plateforme et les Services aux Utilisateurs, y compris, mais sans s'y limiter, permettre
                    aux Utilisateurs et aux Prestataires d'interagir avec l'Avis (pour le consulter ou y répondre),
                  </li>
                  <li>et promouvoir la Plateforme et les Services associés.</li>
                </ul>
                <p className="mb-4">
                  Cette licence est conclue pour la durée de la publication de l'Avis sur la Plateforme et pour le monde
                  entier.
                </p>
              </Section>

              {/* Section 11 */}
              <Section id="11" title="PROCÉDURE DE RÉFÉRENCEMENT DES PROFESSIONNELS"  >
                <p className="mb-4">Il est possible de rechercher un Prestataire en fonction des critères suivants :</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>le type de prestation fourni ;</li>
                  <li>la disponibilité des Prestataires (aujourd'hui, demain, choisir une date) ;</li>
                  <li>la zone géographique du Prestataire (ville ou zone sur la carte).</li>
                </ul>

                <p className="mb-4">
                  Les Prestataires ont conclu un contrat et rémunèrent Wellbe pour être affichés sur la Plateforme et
                  dans le Service : il s'agit nécessairement de professionnel de beauté ayant souscrit une offre auprès
                  de Wellbe.
                </p>
                <p className="mb-4">
                  Wellbe ne perçoit aucune rémunération (ni autre avantage) pour afficher en priorité certains
                  Prestataires et certains Contenus. Par exception, certains établissements de beauté sont affichés sur
                  la Plateforme afin d'informer les Utilisateurs sur leur existence.
                </p>
                <p className="mb-4">
                  L'Utilisateur peut ensuite filtrer les résultats selon les critères secondaires suivants :
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>les mieux notés</li>
                  <li>du + cher au – cher</li>
                  <li>du – moins cher au + cher.</li>
                </ul>

                <p className="mb-4">
                  En l'absence de filtre, les résultats sont affichés en pondérant l'ensemble de ces critères.
                </p>
              </Section>

              {/* Section 12 */}
              <Section id="12" title="SIGNALEMENT"  >
                <p className="mb-4">
                  L'Utilisateur est en droit de signaler un Avis ou un Contenu qui lui semble illicite sur la page d'un
                  Prestataire.
                </p>

                <p className="mb-4">Il pourra alors envoyer un email à qualite@wellbe.ma indiquant :</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    son identité complète ou celle de la personne morale pour laquelle il agit (y compris adresse
                    email),
                  </li>
                  <li>la description du contenu litigieux, son endroit sur la Plateforme,</li>
                  <li>les raisons pour lesquelles ce contenu devrait être supprimé,</li>
                  <li>
                    une déclaration confirmant que l'Utilisateur pense que sa notification ne contient que des
                    informations ou allégations qui sont exactes ou complètes.
                  </li>
                </ul>

                <p className="mb-4">
                  Wellbe attend des Professionnels et Utilisateurs qu'ils se conforment à la réglementation applicable.
                  Ainsi, si Wellbe reçoit un signalement pertinent indiquant un contenu ou une prestation illicite,
                  Wellbe pourra :
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>suspendre temporairement le contenu litigieux ;</li>
                  <li>suspendre temporairement le compte de l'Utilisateur ;</li>
                  <li>supprimer définitivement le contenu litigieux ou le compte de l'Utilisateur.</li>
                </ul>
              </Section>

              {/* Section 13 */}
              <Section id="13" title="MODIFICATIONS"  >
                <p className="mb-4">
                  Wellbe peut modifier en tout ou en partie la Plateforme et le Service afin de maintenir leur
                  conformité aux présentes CGU. Wellbe peut également, à son entière discrétion, modifier tout ou partie
                  de la Plateforme et du Service pour des raisons légales ou techniques, pour maintenir la conformité du
                  Service aux présentes CGU, pour ajouter de nouveaux Services ou pour améliorer les Services existants
                  ou la sécurité desdits Services.
                </p>
                <p className="mb-4">
                  Wellbe notifiera à l'Utilisateur ces mises à jour à la date de leur entrée en vigueur.
                </p>
              </Section>

              {/* Section 14 */}
              <Section id="14" title="DONNÉES PERSONNELLES ET CONFIDENTIALITÉ"  >
                <p className="mb-4">
                  Wellbe traite les données personnelles de l'Utilisateur et de ses Proches Bénéficiaires afin de lui
                  fournir le Service et lors de sa navigation sur la Plateforme. Wellbe s'engage à protéger les données
                  personnelles des utilisateurs conformément à la réglementation en vigueur. Pour plus d'informations,
                  consultez notre Politique de Confidentialité.
                </p>
              </Section>

              {/* Section 15 */}
              <Section id="15" title="DROIT APPLICABLE ET LITIGES"  >
                <p className="mb-4">
                  Les présentes CGU sont soumises au droit marocain. En cas de litige, une solution amiable sera
                  recherchée avant toute action en justice.
                </p>
              </Section>

              {/* Section 16 */}
              <Section id="16" title="CONTACT"  >
                <p className="mb-4">
                  Pour toute question ou réclamation, vous pouvez nous contacter à : contact@wellbe.ma.
                </p>
              </Section>
            </div>

            {/* Document actions */}
            <div className="flex flex-wrap gap-4 justify-end items-center">
              <div>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="inline-flex items-center px-4 py-2 bg-[#002366] text-white rounded-lg hover:bg-[#001845] transition-colors"
                >
                  Retour en haut
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </Layout>
  )
}

export default CGU

