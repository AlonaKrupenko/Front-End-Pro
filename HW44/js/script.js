class AlbumsList {
  async loadList(link) {
    let response = await fetch(link);
    let data = await response.json();

    let albumsList = document.createElement("ol");
    for (let i = 0; i < data.length; i++) {
      let elem = data[i];

      let title = elem.title;
      let id = elem.id;

      let listItem = new ListItem(title, id).createItem();
      albumsList.append(listItem);
    }
    document.body.append(albumsList);
  }
}

class ListItem {
  constructor(title, id) {
    this.title = title;
    this.id = id;
  }

  createItem() {
    let li = document.createElement("li");
    li.classList.add("bg-light", "mb-2", "border-bottom");

    let listItemContent = document.createElement("div");
    listItemContent.classList.add(
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    let listItemTitle = document.createElement("h5");
    listItemTitle.innerHTML = this.title;
    listItemTitle.classList.add("mb-0");

    let listItemLink = document.createElement("a");
    listItemLink.classList.add("btn", "btn-success", "album-link");
    listItemLink.innerHTML = "Go to album";

    listItemContent.append(listItemTitle);
    listItemContent.append(listItemLink);
    li.append(listItemContent);

    listItemLink.onclick = async () => {
      let newWindow = window.open();
      let allPhotoes = document.createElement("div");
      let heading = document.createElement("h3");
      heading.innerHTML = `Album ${this.id}`;
      heading.style.textAlign = "center";

      newWindow.document.body.append(heading);
      newWindow.document.body.append(allPhotoes);

      let requestedAddress =
        "https://jsonplaceholder.typicode.com/photos?albumId=" + this.id;

      let dataAlbum = await fetch(requestedAddress);
      let response = await dataAlbum.json();

      for (let j = 0; j <= response.length - 1; j++) {
        let img = new Image();
        img.style.margin = "10px";

        img.src = response[j]["url"];

        allPhotoes.append(img);
      }
    };
    return li;
  }
}

let list = new AlbumsList();
list.loadList("https://jsonplaceholder.typicode.com/albums");
