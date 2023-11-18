document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.grid-item');

    items.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('selected');
        });
    });
});

function submitSelection() {
    // 選択した趣味を処理するロジックをここに追加
    alert('選択が完了しました！');
}
