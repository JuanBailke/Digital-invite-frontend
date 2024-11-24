export default class Convidado {
    static formatar(valor: string): string {
        return valor.replace(/ /g, '-').toLowerCase();
    }
}