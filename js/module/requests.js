var xmlHttp

export var json

//retorna json com dados do usuario solicitado
export function getUsuario(email) {
    xmlHttp = new XMLHttpRequest();
    var url = "server.php?op=getUsuario&&email=" + email;
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
    xmlHttp.onreadystatechange = usuarioCallback;
}
function usuarioCallback() {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        json = JSON.parse(xmlHttp.responseText);
    }
}

//retorna json com todos agendamentos do usuario
export function getAgendamentos(id) {
    xmlHttp = new XMLHttpRequest();
    var url = "server.php?op=getAgendamentos&&id=" + id;
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
    xmlHttp.onreadystatechange = agendamentosCallback;
}
function agendamentosCallback() {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        json = JSON.parse(xmlHttp.responseText);
    }
}


//retorna json com dados para montar calendario
export function getCalendario(mes, ano, escritorio) {
    xmlHttp = new XMLHttpRequest();
    var url = "server.php?op=getCalendario&&escritorio=" + escritorio + "&mes=" + mes + "&ano=" + ano;
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
    xmlHttp.onreadystatechange = calendarioCallback;
}
function calendarioCallback() {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        json = JSON.parse(xmlHttp.responseText);
    }
}