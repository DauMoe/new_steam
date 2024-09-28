import { writable } from "svelte/store";

export const clientStore = writable({
  header: {
    primary: [{
      title: "store",
      selected: true
    }, {
      title: "community",
      selected: false
    }, {
      title: "$username",
      selected: false
    }, {
      title: "library",
      selected: false
    }, {
      title: "downloads",
      selected: false
    }],
    secondary: []
  },
  username: "DauMoe",
  avatarUrl: "",
  balance: "$10",
  badgeNumber: 20
});