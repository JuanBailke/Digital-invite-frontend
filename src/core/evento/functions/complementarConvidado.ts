import Convidado from "../model/Convidado";
import validarConvidado from "./validarConvidado";

/**
 * Completa um convidado parcial com valores padrão e verifica se o mesmo é válido.
 * Caso o convidado parcial contenha erros, lança um erro.
 * @param convidado O convidado parcial a ser completado.
 * @returns O convidado completo.
 */
export default function complementarConvidado(convidado: Partial<Convidado>): Convidado {
    const erros = validarConvidado(convidado);

    if (erros.length > 0) {
        throw new Error(erros.join("\n"));
    }

    const qtdeAcompanhantes = convidado.qtdeAcompanhantes ?? 0;
    const temAcompanhantes = convidado.possuiAcompanhantes && convidado.confirmado && qtdeAcompanhantes > 0;

    const convidadoAtualizado = {
        ...convidado,
        qtdeAcompanhantes: temAcompanhantes ? qtdeAcompanhantes : 0,
        possuiAcompanhantes: temAcompanhantes,
    };
    
    return convidadoAtualizado as Convidado;
}