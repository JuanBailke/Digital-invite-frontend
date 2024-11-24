import Convidado from "../model/Convidado";

/**
 * Valida se os campos de um Convidado estão preenchidos corretamente.
 * 
 * @param convidado Um objeto parcial com os dados do convidado.
 * @returns Uma lista de erros, se existirem, ou uma lista vazia se o convidado for válido.
 */
export default function validarConvidado(convidado: Partial<Convidado>): String[] {
    const erros: String[] = [];
    if (!convidado.nome) erros.push('O campo nome deve ser preenchido.');
    if (!convidado.email) erros.push('O campo email deve ser preenchido.');
    return erros;
}