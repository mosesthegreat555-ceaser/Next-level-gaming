# Mobile app — Next Level Gaming & Esports Arena

A React Native Expo application with React Navigation. Includes **Home**, **About**, **Packages**, **Package Details**, **Calculate Fees**, and **Contact** screens.

## Open in Visual Studio Code

1. Install **Node.js** (the current LTS version) and the **Expo Go** app on your phone.
2. In VS Code, choose **File → Open Folder** and select `mobile-app`.
3. Open **Terminal → New Terminal**.
4. Run `npm install` (requires internet on first setup).
5. Run `npx expo install --fix` if Expo reports mismatched dependency versions.
6. Run `npx expo start`.
7. Scan the QR code with **Expo Go** (Android) or the iPhone camera. Keep your phone and computer on the same Wi-Fi. If LAN connection fails, try `npx expo start --tunnel` (requires internet).

## File structure

- `App.js`: bottom tab navigation plus a stack for package details.
- `src/data.js`: demo packages, booking discounts, 15% VAT and quote calculations.
- `src/screens/`: one screen file per part of the application.
- `src/components/UI.js`: reusable card, screen, heading and button styles.
- `assets/`: logo from the project report.

## Project/demo behaviour

- Open the Packages tab, then select **View details** to see inclusions and prices.
- Tap **Add to fee calculator** to start a quotation for that package.
- Add an Ultimate Gamer Pass (R1,500) and Racing Simulator Challenge (R650): total **R2,348.88**, after 5% discount and 15% VAT.
- The contact form validates the name, email, phone and message; it **does not send a real email**.
- There is no live booking or payment system; the implementation is a coursework prototype.

### Compatibility

This project uses Expo SDK 58. Keep Expo Go and the project SDK on compatible versions; see Expo's official SDK upgrade guidance if Expo Go requests a different version.
