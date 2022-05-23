import newNode from "./newNode.js";

export default function ( where , data) {
  let newFragment = document.createDocumentFragment();

  data.forEach((user , index)  => {
    let newTr = newNode(user,index + 1);

    newFragment.append(newTr);
  });

  where.innerHTML = '';
  where.append(newFragment);
}