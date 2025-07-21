<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { Editor } from '@tiptap/core';
  import StarterKit from '@tiptap/starter-kit';
  import { TextStyle } from '@tiptap/extension-text-style';
  import { Color } from '@tiptap/extension-color';

  let editor: Editor | null = null;
  let content: string = '<p>Hello World!</p>';
  let currentColor: string = '#000000';

  onMount(() => {
    const editorElement = document.querySelector('.editor');
    if (!editorElement) return;

    editor = new Editor({
      element: editorElement,
      extensions: [
        StarterKit,
        TextStyle,
        Color.configure({
          types: ['textStyle'],
        }),
      ],
      content,
      onUpdate: ({ editor }) => {
        content = editor.getHTML();
        currentColor = editor.getAttributes('textStyle').color || '#000000';
      },
    });
  });

  onDestroy(() => {
    editor?.destroy();
  });

  function setTextColor(color: string): void {
    editor?.chain().focus().setColor(color).run();
    currentColor = color;
  }

  function removeTextColor(): void {
    editor?.chain().focus().unsetColor().run();
    currentColor = '#000000';
  }

  function isTextColorActive(): boolean {
    return editor?.isActive('textStyle') || false;
  }

  function handleColorInput(e: Event): void {
    const target = e.target as HTMLInputElement;
    if (target && target.value) {
      setTextColor(target.value);
    }
  }
</script>

<div class="editor-container">
  <div class="menu-bar">
    <input
      type="color"
      bind:value={currentColor}
      on:input={handleColorInput}
    />
    <button
      on:click={removeTextColor}
      disabled={!isTextColorActive()}
    >
      Remove Color
    </button>
  </div>
  <div class="editor" />
</div>

<style>
  .editor-container {
    margin: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .menu-bar {
    padding: 8px;
    border-bottom: 1px solid #ccc;
    display: flex;
    gap: 4px;
    align-items: center;
  }

  .editor {
    padding: 16px;
    min-height: 200px;
  }

  .editor:focus {
    outline: none;
  }

  .editor p {
    margin: 0 0 16px 0;
  }
</style>