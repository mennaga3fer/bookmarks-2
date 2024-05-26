document.addEventListener('DOMContentLoaded', function() {
    const bookmarkNameInput = document.getElementById('bookmarkName');
    const bookmarkURLInput = document.getElementById('bookmarkURL');
    const submitButton = document.getElementById('submitbtn');
    const tableContent = document.getElementById('tableContent');
    let bookmarks = [];

    function addBookmark() {
        const name = bookmarkNameInput.value.trim();
        const url = bookmarkURLInput.value.trim();

        if (name && url) {
            const bookmark = { name, url };
            bookmarks.push(bookmark);
            displayBookmarks();
            clearInputs();
        }
    }

    function displayBookmarks() {
        tableContent.innerHTML = '';
        bookmarks.forEach((bookmark, index) => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${bookmark.name}</td>
                <td><a href="${bookmark.url}" target="_blank" class="btn" style="background-color:#9eb13b"><i class="fa-regular fa-eye"></i> Visit</a></td>
                <td><button class="btn btn-danger" onclick="deleteBookmark(${index})"  style="background-color:#eb1c36"> <i class="fa-regular fa-trash-can"></i> Delete</button></td>
            `;

            tableContent.appendChild(row);
        });
    }

    function deleteBookmark(index) {
        bookmarks.splice(index, 1);
        displayBookmarks();
    }

    function clearInputs() {
        bookmarkNameInput.value = '';
        bookmarkURLInput.value = '';
    }

    submitButton.addEventListener('click', addBookmark);
    window.deleteBookmark = deleteBookmark;
});