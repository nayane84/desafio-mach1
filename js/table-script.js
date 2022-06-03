function cadAluno(nome, cpf, email, curso) {

    var tbl = document.getElementById("tbl-alunos");
    var qtdLinhas = tbl.rows.length;
    var linha = tbl.insertRow(qtdLinhas);

    var cellId = linha.insertCell(0);
    var cellNome = linha.insertCell(1);
    var cellCpf = linha.insertCell(2);
    var cellEmail = linha.insertCell(3);
    var cellCurso = linha.insertCell(4);
   

    cellId.innerHTML = qtdLinhas;
    cellNome.innerHTML = nome;
    cellCpf.innerHTML = cpf;
    cellEmail.innerHTML = email;
    cellCurso.innerHTML = curso;


}
