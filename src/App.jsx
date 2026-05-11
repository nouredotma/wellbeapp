import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import {
    Admin,
    Articles,
    Articles1,
    Articles2,
    Articles3,
    Barbier,
    CGU,
    Calendary,
    Carriere,
    Client,
    Coiffeur,
    Demande,
    DevenirPartenaire,
    Establishment,
    Home,
    Horaire,
    Institus,
    LesIncontournables,
    Login,
    MonCompte,
    NotreEquipe,
    Owner,
    Payment,
    Personnel,
    PostFilter,
    QuestionsFrequentes,
    Rating,
    Service,
    Solutions,
    Spa,
    Tarifs,
} from './pages/index';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/demande" element={<Demande />} />
                <Route path="/login" element={<Login />} />
                <Route path="/mon-compte" element={<MonCompte />} />
                <Route path="/coiffeur" element={<Coiffeur />} />
                <Route path="/barbier" element={<Barbier />} />
                <Route path="/institus" element={<Institus />} />
                <Route path="/post-filter" element={<PostFilter />} />
                <Route path="/establishment/:id" element={<Establishment />} />
                <Route path="/tarifs" element={<Tarifs />} />
                <Route path="/spa" element={<Spa />} />
                
                <Route path="/admin" element={<Admin />} />

                <Route path="/horaire" element={<Horaire />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/client" element={<Client />} />
                <Route path="/rating" element={<Rating />} />

                {/**Owner */}
                <Route path="/owner/:id" element={<Owner />}>
                    <Route path="admin" element={<Admin />} />
                    <Route path="service" element={<Service />} />
                    <Route path="calendar" element={<Calendary />} />
                </Route>
                <Route path="/admin/:id" element={<Admin />} >
                    <Route path="personnel" element={<Personnel />} />
                    <Route path="horaire" element={<Horaire />} />
                </Route>

                {/* Footer link pages */}
                <Route path="/cgu" element={<CGU />} />
                <Route path="/questions-frequentes" element={<QuestionsFrequentes />} />
                <Route path="/carriere" element={<Carriere />} />
                <Route path="/notre-equipe" element={<NotreEquipe />} />
                <Route path="/les-incontournables" element={<LesIncontournables />} />
                <Route path="/devenir-partenaire" element={<DevenirPartenaire />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/article1" element={<Articles1 />} />
                <Route path="/article2" element={<Articles2 />} />
                <Route path="/article3" element={<Articles3 />} />
            </Routes>
        </Router>
    );
}

export default App;
