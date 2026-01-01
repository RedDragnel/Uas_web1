function validasiLogin(){
    let u = username.value;
    let p = password.value;
    if(u=="" || p==""){
        alert("Harus diisi!");
        return false;
    }
    if(p.length < 5){
        alert("Password minimal 5 karakter");
        return false;
    }
    window.location="index.html";
    return false;
}

function tambahTransaksi(){
    let buku = document.getElementById("buku").value;
    let peminjam = document.getElementById("peminjam").value;

    if(buku=="" || peminjam==""){
        alert("Data kosong!");
        return false;
    }

    document.getElementById("data").innerHTML += `
    <tr>
        <td>${buku}</td>
        <td>${peminjam}</td>
        <td><button onclick="this.parentElement.parentElement.remove()">Hapus</button></td>
    </tr>`;
    return false;
}
