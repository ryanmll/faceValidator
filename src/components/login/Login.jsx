import "../login/Login.css"
import logo from "../../img/logo.png"
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Login() {

    const contest = document.getElementById("contest");
    const [mudarLogin, setmudarLogin] = useState()

    function troca() {
        setmudarLogin(1)
        if (mudarLogin == 1) {
            contest.classList.add("active")
        }
    }
    function trocadnv() {
        setmudarLogin(0)
        if (mudarLogin == 0) {
            contest.classList.remove("active")
        }
    }

    // function error(){
    //     if(document.getElementById('teste').value == ''){
    //         msgDados.style.display = 'flex';
    //         setTimeout(() => {
    //             msgDados.style.display = 'none';
    //         },2000);

    //     }else{
    //         msgDados.style.display = 'none';
    //         cadLoader();
    //     }
    // };

    // function error2(){
    //     if(document.getElementById('teste2').value == ''){
    //         msgDados.style.display = 'flex';
    //         setTimeout(() => {
    //             msgDados.style.display = 'none';
    //         },2000);

    //     }else{
    //         msgDados.style.display = 'none';
    //         window.location.href = "http://127.0.0.1:5501/telas%20principais/conquistas/index.html"
    //     }
    // };

    // function cadLoader(){
    //     document.querySelector(".loader").style.display = 'block';
    //     document.querySelector(".confirm").style.display = 'none';

    //     setTimeout(() => {
    //         document.querySelector(".loader").style.display = 'none';
    //         document.querySelector(".confirm").style.display = 'flex';  
    //     },3000);
    // }


    // function setError(index){
    //     campos[index].style.border = '1px solid hsl(0, 100%, 74%)';

    // }

    // function removeError(index){
    //     campos[index].style.border = '';
    // }

    // function emailvalidate(){
    //     if(!emailRegex.test(campos[0].value) && campos[0].value.length > 0 ){
    //         setError(0)
    //     }else{
    //         removeError(0);
    //     }
    // }

    return (
        <>
            <div className="container" id="container">
                <div className="contest" id="contest">

                    <div className="form-container sign-up">
                        <form className="form-content">
                            <img src={logo} alt="logo" className="logofv" />

                            <div class="coolinput">
                                <label for="input" class="text">Email:</label>
                                <input type="text" name="input" class="input" />
                            </div>


                            <div class="coolinput">
                                <label for="input" class="text">Senha:</label>
                                <input type="text" name="input" class="input" />
                            </div>

                            <div class="coolinput">
                                <label for="input" class="text">Confirme sua senha:</label>
                                <input type="text" name="input" class="input" />
                            </div>

                            <div className="buttons">
                                <button class="btn">
                                    <span></span>
                                    Criar
                                </button>
                            </div>

                            <div className="loader"></div>
                            <div className="confirm">

                                <p>
                                    Sua conta foi criada com sucesso !
                                    <i className="ri-check-line check"></i>
                                </p>


                                <a>
                                    <div className="singinbtn">
                                        Continuar
                                    </div>
                                </a>
                            </div>



                        </form> {/* fechamento do form-content */}

                    </div> {/* fechamento da div form-container*/}


                    <div className="form-container sign-in">
                        <form>

                            <Link to={"/"}>
                                <div className="circle">
                                    <i class="ri-arrow-left-line"></i>
                                </div>
                            </Link>

                            <img src={logo} alt="logo" className="logofv" />


                            <div class="coolinput">
                                <label for="input" class="text">Email:</label>
                                <input type="text" name="input" class="input" />
                            </div>

                            <div class="coolinput">
                                <label for="input" class="text">Senha:</label>
                                <input type="text" name="input" class="input" />
                            </div>


                            <div className="buttons">
                                <Link to={"/principal"}>
                                    <button class="btn">
                                        <span></span>
                                        Entrar
                                    </button>
                                </Link>
                            </div>


                        </form>
                    </div>

                    <div className="toggle-container">
                        <div className="toggle">
                            <div className="toggle-panel toggle-left">
                                <h1>
                                    Registre-se
                                </h1>
                                <p>
                                    Seja bem vindo(a), faça seu já o seu registro e desfrute o melhor do nosso site.
                                </p>
                                <button className="hidden" id="login" onClick={trocadnv}>
                                    Login
                                </button>
                            </div>

                            <div className="toggle-panel toggle-right">
                                <h1>
                                    Faça seu login !
                                </h1>
                                <p>
                                    Seja bem vindo(a) de volta querido aluno(a), sentimos sua falta !
                                </p>

                                <button className="hidden" id="cadastro" onClick={troca}>
                                    Cadastre - se
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


