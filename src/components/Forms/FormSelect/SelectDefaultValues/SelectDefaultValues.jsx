// Holds FormSelect values
export const select_escolaridade = [
    {selectid: 'escolaridade', label: 'Pessoa Analfabeta', value: 'analfabeto'},
    {selectid: 'escolaridade', label: 'Educação Infantil', value: 'infantil'},
    {selectid: 'escolaridade', label: 'Ensino Fundamental Incompleto', value: 'ifundamental'},
    {selectid: 'escolaridade', label: 'Ensino Fundamental Completo', value: 'fundamental'},
    {selectid: 'escolaridade', label: 'Ensino Médio Incompleto', value: 'imedio'},
    {selectid: 'escolaridade', label: 'Ensino Médio Completo', value: 'medio'},
    {selectid: 'escolaridade', label: 'Ensino Superior Incompleto', value: 'isuperior'},
    {selectid: 'escolaridade', label: 'Ensino Superior Completo', value: 'superior'},
    {selectid: 'escolaridade', label: 'Pós-graduação', value: 'pos'},
    {selectid: 'escolaridade', label: 'Mestrado', value: 'mestrado'},
    {selectid: 'escolaridade', label: 'Doutorado', value: 'doutorado'},
];

export const select_estadocivil = [
    {selectid: 'estadocivil', label: 'Pessoa Solteira', value: 'solteiro'},
    {selectid: 'estadocivil', label: 'Pessoa Casada', value: 'casado'},
    {selectid: 'estadocivil', label: 'Pessoa Separada', value: 'separado'},
    {selectid: 'estadocivil', label: 'Pessoa Divorciada', value: 'divorciado'},
    {selectid: 'estadocivil', label: 'Pessoa Viúva', value: 'viuvo'},
];

export const select_residencia = [
    {selectid: 'residencia', label: 'Residência Própria', value: 'proprio'},
    {selectid: 'residencia', label: 'Residência Alugada', value: 'aluguel'},
    {selectid: 'residencia', label: 'Residência Emprestada', value: 'empresta'},
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
        {selectid: selectid, label: '10', value: 10},
        {selectid: selectid, label: '+', value: 11},
    ])
}