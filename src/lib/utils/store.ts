import { writable } from "svelte/store";

export const clientStore = writable({
  header: {
    client: [{
      id: 1,
      title: "store",
      selected: true,
      items: [{
        id: 1,
        title: "Home"
      }, {
        id: 2,
        title: "Browser"
      }, {
        id: 3,
        title: "Discover"
      }, {
        id: 4,
        title: "Point shop"
      }, {
        id: 5,
        title: "Curators"
      }, {
        id: 6,
        title: "Gift Cards"
      }, {
        id: 7,
        title: "News"
      }]
    }, {
      id: 2,
      title: "community",
      selected: false,
      items: [{
        id: 1,
        title: "Home"
      }, {
        id: 2,
        title: "Collections"
      }, {
        id: 3,
        title: "News and Updates"
      }]
    }, {
      id: 3,
      title: "$username",
      selected: false,
      items: null
    }, {
      id: 4,
      title: "library",
      selected: false,
      items: null
    }, {
      id: 5,
      title: "downloads",
      selected: false,
      items: null
    }],
  },
  username: "DauMoe",
  avatarUrl: "",
  balance: "$10",
  badgeNumber: 20
});