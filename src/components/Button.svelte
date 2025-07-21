<script lang="ts">
  export let label: string = "";  //Text inside the button
  export let onClick: () => void = () => {}; //allows the button to do tasks
  export let type: "button" | "submit" | "reset" = "button"; //type of button. Can be "button", "submit", or "reset"
  export let disabled: boolean = false; //bool to allow user to click the button. Could be used if there is a forum that needs to be filled out before the button can be clicked.
  export let className: string = ""; //allows the user to add a class to the button. This is useful for styling the button in different ways.
</script>

<button type={type} onclick={onClick} disabled={disabled} class={className}> {label} </button>

<style>
    button {
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }

    button:disabled {
        cursor: not-allowed;
    }
</style>