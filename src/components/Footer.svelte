<script lang="ts">
    export let year: number = new Date().getFullYear();
    export let companyName: string = "Magic Inc.";
</script>

<footer class="footer">
    <p>&copy; {year} {companyName}. All rights reserved.</p>
</footer>

<style>
    .footer {
        text-align: center;
        padding: 1rem;
        font-size: 0.9rem;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
    }
</style>