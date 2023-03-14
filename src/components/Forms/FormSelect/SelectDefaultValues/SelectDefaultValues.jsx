// Holds FormSelect values
export function select_school(selectid) {
    return ([
        {selectid: selectid, label: 'Pessoa Analfabeta', value: 'analfabeto'},
        {selectid: selectid, label: 'Educação Infantil Completa ou em Curso', value: 'infantil'},
        {selectid: selectid, label: 'Ensino Fundamental Incompleto', value: 'ifundamental'},
        {selectid: selectid, label: 'Ensino Fundamental Completo', value: 'fundamental'},
        {selectid: selectid, label: 'Ensino Médio Incompleto', value: 'imedio'},
        {selectid: selectid, label: 'Ensino Médio Completo', value: 'medio'},
        {selectid: selectid, label: 'Ensino Superior Incompleto', value: 'isuperior'},
        {selectid: selectid, label: 'Ensino Superior Completo', value: 'superior'},
        {selectid: selectid, label: 'Pós-graduação', value: 'pos'},
        {selectid: selectid, label: 'Mestrado', value: 'mestrado'},
        {selectid: selectid, label: 'Doutorado', value: 'doutorado'},
    ])
}

export function select_marital(selectid) {
    return ([
        {selectid: selectid, label: 'Pessoa Solteira', value: 'solteiro'},
        {selectid: selectid, label: 'Pessoa Casada', value: 'casado'},
        {selectid: selectid, label: 'Pessoa Separada', value: 'separado'},
        {selectid: selectid, label: 'Pessoa Divorciada', value: 'divorciado'},
        {selectid: selectid, label: 'Pessoa Viúva', value: 'viuvo'},
    ])
};

export const select_residencia = [
    {selectid: 'residencia', label: 'Residência Própria', value: 'proprio'},
    {selectid: 'residencia', label: 'Residência Alugada', value: 'aluguel'},
    {selectid: 'residencia', label: 'Residência Emprestada', value: 'empresta'},
    {selectid: 'residencia', label: 'Residência Móvel (ex: Barraca)', value: 'empresta'},
    {selectid: 'residencia', label: 'Veículo ou Barco', value: 'empresta'},
    {selectid: 'residencia', label: 'Outro', value: 'outro'},
];

export function select_qtd(selectid) {
    return ([
        {selectid: selectid, label: '0', value: 0},
        {selectid: selectid, label: '1', value: 1},
        {selectid: selectid, label: '2', value: 2},
        {selectid: selectid, label: '3', value: 3},
        {selectid: selectid, label: '4', value: 4},
        {selectid: selectid, label: '5', value: 5},
        {selectid: selectid, label: '6', value: 6},
        {selectid: selectid, label: '7', value: 7},
        {selectid: selectid, label: '8', value: 8},
        {selectid: selectid, label: '9', value: 9},
        {selectid: selectid, label: '10+', value: 10},
    ])
}

export function select_income(selectid) {
    return ([
        {selectid: selectid, label: 'Nenhuma renda (R$0,00)', value: 'Nenhuma renda'},
        {selectid: selectid, label: 'Menos de R$500', value: 'Menos de R$500'},
        {selectid: selectid, label: 'R$500 a R$1000', value: 'R$500 a R$1000'},
        {selectid: selectid, label: 'R$1000 a R$2000', value: 'R$1000 a R$2000'},
        {selectid: selectid, label: 'R$2000 a R$3000', value: 'R$2000 a R$3000'},
        {selectid: selectid, label: 'R$3000 a R$4000', value: 'R$3000 a R$4000'},
        {selectid: selectid, label: 'R$4000 a R$5000', value: 'R$4000 a R$5000'},
        {selectid: selectid, label: 'Mais de R$5000', value: 'Mais de R$5000'},
    ])
}

export function select_worksstatus(selectid) {
    return ([
        {selectid: selectid, label: 'Pessoa Desempregrada', value: 'Pessoa Desempregrada'},
        {selectid: selectid, label: 'Pessoa Empregada', value: 'Pessoa Empregada'},
        {selectid: selectid, label: 'Pessoa Autônoma', value: 'Pessoa Autônoma'},
        {selectid: selectid, label: 'Pessoal Aposentada', value: 'Pessoal Aposentada'},
        {selectid: selectid, label: 'Em Linceça / Afastado', value: 'Em Linceça / Afastado'},
        {selectid: selectid, label: 'Freelancer', value: 'Freelancer'},
        {selectid: selectid, label: 'Estudante', value: 'Estudante'},
        {selectid: selectid, label: 'Emprego Não Remunerado', value: 'Emprego Não Remunerado'},
        {selectid: selectid, label: 'Outro', value: 'Outro'},
    ])
}

export const select_escolaridade_criancas = [
    {selectid: "escolaridade_criancas", label: 'Não há crianças no grupo familiar', value: 'Não há crianças no grupo familiar'},
    {selectid: "escolaridade_criancas", label: 'Todas as crianças frequentam a escola', value: 'Todas as crianças frequentam a escola'},
    {selectid: "escolaridade_criancas", label: 'Apenas algumas crianças frequentam a escola', value: 'Apenas algumas crianças frequentam a escola'},
    {selectid: "escolaridade_criancas", label: 'As crianças não possuem acesso a escola', value: 'Nenhuma criança possue acesso a escola'},
]

export function select_istrue(selectid) {
    return ([
        {selectid: selectid, label: 'Sim', value: true},
        {selectid: selectid, label: 'Não', value: false},
    ])
}

/*

export const select_default = [
    {selectid: "default", label: '', value: ''},
    {selectid: "default", label: '', value: ''},
    {selectid: "default", label: '', value: ''},
    {selectid: "default", label: '', value: ''},
    {selectid: "default", label: '', value: ''},
    {selectid: "default", label: '', value: ''},
]

*/