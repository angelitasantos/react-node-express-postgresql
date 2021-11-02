import React from 'react';

import './style.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="limitar-container">
                <div className="footer-container">
                    <div className="footer-horario">
                        <h3 className="titulo-sessao">Horários de atendimento</h3>

                        <p>Agende um horário</p>
                        <p>(31) 99999-0000
                            <a className="" href="https://web.whatsapp.com/" target="_blank ">
                                <img className="icon-whatsapp" src="./logo192.png" alt="icone whatsapp" title="icone whatsapp" />
                            </a>
                        </p>
                        <p className="link-email">email:   |    
                            <a href="https://gmail.com" target="_blank ">
                                email@email.com
                            </a>
                        </p>

                        <ul className="lista-horarios">
                            <li><p>Segundas a sextas </p><p>das 08:00 às 18:00hrs</p></li>
                            <li><p>Sábados </p><p>das 08:00 às 13:00hrs</p></li>
                            <li><p>Domingos e Feriados </p><p>a combinar</p></li>
                        </ul>

                    </div>

                    <div className="footer-horario">
                        <h3 className="titulo-sessao">Onde estamos localizados</h3>
                        <a className="" href="https://goo.gl/maps/3nUoqN2AS6pwZGNg8" target="_blank ">
                            <img className="icon-localizacao" src="./logo192.png" alt="icone localizacao" title="icone localizacao" />
                        </a>
                        <p>Rua ABC, 123 - Bairro XYZ, Belo Horizonte - MG   |   CEP: 31000-000</p>
                    </div>

                </div>
                <div className="titulo-sessao">
                    © Copyright 2021   |   SanLis Gestão
                </div>
            </div>
        </footer>
    );
}

export default Footer;