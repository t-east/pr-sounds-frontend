<template>
    <div class="flex">
        <input type="checkbox" class="mt-1 mr-2" name="checkbox" id="checkbox" @input="$emit('input', $event.target.checked)" :checked="$props.checked" />
				<p>
					{{ $props.text }}
        </p>
    </div>
</template>

<script>
export default {
 props: {
   checked: {
     type: Boolean,
     default: false,
   },
   text: {
     type: String,
     default: '',
   },
 },
}
</script>