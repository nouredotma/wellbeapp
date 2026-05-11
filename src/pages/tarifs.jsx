import Layout from "../components/Layout/Layout";
import { Faq } from "../components/home/Faq";

const Tarifs = () => {

    return (
        <Layout>
            {/* Hero Section */}
            <section className="bg-black text-white py-20 text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold">
                        Les tarifs Wellbe Pro
                    </h1>
                    <p className="mt-4 text-lg">
                        Deux offres sur mesure pour développer votre activité
                        beauté.
                    </p>
                    <ul className="mt-4 space-y-2">
                        <li>✅ Sans rendez-vous vos prestations</li>
                        <li>✅ Sans commission sur vos RDV</li>
                        <li>✅ Sans engagement</li>
                    </ul>
                    <button className="mt-6 bg-white text-black px-6 py-2 rounded">
                        Voir nos offres
                    </button>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-16 bg-gray-100 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8">Nos offres</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Agenda Offer */}
                        <div className="bg-white p-6 rounded shadow">
                            <h3 className="text-xl font-bold">Agenda</h3>
                            <p className="mt-2 text-gray-700">
                                Pour fidéliser votre clientèle et proposer la
                                prise de rendez-vous en établissement.
                            </p>
                            <ul className="mt-4 text-gray-600 text-left space-y-1">
                                <li>✔️ Agenda en ligne</li>
                                <li>✔️ Rappels SMS et e-mail</li>
                                <li>✔️ Réduction des absences</li>
                                <li>✔️ Suivi & gestion du fichier client</li>
                                <li>✔️ Réservation en ligne 24h/24</li>
                            </ul>
                            <button className="mt-6 bg-black text-white px-4 py-2 rounded">
                                Découvrir l’offre
                            </button>
                        </div>

                        {/* Agenda + Caisse Offer */}
                        <div className="bg-white p-6 rounded shadow">
                            <h3 className="text-xl font-bold">
                                Agenda + Caisse
                            </h3>
                            <p className="mt-2 text-gray-700">
                                Pour optimiser la vente de vos produits et
                                encaisser vos clients.
                            </p>
                            <ul className="mt-4 text-gray-600 text-left space-y-1">
                                <li>✔️ Agenda en ligne</li>
                                <li>✔️ Rappels SMS et e-mail</li>
                                <li>✔️ Logiciel de caisse conforme à la loi</li>
                                <li>✔️ Gestion des stocks et des produits</li>
                                <li>
                                    ✔️ Statistiques avancées sur votre salon
                                </li>
                            </ul>
                            <button className="mt-6 bg-black text-white px-4 py-2 rounded">
                                Découvrir l’offre
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <Faq />

            {/* CTA Section */}
            <section className="bg-gray-900 text-white py-16 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold">
                        Plus de 50 000 professionnels ont transformé leurs
                        journées avec Wellbe.
                    </h2>
                    <button className="mt-6 bg-white text-black px-6 py-2 rounded">
                        Découvrir gratuitement
                    </button>
                </div>
            </section>

        </Layout>
    );
};

export default Tarifs;
