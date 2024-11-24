export default class Senha{
    static nova(tamanho: number = 15): string{
        const minusculas = 'abcdefghijklmnopqrstuvwxyz';
        const maiusculas = minusculas.toUpperCase();
        const numeros = '0123456789';
        const especiais = '!@#$%&*';
        const grupos = [minusculas, maiusculas, numeros, especiais];
        const senha = [];
        for (let i = 0; i < tamanho; i++) {
            const randomIndex = grupos[Math.floor(Math.random() * grupos.length)];
            senha.push(randomIndex[Math.floor(Math.random() * randomIndex.length)]);
        }
        return senha.join("");
    }
}