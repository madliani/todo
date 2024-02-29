import { describe, expect, it } from 'vitest'

import TodoItem from '@/components/TodoItem.vue'
import { mount } from '@vue/test-utils'

describe('TodoItem', () => {
  it('renders properly', () => {
    const description = 'First task.'
    const title = 'Item #1'
    const wrapper = mount(TodoItem, { props: { description, title } })

    expect(wrapper.text()).toContain(title)
    expect(wrapper.text()).toContain(description)
  })
})
