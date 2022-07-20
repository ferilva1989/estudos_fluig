function externo() {
    console.log("Externo");

    var pessoa = {
        Nome: "João",
        Sobrenome: "Silva",
        Departamento: "TI",
    };

    document.getElementById("nome").innerHTML = pessoa.Nome + " trabalha no " + pessoa.Departamento;
}