import { defineComponent } from 'vue'
import { ark, type HTMLArkProps } from '../factory'
import { useEditableContext } from './editable-context'

export type EditableEditTriggerProps = HTMLArkProps<'button'>

export const EditableEditTrigger = defineComponent({
  name: 'EditableEditTrigger',
  setup(_, { slots, attrs }) {
    const api = useEditableContext()

    return () => (
      <ark.button {...api.value.editTriggerProps} {...attrs}>
        {slots.default?.()}
      </ark.button>
    )
  },
})
