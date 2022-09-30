export const inputs = [
  {
    name: 'username',
    type: 'text',
    placeholder: 'Username',
    label: 'Username',
    required: true,
    errorMessage: '',
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    label: 'Email',
    required: true,
    errorMessage: '',
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    label: 'Password',
    required: true,
    errorMessage:
      'Password should contain 8-20 characters. 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character required.',
    pattern:
      '(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,20}).*$',
  },
  {
    name: 'confirm',
    type: 'password',
    placeholder: 'Confirm Password',
    label: 'Confirm Password',
    required: true,
    errorMessage: 'Passwords do not match',
  },
  {
    name: 'profilePic',
    type: 'text',
    placeholder: 'Upload Picture',
    label: 'Profile Picture',
    required: false,
    errorMessage: '',
  },
];
