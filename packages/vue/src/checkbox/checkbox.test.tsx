import user from '@testing-library/user-event'
import { render, waitFor } from '@testing-library/vue'
import { defineComponent, Fragment, ref } from 'vue'
import { Checkbox, CheckboxControl, CheckboxInput, CheckboxLabel, CheckboxProps } from '.'

const ComponentUnderTest = (props: CheckboxProps) => (
  <Checkbox {...props}>
    <CheckboxLabel>Checkbox</CheckboxLabel>
    <CheckboxInput />
    <CheckboxControl data-testid="control" />
  </Checkbox>
)
describe('Checkbox', () => {
  it('should render', async () => {
    render(ComponentUnderTest)
  })

  it('should handle check and unchecked', async () => {
    const onChange = vi.fn()
    const { getByRole } = render(ComponentUnderTest, { props: { onChange } })

    const checkbox = getByRole('checkbox')

    await user.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  it('should handle indeterminate state properly', async () => {
    const { getByTestId } = render(ComponentUnderTest, { props: { indeterminate: true } })
    expect(getByTestId('control')).toHaveAttribute('data-indeterminate')
  })

  it('should allow controlled usage', async () => {
    const ControlledComponentUnderTest = defineComponent({
      setup() {
        const checked = ref(false)

        return () => (
          <Fragment>
            <button onClick={() => (checked.value = true)}>set checked</button>
            <ComponentUnderTest modelValue={checked.value} />
          </Fragment>
        )
      },
    })

    const { getByRole, getByText } = render(ControlledComponentUnderTest)

    expect(getByRole('checkbox')).not.toBeChecked()
    await user.click(getByText('set checked'))
    await waitFor(() => expect(getByRole('checkbox')).toBeChecked())
  })
})