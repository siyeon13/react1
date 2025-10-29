const deleteButton = document.getElementById('delete-btn');

if(deleteButton){
    deleteButton.addEventListener('click', event => {
        let id = document.getElementById('article-id').value;
        fetch(`/api/articles/${id}`, {
        method: 'DELETE'
        })
        .then(()=>{
        alert('삭제가 완료되었습니다.');
        location.replace('/articles') });
    });
}

const createButton = document.getElementById('create-btn');

if(createButton) {
createButton.addEventListener('click', event => {
console.log('click');
        fetch('/api/articles', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            title: document.getElementById('title').value,
            content: document.getElementById('content').value
         })
        })
        .then(()=>{
        alert('새글이 등록되었습니다.');
        location.replace('/articles')
        });

    })
}

const updateButton = document.getElementById('modify-btn');

if(updateButton){
    updateButton.addEventListener('click', event => {
        console.log('update click');
        let params = new URLSearchParams(location.search);
        let id = params.get('id');

        fetch(`/api/articles/${id}` , {
        method: 'PUT',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
                title: document.getElementById('title').value,
                content: document.getElementById('content').value
            })
        })
        .then(()=> {
        alert('수정되었습니다.');
        location.replace(`/articles/${id}`)
        })


    })
}

//http://localhost:8080/new-article?id=5