// Simulando o banco de dados ou retorno da API do Petshop
const pets = [
    { id: 1, nome: "Thor", especie: "Cachorro", vacinado: true },
    { id: 2, nome: "Luna", especie: "Gato", vacinado: false },
    { id: 3, nome: "Bolinha", especie: "Hamster", vacinado: true },
    { id: 4, nome: "Rex", especie: "Cachorro", vacinado: true },
    { id: 5, nome: "Mia", especie: "Gato", vacinado: true }
];

describe('Testes Unitários - API de Pets', () => {

    // Teste 1
    test('Deve retornar uma lista com itens', () => {
        expect(pets.length).toBeGreaterThan(0);
    });

    // Teste 2
    test('Os pets devem conter as propriedades obrigatorias', () => {
        const primeiroPet = pets[0];
        expect(primeiroPet).toHaveProperty('id');
        expect(primeiroPet).toHaveProperty('nome');
        expect(primeiroPet).toHaveProperty('especie');
    });

    // Teste 3
    test('Deve encontrar a gata Luna na lista', () => {
        const petEncontrado = pets.find(pet => pet.nome === "Luna");
        expect(petEncontrado).toBeDefined();
        expect(petEncontrado.especie).toBe("Gato");
    });

    // Teste 4
    test('Deve filtrar corretamente apenas os cachorros', () => {
        const cachorros = pets.filter(pet => pet.especie === "Cachorro");
        expect(cachorros.length).toBe(2);
        expect(cachorros[0].nome).toBe("Thor");
    });

    // Teste 5:
    test('Deve identificar pets que ainda precisam ser vacinados', () => {
        const petsNaoVacinados = pets.filter(pet => pet.vacinado === false);
        expect(petsNaoVacinados.length).toBe(1);
        expect(petsNaoVacinados[0].nome).toBe("Luna");
    });

});