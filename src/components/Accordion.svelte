<script context="module" lang="ts">
    export interface AccordionItem {
        title: string;
        content: string;
          buttons?: {
            label: string;
            onClick: () => void;
            type?: "button" | "submit" | "reset";
            disabled?: boolean;
            className?: string;
        }[];
    }
</script>

<script lang="ts">
    import Button from "./Button.svelte";

    export let items: AccordionItem[] = [];

    let activeIndex: number | null = null;

    function toggle(index: number): void {
        activeIndex = activeIndex === index ? null : index;
    }
</script>

<div class="accordion">
    {#each items as item, index}
        <div class="accordion-item">
            <div class="accordion-header" on:click={() => toggle(index)}>
                {item.title} {activeIndex === index ? '▲' : '▼'}
            </div>
            <div class="accordion-content {activeIndex === index ? 'active' : ''}">
                {item.content}
                {#if item.buttons}
                        <div class="buttons-container">
                            {#each item.buttons as button}
                                <Button
                                    label={button.label}
                                    onClick={button.onClick}
                                    type={button.type || 'button'}
                                    disabled={button.disabled || false}
                                    className={button.className || ''}
                                />
                            {/each}
                        </div>
                    {/if}
            </div>
        </div>
    {/each}
</div>

<style>
    .accordion {
        border-radius: 4px;
        overflow: hidden;
    }

    .accordion-item:last-child {
        border-bottom: none;
    }

    .accordion-header {
        padding: 2rem;
        cursor: pointer;
        font-weight: bold;
    }

    .accordion-content {
        padding: 2rem;
        display: none;
    }

    .accordion-content.active {
        display: block;
    }

    .buttons-container {
        display: flex;
        gap: 0.5rem;
        margin-top: 1rem;
        justify-content: flex-end;
    }
</style>

