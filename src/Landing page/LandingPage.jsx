import logo from "../img/logo.png";
import "../Landing page/LandingPage.css"
import { Link } from "react-router-dom";
import ilustração from "../img/desenho1.png"
import ilust1 from "../img/ilust1.png"
import ilust2 from "../img/ilust2.png"
import ilust3 from "../img/ilust3.png"


export default function LandingPage() {
    return (
        <>
            <div className="container">
                <nav>
                    <img src={logo} alt="logo" id="logo" />

                    <ul>
                        <Link to={"produtos"}>
                            <li>
                                Produtos
                            </li>
                        </Link>
                        <Link to={"/conta"}>
                            <li>
                                Minha conta
                            </li>
                        </Link>
                        <Link to={"Login"}>
                            <button id="btnLogin">
                                Login
                            </button>
                        </Link>
                    </ul>
                </nav>

                <header>
                    <div className="part1">
                        <h1>
                            Face Validator deixa o dia a dia em instituções bem mais práticos <span>
                                com um simples clique
                            </span>
                        </h1>
                    </div>
                    <div className="partImg">
                        <img src={ilustração} alt="ilustração" />

                    </div>

                </header>

            </div>

            <main>
                <h1>
                    O que podemos fazer por você ?
                </h1>

                <div className="line"></div>

                <div className="partition">
                    <img src={ilust1} className="ilustracao" id="first" />

                    <div className="separation">
                        <h2>
                            Proteção de dados :
                        </h2>
                        <p>
                            Garantimos que os dados do seu cliente
                            serão tratados de forma segura e confidencial .
                        </p>
                    </div>
                </div>

                <div className="line"></div>

                <div className="partition">
                    <div className="separation">
                        <h2>
                            Praticidade :
                        </h2>
                        <p>
                            Tenha informações de seus funcionários ou alunos na palma da sua mão (horário de chegada, horário de saída, produtividade e etc ...) .
                        </p>
                    </div>

                    <img src={ilust2} className="ilustracao ultimg" />

                </div>

                <div className="line"></div>

                <div className="partition" >
                    <img src={ilust3} className="ilustracao ultimg" />

                    <div className="separation" >
                        <h2>
                            Suporte :
                        </h2>
                        <p>
                            Contamos com suporte tanto em documentos quanto em tempo real para que aja uma ajuda melhor em caso de dúvidas .
                        </p>
                    </div>


                </div>
                <div className="line"></div>

            </main>

            <section>
                <h1>
                    UM POUCO DO NOSSO SERVIÇO
                </h1>
                <h2>
                    GARANTIMOS UM BOM SERVIÇO, SEM EXCEÇÃO.
                    <br />

                    POIS FAZER VOCÊ FELIZ SE TORNA A NOSSA MISSÃO .
                </h2>
            </section>

            <section className="cardes">

                <section className="sectionCards">
                    <div className="tit">
                        <i class="ri-thumb-up-line"></i>

                        <h3>
                            Melhor atendimento
                        </h3>

                    </div>
                    <p>
                        aqui oferecemos o melhor atendimento para todos, deixar nossos clientes satisfeitos é a nossa meta .
                    </p>
                </section>


                <section className="sectionCards">
                    <div className="tit">
                        <i class="ri-money-dollar-circle-line"></i>

                        <h3>
                            O melhor preço para você
                        </h3>

                    </div>
                    <p>
                        garantimos um preço bom e de forma acessível para que todos possam comprar nossos produtos .
                    </p>
                </section>


                <section className="sectionCards">
                    <div className="tit">
                        <i class="ri-store-line"></i>

                        <h3>
                            Produtos de qualidades
                        </h3>

                    </div>
                    <p>
                        vendemos só produtos de qualidade para um melhor resultado possível para você .
                    </p>
                </section>
            </section>

            <section className="button">
                <Link to={"/suporte"}>
                    <button id="fc">
                        Fale Conosco !
                    </button>
                </Link>
            </section>

            <footer>

                <div className="info">
                    <i class="ri-map-pin-2-line"></i>
                    <p>
                        Rua Rita Belarmino Pereira, 556 - Monte Castelo
                    </p>


                    <p>
                        Ubajara - CE, 62350-000
                    </p>
                </div>

                <div className="info">
                    <i className="ri-instagram-line"></i>
                    <p>
                        Face_validador
                    </p>
                </div>

                <div className="info" id="ultimainfo">
                    <i className="ri-phone-line"></i>
                    <p>
                        (88) 9645-5904
                    </p>
                </div>


            </footer>

        </>

    )

}