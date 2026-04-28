const pets = [
    { id: 1, nome: "Bolinha", especie: "Cachorro" },
    { id: 2, nome: "Sagwa", especie: "Gato" }
];

test('Verifica se a lista de pets possui itens', () => {
    expect(pets.length).toBeGreaterThan(0);
});

test('Verifica se o primeiro pet é o Bolinha', () => {
    expect(pets[0].nome).toBe("Bolinha");
});