import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:4000'
})

export const cadastrarUsuario = async(url: string, dados: Object, setDados: Function) =>{
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const login = async(url: string, dados: Object, setDados: Function) =>{
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const buscar = async(url: string, setDados: Function, header: Object) => {
    const resposta =  await api.get(url, header)
    setDados(resposta.data)
}

export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
}

export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
}


const usuario = {	
	usuario:"root@root.com",
	senha:"rootroot"
}

export const teste = async():Promise<any> =>{
    const response = await api.post(`/usuarios/logar`,usuario);
    return response.data
}