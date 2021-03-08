const bookinfo = ()=>{
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let bookid = document.getElementById('bookid').value

    document.getElementById('titleData').innerHTML = `${title}`
    document.getElementById('authorData').innerHTML = `${author}`
    document.getElementById('bookidData').innerHTML = `${bookid}`
}