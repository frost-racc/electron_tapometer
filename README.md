# Tap'O'Meter App build with electron

![image](https://github.com/user-attachments/assets/869589e2-d033-4848-ad22-646cb6f29376)

```
used packages:
- electron
- electron-forge
- electron-forge-maker-portable
```

This repo ***does not*** contain build project!<br>
In order to build the app please refer to the electron docs at: https://www.electronjs.org/

<p>
  Personally i've injected forge config to create a portable .exe file
</p>

### How to build
Clone repository with <br>
```
git clone https://github.com/frost-racc/electron_tapometer.git
```

Install dependencies<br>
```
npm i
```
Build with
```
npx electron-forge make
```
Results are in `/out/`<br>

