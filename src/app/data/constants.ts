export const StandardParams = {
  button: {
    character: 'button',
    styles: {
      width: '150px',
      height: '40px',
      borderStyle: 'solid',
      borderWidth: '1px',
      color: 'black',
      backgroundColor: 'transparent',
      borderRadius: '5px',
      borderColor: 'black',
      cursor: 'pointer'
    },
    text: 'Sample submit button',
    type: 'submit'
  },
  checkbox: {
    character: 'checkbox',
    styles: {
      width: '50px',
      height: '50px'
    },
    name: 'Checkbox name',
    value: 'Checkbox value',
    label: 'Check Me!'
  },
  input: {
    character: 'input',
    styles: {
      padding: '5px 10px',
      width: '150px',
      height: '25px',
      borderStyle: 'solid',
      borderColor: 'black',
      borderWidth: '1px',
      color: 'black',
      backgroundColor: '',
      fontSize: '14px'
    },
    name: 'Input name',
    type: 'text',
    placeholder: 'Input placeholder'
  },
  select: {
    character: 'select',
    styles: {
      width: '170px',
      height: '40px',
      borderStyle: 'solid',
      borderWidth: '1px',
      color: 'black',
      backgroundColor: '',
      fontWeight: 'normal'
    },
    options: ['option 1', 'option 2', 'option 3'],
    defaultOption: 'Select an option',
    name: 'Select',
    required: false
  },
  textarea: {
    character: 'textarea',
    styles: {
      padding: '5px 10px',
      width: '150px',
      height: '25px',
      borderStyle: 'solid',
      borderColor: 'black',
      borderWidth: '1px',
      color: 'red',
      backgroundColor: '',
      fontSize: '14px'
    },
    name: 'Test Name',
    text: '',
    placeholder: 'TextAreaPlaceholder'
  }
}
