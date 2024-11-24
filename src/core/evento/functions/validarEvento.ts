import Evento from "../model/Evento";


/**
 * Valida se um evento possui todos os campos necessários preenchidos.
 *
 * @param evento O evento a ser validado.
 * @returns Um array de strings com os erros encontrados. Se o array estiver vazio, o evento está válido.
 */
export default function validarEvento(evento: Partial<Evento>): String[] {
    const erros: String[] = [];
    if(!evento.alias) erros.push('O campo alias deve ser preenchido.');
    if(!evento.nome) erros.push('O campo nome deve ser preenchido.');
    if(!evento.descricao) erros.push('O campo descricao deve ser preenchido.');
    if(!evento.data) erros.push('O campo data deve ser preenchido.');
    if(!evento.local) erros.push('O campo local deve ser preenchido.');
    if(!evento.publicoEsperado || evento.publicoEsperado < 1) erros.push('O campo publicoEsperado deve ser preenchido.');
    if(!evento.imagem) erros.push('O campo imagem deve ser preenchido.');
    if(!evento.imagemBackground) erros.push('O campo imagemBackground deve ser preenchido.');
    
    return erros;
}