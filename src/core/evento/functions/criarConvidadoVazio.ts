import { Id } from "@/core/shared";
import Convidado from "../model/Convidado";

/**
 * Cria um objeto parcial de Convidado com valores padrão.
 *
 * @returns Um objeto parcial de Convidado com campos iniciais vazios ou padrões:
 *          - id: novo identificador gerado.
 *          - nome: string vazia.
 *          - email: string vazia.
 *          - confirmado: valor padrão true.
 *          - possuiAcompanhantes: valor padrão false.
 *          - qtdeAcompanhantes: valor padrão 0.
 */
export default function criarConvidadoVazio(): Partial<Convidado> {
    return {
        id: Id.novo(),
        nome: '',
        email: '',
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
    };

}