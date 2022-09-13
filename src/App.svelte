<script>
    // Svelte Imports
    import { onMount } from "svelte";

    // CSS Imports
    import "$lib/css/theme-colors.css";
    import "$lib/css/global.css";

    // Component Imports
    import MainWindow from "$lib/windows/main-window.svelte";
    import TitleBar from "$lib/components/title-bar.svelte";
    import SideBar from "$lib/components/sidebar.svelte";
    
    let isMax;

    onMount(async () => {
        isMax = await mainWindow.getState();
    });

    const windowResize = async () => {
        isMax = await mainWindow.getState();
    };
</script>

<svelte:window on:resize={windowResize} />

<TitleBar {isMax}/>
<main>
	<SideBar />
	<div id="window">
        <MainWindow />
	</div>
</main>