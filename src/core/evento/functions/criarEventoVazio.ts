import { Id } from "@/core/shared";
import Evento from "../model/Evento";

/**
 * Cria um objeto parcial de Evento com valores padrão.
 *
 * @returns Um objeto parcial de Evento com campos iniciais vazios ou padrões:
 *          - id: novo identificador gerado.
 *          - nome: string vazia.
 *          - data: data atual.
 *          - local: string vazia.
 *          - descricao: string vazia.
 *          - publicoEsperado: valor padrão 1.
 *          - imagem: string vazia.
 *          - imagemBackground: string vazia.
 */
export default function criarEventoVazio(): Partial<Evento> {
    return {
        id: Id.novo(),
        nome: "",
        data: new Date(),
        local: "",
        descricao: "",
        publicoEsperado: 1,
        imagem: "",
        imagemBackground: "",
    };
}
