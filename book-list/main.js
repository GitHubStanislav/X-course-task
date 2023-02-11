"use strict";

const getData = async () => {
  const res = await fetch(
    "https://courses.prometheus.org.ua/assets/courseware/v1/2c108355bb16192430fcee1e56a3887d/asset-v1:Ciklum+FEB101+2022_T3+type@asset+block/books.json"
  );
  const json = await res.json();
  console.log(json.books);

  let body = document.querySelector(".wrapper-cards");
  json.books.forEach((element) => {
    if (element.image == "") {
      element.image =
        "https://static.javatpoint.com/images/javascript/javascript_logo.png";
    }
    let html = `
      <section class="books">
        <img
          src="${element.image}"
          alt=""
        />
        <h6 class="book-name">Book name:${element.title} </h6>
        <h6 class="book-author">author:${element.author}</h6>
        <div class="price-button-view">
          <h5 class="price">price: ${element.price}</h5>
          <button type="button" class="btn btn-dark view-more">View</button>
        </div>
      </section>`;
    body.innerHTML += html;
  });
};

getData();

// const objJson = function () {
//   fetch(
//     "https://courses.prometheus.org.ua/assets/courseware/v1/2c108355bb16192430fcee1e56a3887d/asset-v1:Ciklum+FEB101+2022_T3+type@asset+block/books.json"
//   )
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data.books);
//       let body = document.querySelector(".wrapper-cards");
//       for (let index = 0; index < data.books.length; index++) {
//         const element = data.books[index];

//         let html = `
//       <section class="books">
//         <img
//           src="${element.image}"
//           alt=""
//         />
//         <h6 class="book-name">Book name:${element.title} </h6>
//         <h6 class="book-author">author:${element.author}</h6>
//         <div class="price-button-view">
//           <h5 class="price">price: ${element.price}</h5>
//           <button type="button" class="btn btn-dark view-more">View</button>
//         </div>
//       </section>`;
//         body.innerHTML += html;
//       }
//     });
// };

// objJson();
// const booksJson = [];
