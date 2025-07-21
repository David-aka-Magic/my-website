<script lang="ts">
    import Accordion from '../../components/Accordion.svelte';

    const projects = [
        {
            title: 'This Website',
            content: 'Description for This Website',
            buttons: [
                {
                    label: 'View Code',
                    onClick: () => console.log('View Code clicked'),
                },
            ],
        },
        {
            title: 'Dots',
            content: 'Description for Dots',
            buttons: [
                {
                    label: 'View Code',
                    onClick: () => console.log('View Code clicked'),
                },
            ],
        },
        {
            title: 'Random Colors',
            content: 'Description for Random Colors',
            buttons: [
                {
                    label: 'View Code',
                    onClick: () => console.log('View Code clicked'),
                },
            ],
        }
    ];
</script>

<div class="page">
    <h1>My Projects</h1>
<Accordion items={projects} />
</div>

<style>
    .page {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
    }

    .page h1 {
        text-align: center;
        margin-bottom: 20px;
    }
</style>