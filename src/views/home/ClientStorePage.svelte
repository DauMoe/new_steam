<script lang="ts">
    import { PrimaryHeader, SecondHeader } from "components";

    export let listNavigation = [{
        displayText: "store",
        path: "/",
        onClick: () => {},
        subMenu: [{
        displayText: "home"
        },{
        displayText: "browse"
        },{
        displayText: "points shop"
        },{
        displayText: "curators"
        },{
        displayText: "gift cards"
        },{
        displayText: "news"
        }]
    }, {
        displayText: "community",
        path: "/",
        onClick: () => {},
        subMenu: [{
        displayText: "home"
        },{
        displayText: "discussion"
        },{
        displayText: "workshop"
        },{
        displayText: "market"
        },{
        displayText: "broadcasts"
        }]
    }, {
        displayText: "{user}",
        path: "/",
        onClick: () => {},
        subMenu: []
    }, {
        displayText: "library",
        path: "/",
        onClick: () => {},
        subMenu: []
    }, {
        displayText: "downloads",
        path: "/",
        onClick: () => {},
        subMenu: []
    }];

    let selectedIndex: number = 0;

    const onSelected = (item: any, index: number) => {
        selectedIndex = index;
    }
</script>

<PrimaryHeader
    {listNavigation}
    defaultIndex={selectedIndex}
    {onSelected}
/>
<SecondHeader
    listNavigation={listNavigation[selectedIndex].subMenu}
/>