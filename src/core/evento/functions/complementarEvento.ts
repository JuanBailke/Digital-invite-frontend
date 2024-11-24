import { Id, Senha } from "@/core/shared";
import Evento from "../model/Evento";
import validarEvento from "./validarEvento";

/**
 * Completa um evento parcial com valores padrão para id, senha e público esperado.
 * Caso o evento parcial contenha erros, lança um erro.
 * @param eventoParcial O evento parcial a ser completado.
 * @returns O evento completo.
 */
export default function complementarEvento(eventoParcial: Partial<Evento>): Evento {
    const erros = validarEvento(eventoParcial);

    if (erros.length) {
        throw new Error(erros.join("\n"));
    }

    const evento: Evento = {
        ...eventoParcial,
        id: eventoParcial.id ?? Id.novo(),
        senha: eventoParcial.senha ?? Senha.nova(20),
        publicoEsperado: +(eventoParcial.publicoEsperado ?? 1),
    }as Evento;

    return evento;
}