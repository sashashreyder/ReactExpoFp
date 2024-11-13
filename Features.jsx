import React from 'react';
import './Features.css'

function Features() {
    return (
        <section id="features" className="features-section">
            <div className="features-container">
                <div className="feature-card">
                    <h3>Localizar Expositores</h3>
                    <p>Encontre facilmente os expositores que você procura em nosso evento.</p>
                </div>
                <div className="feature-card">
                    <h3>Navegação com Orientação</h3>
                    <p>Oriente-se pelo evento com navegação fácil e precisa.</p>
                </div>
                <div className="feature-card">
                    <h3>Reservar Estandes Online</h3>
                    <p>Reserve seu espaço para o evento com nosso sistema de reserva online.</p>
                </div>
                <div className="feature-card">
                    <h3>Suporte 24/7</h3>
                    <p>Estamos aqui para ajudar você a qualquer hora com nosso suporte contínuo.</p>
                </div>
            </div>
        </section>
    );
}

export default Features;