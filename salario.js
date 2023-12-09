import entradaDados from 'readline-sync';

let salarios_minimos = [
    {salario:510, ano:2010},
    {salario:545, ano:2011},
    {salario:622, ano:2012},
    {salario:678, ano:2013},
    {salario:724, ano:2014},
    {salario:788, ano:2015},
    {salario:880, ano:2016},
    {salario:937, ano:2017},
    {salario:954, ano:2018},
    {salario:998, ano:2019},
    {salario:1045, ano:2020}
];

let inflacao = [
    {ipca:5.91, ano:2010},
    {ipca:6.50, ano:2011},
    {ipca:5.84, ano:2012},
    {ipca:5.91, ano:2013},
    {ipca:6.41, ano:2014},
    {ipca:10.67, ano:2015},
    {ipca:6.29, ano:2016},
    {ipca:2.95, ano:2017},
    {ipca:3.75, ano:2018},
    {ipca:4.31, ano:2019},
    {ipca:4.52, ano:2020}
];

console.log("Escolha uma das alternativas:\n");

console.log("1 - Listar os salários mínimos de 2010 à 2020\n");
console.log("2 - Listar o índice IPCA de 2010 à 2020\n");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA");

let opcao = entradaDados.questionInt("\nDigite o numero da sua escolha: ");

switch(opcao) {
    case 1:
        for (let i = 0; i < salarios_minimos.length; i++) {
            const dadosSalarial = salarios_minimos[i];
    
            console.log("\nAno: ".padEnd(31, '.') + dadosSalarial.ano);
            console.log("Salário mínimo: ".padEnd(30, '.') + "R$ " + dadosSalarial.salario.toFixed(2).replace(".", ","));
        }
        break;
    case 2:
        for (let i = 0; i < inflacao.length; i++) {
            const dadosIpca = inflacao[i];
    
            console.log("\nAno: ".padEnd(31, '.') + dadosIpca.ano);
            console.log("Inflação IPCA: ".padEnd(30, '.') + dadosIpca.ipca.toFixed(2).replace(".", ",") + "%");
        }
        break;
        case 3:
            for (let i = 0; i < salarios_minimos.length; i++) {
                const dadosSalarial = salarios_minimos[i];
                const dadosIpca = inflacao[i];
        
                console.log("\nAno: ".padEnd(31, '.') + dadosSalarial.ano);
                console.log("Salário mínimo: ".padEnd(30, '.') + "R$ " + dadosSalarial.salario.toFixed(2).replace(".", ","));
        
                // Cálculo do crescimento salarial
                if (i > 0) {
                    const salarioAnterior = salarios_minimos[i - 1].salario;
                    const crescimentoSalarial = ((dadosSalarial.salario - salarioAnterior) / salarioAnterior) * 100;
                    console.log("Crescimento Salarial: ".padEnd(30, '.') + crescimentoSalarial.toFixed(2).replace(".", ",") + "%");
                } else {
                    console.log("Crescimento Salarial: -");
                }
        
                console.log("Inflação IPCA: ".padEnd(30, '.') + dadosIpca.ipca.toFixed(2).replace(".", ",") + "%");
            }
            break;        
}
