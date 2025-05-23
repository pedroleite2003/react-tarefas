import { useContext, useRef } from "react";
import { LoginContext } from "../contexts/LoginContext";
import { useNavigate } from "react-router";

const Login = () => {
    const emailInput = useRef();
    const senhaInput = useRef();
    const { setLogado } = useContext(LoginContext);
    const navigate = useNavigate();

    function logar(event){
        event.preventDefault();

        let dados = {
            email: emailInput.current.value,
            senha: senhaInput.current.value
        }
        if(dados.email == "pedromilk2003@gmail.com" && dados.senha == "1234"){
            setLogado(true);
            navigate("/");
        }else{
            alert("Email ou senha incorretos!")
        }
    }

    return ( 
        <div className="h-screen flex justify-center items-center bg-slate-100">
            <form className="w-[350px] p-4 rounded-lg bg-white" onSubmit={logar}>
                <h3 className="text-lg font-bold text-slate-500 mb-8 text-center">Seja bem-vindo</h3>
                <label className="block text-slate-700 font-bold mb-1">Email</label>
                <input ref={emailInput} type="text" placeholder="Digite seu Email" className="w-full pl-4 rounded border border-slate-500 h-[40px] mb-4"/>
                <label className="block text-slate-700 font-bold mb-1">Senha</label>
                <input ref={senhaInput} type="text" placeholder="********" className="w-full pl-4 rounded border border-slate-500 h-[40px] mb-4"/>
                <button className="text-white leading-[46px] bg-slate-500 px-4 rounded uppercase font-semibold w-full">Entrar</button>

            </form>
        </div>
     );
}
 
export default Login;