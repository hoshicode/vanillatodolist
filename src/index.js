import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  const p = document.createElement("p");
  p.innerText = inputText;
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode.parentNode);

    // document.getElementById("incomplete-list").removeChild(deleteTarget);

    //完了済みのDOM作成
    const deleteTarget = completeButton.parentNode.parentNode;
    deleteTarget.lastElementChild.lastElementChild.remove();
    deleteTarget.lastElementChild.lastElementChild.remove();
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻る";
    returnButton.addEventListener("click", () => {
      //要素の削除
      deleteFromCompleteList(returnButton.parentNode.parentNode);
      //要素の追加
      const addtext = returnButton.parentNode.firstElementChild.innerText;
      createText(addtext);
    });
    deleteTarget.lastElementChild.appendChild(returnButton);
    console.log(deleteTarget);
    document.getElementById("complete-list").appendChild(deleteTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
    // const deleteTarget = deleteButton.parentNode.parentNode;
    // document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(li);
};

const createText = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  const p = document.createElement("p");
  p.innerText = text;
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode.parentNode);

    // document.getElementById("incomplete-list").removeChild(deleteTarget);

    //完了済みのDOM作成
    const deleteTarget = completeButton.parentNode.parentNode;
    deleteTarget.lastElementChild.lastElementChild.remove();
    deleteTarget.lastElementChild.lastElementChild.remove();
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻る";
    returnButton.addEventListener("click", () => {
      //要素の削除
      deleteFromCompleteList(returnButton.parentNode.parentNode);
      //要素の追加
      const addtext = completeButton.parentNode.firstElementChild.innerText;
    });
    deleteTarget.lastElementChild.appendChild(returnButton);
    console.log(deleteTarget);
    document.getElementById("complete-list").appendChild(deleteTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
    // const deleteTarget = deleteButton.parentNode.parentNode;
    // document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(li);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const deleteFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
