<template>
	<div>
		<div class="flex bg-white p-1">
				<div v-for="tag of $data.tagList" :key="tag.id">
					<Tag
						class="m-2"
						@delete="deleteTag(tag.tag_id)"
						:tag="tag"
					/>
				</div>
				<NewTagModal
					class="m-2"
					@add-tag="createTag"
				/>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

import { EventTagCreate, EventTag, Tags } from '~/interfaces/tag';

import Tag from '~/components/atoms/Tag.vue'
import NewTagModal from '~/components/molecules/user/modal/NewTagModal.vue'

export default Vue.extend({
  components: {
    Tag,
		NewTagModal
  },
  props: {
    eventId: { type: Number, required: false }
  },
  data() {
    return {
			title: null,
			tagList: [] as EventTag[],
			isCreateTagModalActive: false
    }
  },
	mounted() {
		this.getTagList()
	},
  methods: {
    createTag(label:string) {
      const h = Math.floor(Math.random() * 360);
			let newTag = {} as EventTagCreate
			newTag.label=label
			newTag.color = `hsl(${h}, 80%, 90%)`;
      newTag.event_id = this.$props.eventId
      this.$axios.$post(`/api/tag/`, newTag)
				.then((res: EventTag) => {
          console.log(res)
          this.getTagList()
				})
				.catch(() => {
				})	
		},
    deleteTag(tag_id: number) {
      this.$axios.$delete(`/api/tag/${this.$props.eventId}/${tag_id}`)
				.then((res: EventTag) => {
          console.log(res)
          this.getTagList()
				})
				.catch(() => {
				})	
		},
    getTagList() {
      this.$axios.$get(`/api/tag/${this.$props.eventId}`)
        .then((res: Tags) => {
          this.$data.tagList = res.tags
        })
        .catch(() => {
        })
    }
	}
})
</script>