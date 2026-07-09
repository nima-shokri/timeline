# timeline

A React timeline component repackaged from the existing static HTML/CSS demo.

<div align="center">
  <img src="https://raw.githubusercontent.com/nima-shokri/timeline/master/assets/img/html-timeline.png?v=1" alt="Timeline Preview" /> 
</div>

## Install

```bash
npm install @nimsho/vertical-timeline
```

## Usage

```jsx
import Timeline from '@nimsho/vertical-timeline';
import '@nimsho/vertical-timeline/dist/timeline-react.css';

const items = [
  {
    year: '2021',
    side: 'vt-right',
    colorClass: 'vt-blue',
    icon: '/assets/img/icons/1.png',
    entries: [
      { title: 'Subject', text: 'Example text for 2021.' }
    ]
  },
  {
    year: '2022',
    side: 'vt-left',
    colorClass: 'vt-orange',
    icon: '/assets/img/icons/2.png',
    entries: [
      { title: 'Subject', text: 'Example text for 2022.' }
    ]
  }
];

export default function App() {
  return (
    <div style={{ padding: 20, background: '#212429', minHeight: '100vh' }}>
      <Timeline items={items} />
    </div>
  );
}
```

## Publish

This package is built with `microbundle`. To publish to npm you have two common options:

1) One-time OTP (if your account requires 2FA):

  - Get the 6-digit code from your authenticator app (Google Authenticator, Authy, etc.).
  - Run:

```bash
npm publish --access public --otp=123456
```

  Replace `123456` with the code from your authenticator app.

2) Automation token (recommended for CI / automated publishes):

  - On https://www.npmjs.com/, go to your account → Access Tokens → Create New Token.
  - Choose **Automation** and enable the option to bypass 2FA for that token if you want to publish without OTP.
  - Locally (do NOT commit the token):

```bash
export NPM_TOKEN="PASTE_TOKEN_HERE"
printf "//registry.npmjs.org/:_authToken=${NPM_TOKEN}\n" > .npmrc
npm publish --access public
rm -f .npmrc
unset NPM_TOKEN
```

  - Alternatively create a `.npmrc` file on the machine/CI runner that contains exactly one line:

```
//registry.npmjs.org/:_authToken=YOUR_TOKEN_HERE
```

Security note: Never commit `.npmrc` containing a real token into source control. Use environment variables in CI or a local, untracked `.npmrc` file.
